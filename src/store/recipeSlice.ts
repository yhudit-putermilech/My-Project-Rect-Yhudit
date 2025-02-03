import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe } from '../types/Recipe';
//ניהול מצב
interface RecipeState {
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    loading: boolean;
    error: string | null;
}

const initialState: RecipeState = {
    recipes: [],
    selectedRecipe: null,
    loading: false,
    error: null
};

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async () => {
        const response = await axios.get('http://localhost:3000/api/recipes');
        return response.data;
    }
);

export const fetchRecipeById = createAsyncThunk(
    'recipes/fetchRecipeById',
    async (id: number) => {
        const response = await axios.get(`http://localhost:3000/api/recipes/${id}`);
        return response.data;
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        selectRecipe: (state, action) => {
            state.selectedRecipe = action.payload;
        },
        clearSelectedRecipe: (state) => {
            state.selectedRecipe = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch recipes';
            })
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
                state.selectedRecipe = action.payload;
            });
    }
});

export const { selectRecipe, clearSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

