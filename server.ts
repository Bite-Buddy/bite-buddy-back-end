import express from "express";

// import * as userController from "";
// import * as kitchenController from "";
// import * as foodController from "";

const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // For parsing form data (application/x-www-form-urlencoded)

  export default function getEndpoints() {
    // user
  app.get("/users", userController.getUsers); // mainly here for testing
  app.get("/user/:id", userController.getById);
  app.post("user", userController.createUser);
  app.patch("user/:id", userController.updateUserById); // probably need more patch endpoints
  app.delete("user/:id", userController.deleteUserById);

  // kitchen
  app.get("/kitchens", kitchenController.getKitchens); // mainly here for testing
  app.get("/kitchen/:id", kitchenController.getById);
  app.get("/kitchen/:id/users", kitchenController.getUsersByKitchen); // get all related users
  app.post("/kitchen", kitchenController.createKitchen);
  app.delete("/kitchen/:id", kitchenController.deleteKitchen);

  // food
  app.get("/food", foodController.getFood);
  app.get("/food/:id", foodController.getFoodById);
  app.post("food", foodController.createFood);
  app.patch("food/:id", foodController.updateFoodById);
  app.delete("food/:id", foodController.deleteFoodById);

  return app;
}