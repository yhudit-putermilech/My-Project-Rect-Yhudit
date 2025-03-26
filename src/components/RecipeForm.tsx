import { TextField, Box, Button } from '@mui/material';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import IngredientList from './IngredientList';
interface RecipeFormProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  errors: FieldErrors;
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}
const RecipeForm = ({ 
  register, 
  watch,
  errors, 
  ingredients,
  setIngredients, 
  isSubmitting,
  onSubmit 
}: RecipeFormProps) => {
  const navigate = useNavigate();

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 800, mx: 'auto' }}>
        <TextField
          label="Title"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message as string}
          fullWidth
        />

        <TextField
          label="Description"
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message as string}
          multiline
          rows={2}
          fullWidth
        />

        <IngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
          register={register}
          watch={watch}
          error={errors.newIngredient?.message as string}
        />

        <TextField
          label="Instructions"
          {...register('instructions')}
          error={!!errors.instructions}
          helperText={errors.instructions?.message as string}
          multiline
          rows={4}
          fullWidth
        />

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={() => navigate('/recipes')}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Recipe'}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default RecipeForm;