import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";

function UserForm({ editingUser, onEdit, onCancel }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, []);

  //Added the data to the formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // This method invoke the callback function which is in UserList component
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onEdit(formData);
  };

  return (
    <div>
      <Dialog open>
        <DialogTitle>{formData.id ? "Edit" : "Add"}</DialogTitle>
        <DialogContent>
          <TextField
            style={{ marginTop: "10px" }}
            name="name"
            label="Name"
            autoFocus
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          ></TextField>
          <TextField
            style={{ marginTop: "10px" }}
            name="email"
            label="Email"
            autoFocus
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => onCancel(null)}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserForm;
