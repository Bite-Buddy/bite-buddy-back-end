import express from "express";
import expressSession from "express-session";

import * as userController from "./src/user/userController";
import * as kitchenController from "./src/kitchen/kitchenController";
import * as foodController from "./src/food/foodController";

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // For parsing form data (application/x-www-form-urlencoded)

  export default function getEndpoints() {
    // user
  app.get("/logout", userController.logout);
  app.get("/users", userController.getUsers); // mainly here for testing
  app.get("/users/:id", userController.getById);
  app.post("/users", userController.createUser);
  app.patch("/users/:id", userController.updateUserById); // probably need more patch endpoints
  app.delete("/users/:id", userController.deleteUserById);

  // kitchen
  app.get("/kitchens", kitchenController.getKitchens); // mainly here for testing
  app.get("/kitchens/:id", kitchenController.getById);
  app.get("/kitchens/:id/users", kitchenController.getUsersByKitchen); // get all related users
  app.post("/users/kitchen", kitchenController.createKitchen);
  app.delete("/users/kitchen/:id", kitchenController.deleteKitchen);

  // food
  app.get("/foods", foodController.getFood);
  app.get("/foods/:id", foodController.getFoodById);
  app.post("/kitchens/:id/foods", foodController.createFood);
  app.patch("/kitchens/:kitchenId/foods/:foodId", foodController.updateFoodById);
  app.delete("/kitchens/:kitchenId/foods/:foodId", foodController.deleteFoodById);

  return app;
}