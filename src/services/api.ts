//שרת
import axios, { AxiosError } from 'axios';

const BASE_URL = 'http://localhost:3000/api';

interface UserData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
}

interface ApiError {
    message: string;
    code: string;
}

const getErrorMessage = (error: AxiosError): string => {
    if (error.response?.status === 401) {
        return 'Invalid email or password. Please try again.';
    }
    if (error.response?.status === 404) {
        return 'User not found. Please check your email or create a new account.';
    }
    if (error.response?.status === 409) {
        return 'An account with this email already exists.';
    }
    if (error.response?.status === 400) {
        return 'Please check your input and try again.';
    }
    if (error.response?.status === 500) {
        return 'Server error. Please try again later.';
    }
    if (!error.response) {
        return 'Network error. Please check your internet connection.';
    }
    
    return 'An unexpected error occurred. Please try again.';
};

export const api = {
    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(`${BASE_URL}/user/login`, {
                email,
                password
            });
            
            // Get the full user data after successful login
            if (response.data?.userId) {
                const userResponse = await axios.get(`${BASE_URL}/user/${response.data.userId}`, {
                    headers: {
                        'user-id': response.data.userId.toString()
                    }
                });
                
                return {
                    ...response.data,
                    user: {
                        ...userResponse.data,
                        id: response.data.userId,
                        email: email
                    }
                };
            }
            
            return response.data;
        } catch (error) {
            const err = error as AxiosError;
            throw new Error(getErrorMessage(err));
        }
    },

    register: async (userData: UserData) => {
        try {
            // Step 1: Register with email and password
            const registerResponse = await axios.post(`${BASE_URL}/user/register`, {
                email: userData.email,
                password: userData.password
            });
            
            if (!registerResponse.data?.userId) {
                throw new Error('Registration failed - no user ID received');
            }

            // Step 2: Update user with additional information
            const userId = registerResponse.data.userId;
            const updateResponse = await axios.put(
                `${BASE_URL}/user`,
                {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    address: userData.address,
                    phone: userData.phone
                },
                {
                    headers: {
                        'user-id': userId.toString()
                    }
                }
            );

            return {
                ...registerResponse.data,
                user: {
                    ...updateResponse.data,
                    id: userId,
                    email: userData.email
                }
            };
        } catch (error) {
            const err = error as AxiosError;
            throw new Error(getErrorMessage(err));
        }
    },

    updateUser: async (userData: Omit<UserData, 'password'>, userId: number) => {
        try {
            const response = await axios.put(`${BASE_URL}/user`, userData, {
                headers: {
                    'user-id': userId.toString()
                }
            });
            
            return {
                ...response.data,
                id: userId,
                email: userData.email
            };
        } catch (error) {
            const err = error as AxiosError;
            throw new Error(getErrorMessage(err));
        }
    }
};