import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useUserContext } from '../../context/UserContext';
import AppHeader from './AppHeader';
//מבנה כללי של האפליקציה
const AppLayout = () => {
    const { state: { isAuthenticated }, dispatch } = useUserContext();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT", payload: null });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppHeader 
                isAuthenticated={isAuthenticated} 
                onLogout={handleLogout}
            />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: 'background.default'
                }}
            >
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default AppLayout;