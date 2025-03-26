import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import type { Recipe } from '../types/Recipe';
interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {recipe.title}
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph>
        {recipe.description}
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="h6" gutterBottom>
        Ingredients
      </Typography>
      <List dense>
        {recipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="h6" gutterBottom>
        Instructions
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        {recipe.instructions}
      </Typography>
    </Box>
  );
};

export default RecipeDetail;