# User Management React Axios Task

Create a React App that allows for CRUD operations with user data using React and Axios fetch to interact with a mock API.

## Documentation

### UserList component :

This component is responsible for managing a list of users, fetching data from an API, and performing CRUD operations (Create, Read, Update, Delete).

Here's a breakdown of the key functionalities:

1.

State variables:
newUserId: Stores the ID for the next user to be added.

users: Stores the list of users fetched from the API.

editingUser: Stores the user object that is currently being edited.

snackbar: Stores the state of the Snackbar component, including whether it's open, the message to display, and the severity of the message.

2.  Effect hook:
    useEffect: Fetches user data from the API when the component mounts.

3.  Fetch user data function:
    fetchUser: Makes a GET request to the API to fetch user data and updates the users state with the response data. It also updates the newUserId state with the length of the fetched data.

4.  Snackbar functions:
    showSnackBar: Updates the snackbar state with the provided message and severity, and sets the open property to true.
    hideSnackBar: Updates the snackbar state by setting the open property to false.

5.  CRUD functions:
    onDelete: Makes a DELETE request to the API to delete a user with the given ID. It updates the users state by filtering out the deleted user.
    onEdit: Makes a PATCH request to the API to update a user with the given user object. It updates the users state by replacing the user with the updated user object.
    onAdd: Makes a POST request to the API to add a new user with the given user object. It updates the users state by adding the new user object to the existing list.

6.  JSX code:
    The component renders a container with a paper component, displaying the list of users, an "Add user" button, and a Snackbar component.
    The list of users is rendered using the UserItem component, which displays the user's information and provides buttons for editing and deleting the user.
    The UserForm component is conditionally rendered when editingUser is not null, allowing the user to edit or add a new user.

### UserItem component :

This component is responsible for each user and Card where the each user has shown

### UserForm component :

This component is responsible for ADD or Editing forms which get callback from UserList component and Invoke that in form component and send data as an arguments

## Demo

https://usercrud-eight.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/BalavigneshRajasekar/React-Axios-Task.git
```

Go to the project directory

```bash
  cd User-Management
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
