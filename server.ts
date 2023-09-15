import express from "express";
import cors from "cors";

import * as userController from "./src/user/userController";
import * as kitchenController from "./src/kitchen/kitchenController";
import * as foodController from "./src/food/foodController";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // For parsing form data (application/x-www-form-urlencoded)
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));

export default function getEndpoints() {
  // user
  app.get("/users", userController.getUsers); // mainly here for testing
  app.get("/users/:id", userController.getById);
  //addKitchenToUser?
  //getByEmail (user model function that gets called in createInvite)
  //getInvites (modify getById to include invites:true)
  app.get("/users/supabase/:id", userController.getBySupabaseId);
  app.post("/users", userController.createUser);
  // app.patch("/users/:id", userController.updateUserById); // probably need more patch endpoints
  app.delete("/users/:id", userController.deleteUserById);
  

  // kitchen
  app.get("/kitchens", kitchenController.getKitchens); // mainly here for testing
  app.get("/kitchens/:id", kitchenController.getById);
  app.get("/kitchens/users/:id", kitchenController.getUsersByKitchen); // get all related users
  app.post("/kitchens/users/:id", kitchenController.createKitchen);
  //addUserById (patch endpoint, add user to kitchen array by user id)
  app.patch("/kitchens/:id", kitchenController.updateKitchenById);
  app.delete("/kitchens/:id", kitchenController.deleteKitchen);

  // food
  app.get("/foods", foodController.getFood);
  app.get("/foods/:id", foodController.getFoodById);
  app.post("/kitchens/:id/foods", foodController.createFood);
  app.patch("/foods/:foodId", foodController.updateFoodById);
  app.delete("/foods/:foodId", foodController.deleteFoodById);

  // invite 
  
  //createInvite (endpoint, takes kitchen id and recipient email, finds recipient id via email and creates an invite that has those two things )
  //deleteInvite (endpoint, fetched when user clicks yes or no buttons)
  //acceptInvite (endpoint, takes invite then calls model functions to add user to kitchen and kitchen to user before deleting invite)
 
  


  return app;
}
