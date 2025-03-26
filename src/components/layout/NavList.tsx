import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';
import TheatersIcon from '@mui/icons-material/Theaters';
import { 
    Collections,
    Home as HomeIcon, 
    Info as InfoIcon,
    Add as AddIcon,
    Theaters, 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
interface NavListProps {
    isAuthenticated: boolean;
}

const NavList = ({ isAuthenticated }: NavListProps) => {
    const navigate = useNavigate();

    const navItems = [
        { path: '/', icon: <HomeIcon sx={{ mr: 1 }} />, label: 'Home' },
        { path: '/about', icon: <InfoIcon sx={{ mr: 1 }} />, label: 'About' },
        { path: '/courses', icon: <Collections sx={{ mr: 1 }} />, label: 'Album' },
        { path: '/recipes', icon: < Theaters sx={{ mr: 1 }} />, label: 'Klaus' },
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
