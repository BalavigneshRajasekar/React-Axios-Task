import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import UserItem from "./UserItem";
import UserForm from "./UserForm";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(response.data);
    } catch (error) {
      showSnackBar("not fetched", "error");
    }
  }

  function showSnackBar(message, severity) {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  }

  function hideSnackBar() {
    setSnackbar({ ...snackbar, open: false });
  }

  const onDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((value) => value.id !== id));

      showSnackBar("user Deleted", "success");
    } catch (error) {}
  };

  const onEdit = async (user) => {
    console.log(user);
    try {
      await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user
      );
      console.log(user);
      setUsers(users.map((u) => (u.id === user.id ? user : u)));

      showSnackBar("Updated", "success");
    } catch (error) {
      console.log(error);
      showSnackBar("Error with update", "error");
    }

    setEditingUser(null);
  };
  const onAdd = async (user) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );

      setUsers([
        ...users,
        {
          name: response.data.name,
          email: response.data.email,
          id: users.length + 1,
        },
      ]);
      console.log(users);
      showSnackBar("user Added", "success");
      setEditingUser(null);
    } catch (error) {
      showSnackBar("Error With adding", "error");
    }
  };
  return (
    <div>
      <Container>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" gutterBottom>
            User Management
          </Typography>
          <Grid
            container
            spacing={3}
            style={{ width: "" }}
            justifyContent={"space-evenly"}
          >
            {users.map((user, index) => (
              <UserItem
                key={index}
                user={user}
                onEdit={setEditingUser}
                onDelete={onDelete}
              ></UserItem>
            ))}
          </Grid>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={() => setEditingUser({})}
          >
            Add user
          </Button>
          {editingUser && (
            <UserForm
              editingUser={editingUser}
              onEdit={editingUser.id ? onEdit : onAdd}
              onCancel={setEditingUser}
            ></UserForm>
          )}
        </Paper>
        <Snackbar
          open={snackbar.open}
          onClose={hideSnackBar}
          autoHideDuration={6000}
        >
          <Alert onClose={hideSnackBar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}

export default UserList;
