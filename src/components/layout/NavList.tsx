import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { 
    Home as HomeIcon, 
    Info as InfoIcon, 
    School as SchoolIcon, 
    Restaurant as RecipeIcon,
    Add as AddIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
//פרטי ניוט לגולש
interface NavListProps {
    isAuthenticated: boolean;
}

const NavList = ({ isAuthenticated }: NavListProps) => {
    const navigate = useNavigate();

    const navItems = [
        { path: '/', icon: <HomeIcon sx={{ mr: 1 }} />, label: 'Home' },
        { path: '/about', icon: <InfoIcon sx={{ mr: 1 }} />, label: 'About' },
        { path: '/courses', icon: <SchoolIcon sx={{ mr: 1 }} />, label: 'Courses' },
        { path: '/recipes', icon: <RecipeIcon sx={{ mr: 1 }} />, label: 'Recipes' },
    ];

    if (isAuthenticated) {
        navItems.push({ path: '/add-recipe', icon: <AddIcon sx={{ mr: 1 }} />, label: 'Add' });
    }

    return (
        <List sx={{ display: 'flex', p: 0, m: 0 }}>
            {navItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                    <ListItemButton onClick={() => navigate(item.path)} sx={{ px: 2 }}>
                        {item.icon}
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default NavList;