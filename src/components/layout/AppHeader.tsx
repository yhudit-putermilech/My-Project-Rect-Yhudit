import { AppBar, Toolbar, Box, Container, Button } from '@mui/material';
import Login from '../Login';
import UserProfile from '../UserProfile';
import NavList from './NavList';
//Header  מציג את
interface AppHeaderProps {
    isAuthenticated: boolean;
    onLogout: () => void;
}

const AppHeader = ({ isAuthenticated, onLogout }: AppHeaderProps) => {
    return (
        //<AppBar position="static" color="default">
        <AppBar position="static" sx={{ backgroundColor: '#f48fb1' }}>
            <Container maxWidth="lg">
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    px: { xs: 1, sm: 2 }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!isAuthenticated ? (
                            <Login />
                        ) : (
                            <>
                                <UserProfile />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    onClick={onLogout}
                                    sx={{ ml: 2 }}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </Box>

                    <NavList isAuthenticated={isAuthenticated} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppHeader;
