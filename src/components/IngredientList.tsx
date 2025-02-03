import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
//הוספת רכיבים למתכון
interface IngredientListProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  error?: string;
}

const IngredientList = ({ ingredients, setIngredients, register, watch, error }: IngredientListProps) => {
  const [ingredientsError, setIngredientsError] = useState<string>('');
  const newIngredient = watch('newIngredient');

  const handleAddIngredient = () => {
    if (newIngredient?.trim()) {
      if (ingredients.length >= 20) {
        setIngredientsError('Maximum 20 ingredients allowed');
        return;
      }
      if (ingredients.includes(newIngredient.trim())) {
        setIngredientsError('This ingredient already exists');
        return;
      }
      setIngredients([...ingredients, newIngredient.trim()]);
      // Clear the input field by setting its value to empty string
      const input = document.querySelector('input[name="newIngredient"]') as HTMLInputElement;
      if (input) {
        input.value = '';
      }
      setIngredientsError('');
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
    setIngredientsError('');
  };

  return (
    <Box>
      <TextField
        label="Add Ingredient"
        {...register('newIngredient')}
        error={!!error || !!ingredientsError}
        helperText={error || ingredientsError}
        fullWidth
        InputProps={{
          endAdornment: (
            <Button
              onClick={handleAddIngredient}
              disabled={!newIngredient}
              variant="contained"
              size="small"
              sx={{ ml: 1 }}
            >
              Add
            </Button>
          ),
        }}
      />

      <List dense>
        {ingredients.map((ingredient, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1
            }}
          >
            <ListItemText primary={ingredient} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleRemoveIngredient(index)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IngredientList;