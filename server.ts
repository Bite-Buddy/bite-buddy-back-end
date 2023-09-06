import express from "express";
// import cors from "cors";

import * as userController from "./src/user/userController";
import * as kitchenController from "./src/kitchen/kitchenController";
import * as foodController from "./src/food/foodController";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // For parsing form data (application/x-www-form-urlencoded)
// app.use(cors({
//   // origin: "http://192.168.10.108:8080",
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   credentials: true,
// }));

export default function getEndpoints() {
    // user
  app.get("/users", userController.getUsers); // mainly here for testing
  app.get("/users/:id", userController.getById);
  app.get("/users/supabase/:id", userController.getBySupabaseId);
  app.post("/users", userController.createUser);
  // app.patch("/users/:id", userController.updateUserById); // probably need more patch endpoints
  // app.delete("/users/:id", userController.deleteUserById);

  // kitchen
  app.get("/kitchens", kitchenController.getKitchens); // mainly here for testing
  app.get("/kitchens/:id", kitchenController.getById);
  app.get("/kitchens/users/:id", kitchenController.getUsersByKitchen); // get all related users
  app.post("/kitchens/users/:id", kitchenController.createKitchen);
  app.delete("/kitchens/users/:id", kitchenController.deleteKitchen);

  // food
  app.get("/foods", foodController.getFood);
  app.get("/foods/:id", foodController.getFoodById);
  app.post("/kitchens/:id/foods", foodController.createFood);
  app.patch("/kitchens/:kitchenId/foods/:foodId", foodController.updateFoodById);
  app.delete("/kitchens/:kitchenId/foods/:foodId", foodController.deleteFoodById);

  return app;
}
