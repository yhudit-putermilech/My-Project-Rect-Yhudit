import { useState, useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { api } from "../services/api";
//קומפוננטה שמעדכנת נתוני לקוח במקרה וכבר רשום ורוצה לשנות משהו 
const UpdateUserForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { state: { user }, dispatch } = useUserContext();
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    address: user.address || '',
    phone: user.phone || ''
  });
  useEffect(() => {
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      address: user.address || '',
      phone: user.phone || ''
    });
  }, [user]);
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  const handleSave = async () => {
    try {
      if (!user.id) {
        throw new Error("User ID is missing");
      }
      const response = await api.updateUser(formData, user.id);      
      if (response) {
        const updatedUser = {
          ...user,             // שמירת השדות הקיימים
          ...response,         // עדכון עם הנתונים החדשים מהשרת
          id: user.id,         // וידוא שה-ID נשמר
          password: user.password // שמירת הסיסמה הקיימת
        };   
        console.log("Updated user data:", updatedUser);
        dispatch({ type: "UPDATE", payload: updatedUser });
        onClose();
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user details. Please try again.");
    }
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>
            {error}
          </div>
        )}
        <TextField
          label="First Name"
          value={formData.firstName}
          onChange={handleChange('firstName')}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange('lastName')}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Email"
          value={formData.email}
          onChange={handleChange('email')}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Address"
          value={formData.address}
          onChange={handleChange('address')}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default UpdateUserForm;