import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Recipes from '../pages/Recipes';
import AddRecipe from '../pages/AddRecipe';
import Example from '../pages/Example';
const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="add-recipe" element={<AddRecipe />} />
      <Route path="example" element={<Example />} />
    </Route>
  </Routes>
  );
};
export default AppRoutes;