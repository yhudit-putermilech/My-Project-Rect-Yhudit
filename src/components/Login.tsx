import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { api } from "../services/api";
import { Button, Dialog, DialogTitle, Alert } from "@mui/material";
import LoginForm from "./LoginForm ";
import LoginDialogActions from "./LoginDialogActions ";
const Login = () => {
    const { dispatch } = useUserContext();
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: ""
    });
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        if (!formData.email || !formData.password) {
            setError("Email and password are required");
            return;
        }
        if (mode === 'register' && (!formData.firstName || !formData.lastName)) {
            setError("First name and last name are required for registration");
            return;
        }
        setLoading(true);
        setError("");
        try {
            if (mode === 'register') {
                await api.register(formData);
                const loginResponse = await api.login(formData.email, formData.password);
                handleLoginResponse(loginResponse);
            } else {
                const response = await api.login(formData.email, formData.password);
                handleLoginResponse(response);
            }
            setOpen(false);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };
    const handleLoginResponse = (response: any) => {
        if (response?.user) {
            dispatch({
                type: "LOGIN",
                payload: response.user
            });
        } else {
            setError("Invalid response from server");
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setError("");
    };
    const handleModeSwitch = () => {
        setMode(mode === 'login' ? 'register' : 'login');
        setError("");
    };
    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                {mode === 'login' ? 'Login' : 'Register'}
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{mode === 'login' ? 'Login' : 'Register'}</DialogTitle>
                {error && (
                    <Alert severity="error" sx={{ mx: 3, mt: 1 }}>
                        {error}
                    </Alert>
                )}
                <LoginForm 
                    formData={formData}
                    mode={mode}
                    handleInputChange={handleInputChange}
                />
                <LoginDialogActions 
                    mode={mode}
                    loading={loading}
                    onModeSwitch={handleModeSwitch}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSubmit}
                />
            </Dialog>
        </div>
    );
};
export default Login;