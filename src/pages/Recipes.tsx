import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  CircularProgress,
  Button
} from '@mui/material';
import { Restaurant as RecipeIcon, Add as AddIcon } from '@mui/icons-material';
import { AppDispatch, RootState } from '../store/store';
import { fetchRecipes, selectRecipe } from '../store/recipeSlice';
import { useUserContext } from '../context/UserContext';
import RecipeDetail from '../components/RecipeDetail';
//דף של רשימת התמכונים
const Recipes = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { recipes, selectedRecipe, loading, error } = useSelector((state: RootState) => state.recipes);
    const { state: { isAuthenticated } } = useUserContext();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 3 }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

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
                <Typography variant="h2">Recipes</Typography>
                
                {isAuthenticated && (
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => navigate('/add-recipe')}
                    >
                        Add Recipe
                    </Button>
                )}
            </Box>

            <Box sx={{ display: 'flex', gap: 4 }}>
                <Paper elevation={2} sx={{ width: '30%', maxHeight: '70vh', overflow: 'auto' }}>
                    <List>
                        {recipes.map((recipe) => (
                            <ListItem key={recipe.id} disablePadding>
                                <ListItemButton 
                                    onClick={() => dispatch(selectRecipe(recipe))}
                                    selected={selectedRecipe?.id === recipe.id}
                                >
                                    <ListItemText primary={recipe.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>

                <Paper elevation={2} sx={{ width: '70%', maxHeight: '70vh', overflow: 'auto' }}>
                    {selectedRecipe ? (
                        <RecipeDetail recipe={selectedRecipe} />
                    ) : (
                        <Box sx={{ p: 3, textAlign: 'center' }}>
                            <Typography variant="h6" color="text.secondary">
                                Select a recipe to view details
                            </Typography>
                        </Box>
                    )}
                </Paper>
            </Box>
        </Paper>
    );
};

export default Recipes;