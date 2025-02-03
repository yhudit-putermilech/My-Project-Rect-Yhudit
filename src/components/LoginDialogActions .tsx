import { Button, DialogActions } from "@mui/material";
//פונקציה של תהליך הרישום עצמו
interface LoginDialogActionsProps {
    mode: 'login' | 'register';
    loading: boolean;
    onModeSwitch: () => void;
    onClose: () => void;
    onSubmit: () => void;
}

const LoginDialogActions = ({ 
    mode, 
    loading, 
    onModeSwitch, 
    onClose, 
    onSubmit 
}: LoginDialogActionsProps) => {
    return (
        <DialogActions>
            <Button onClick={onModeSwitch}>
                Switch to {mode === 'login' ? 'Register' : 'Login'}
            </Button>
            <Button onClick={onClose}>
                Cancel
            </Button>
            <Button 
                onClick={onSubmit}
                disabled={loading}
            >
                {loading ? 'Loading...' : (mode === 'login' ? 'Login' : 'Register')}
            </Button>
        </DialogActions>
    );
};

export default LoginDialogActions;