import React from "react";
import { TextField, Stack, DialogContent } from "@mui/material";
interface LoginFormProps {
    formData: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
    };
    mode: 'login' | 'register';
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ formData, mode, handleInputChange }: LoginFormProps) => {
    return (
        <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
                {mode === 'register' && (
                    <>
                        <TextField
                            name="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            name="address"
                            label="Address"
                            value={formData.address}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </>
                )}
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
            </Stack>
        </DialogContent>
    );
};

export default LoginForm;