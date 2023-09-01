import express, {Request, Response } from "express";

// import * as userController from "";
// import * as kitchenController from "";
// import * as foodController from "";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing form data (application/x-www-form-urlencoded)
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// user
app.get("/users", userController.getUsers); // mainly here for testing
app.get("/user/:id", userController.getById);
app.post("user", userController.createUser);
app.patch("user/:id", userController.updateUser);
app.delete("user/:id", userController.deleteUser);
