import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paper, Box, Typography } from '@mui/material';
import {  RestaurantMenu as RecipeIcon } from '@mui/icons-material';
import { AppDispatch } from '../store/store';
import { fetchRecipes } from '../store/recipeSlice';
import { useUserContext } from '../context/UserContext';
import axios from 'axios';
import RecipeForm from '../components/RecipeForm';
//מוסיף מתכון חדש לאתר
const recipeSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must not exceed 100 characters'),
  description: yup
    .string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must not exceed 500 characters'),
  instructions: yup
    .string()
    .required('Instructions are required')
    .min(20, 'Instructions must be at least 20 characters'),
  newIngredient: yup
    .string()
    .optional()
    .transform((value) => (value === undefined || value === null ? '' : value))
    .test('ingredient-length', 'Ingredient must be at least 2 characters', 
      function(this: yup.TestContext, value: string | undefined) {
        if (value === undefined) return true;
        return value === '' || value.length >= 2;
      })
    .max(50, 'Ingredient must not exceed 50 characters'),
});
type FormInputs = yup.InferType<typeof recipeSchema>;
const AddRecipe = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { state: { user } } = useUserContext();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>({
    resolver: yupResolver(recipeSchema),
    mode: 'onChange'
  });
  const onSubmit = async (data: FormInputs) => {
    try {
      if (!user?.id) {
        alert('You must be logged in to add a recipe');
        return;
      }
      const recipeData = {
        title: data.title,
        description: data.description,
        instructions: data.instructions,
        ingredients,
        products: []
      };
      await axios.post(
        'http://localhost:3000/api/recipes',
        recipeData,
        {
          headers: {
            'Content-Type': 'application/json',
            'user-id': user.id.toString()
          }
        }
      );
      dispatch(fetchRecipes());
      navigate('/recipes');
    } catch (error: any) {
      if (error.response?.status === 401) {
        alert('Your session has expired. Please login again.');
      } else {
        alert(error.response?.data?.message || 'Failed to add recipe');
      }
    }
  };
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mb: 4
      }}>
        <RecipeIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h2">Add New Recipe</Typography>
      </Box>
      <RecipeForm
        register={register}
        watch={watch}
        errors={errors}
        ingredients={ingredients}
        setIngredients={setIngredients}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Paper>
  );
};
export default AddRecipe;