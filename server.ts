import express from "express";
import cors from "cors";

import * as userController from "./src/user/userController";
import * as kitchenController from "./src/kitchen/kitchenController";
import * as foodController from "./src/food/foodController";
import * as inviteController from "./src/invite/inviteController";


const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));

export default function getEndpoints() {
  // user
  app.get("/users", userController.getUsers); 
  app.get("/users/:id", userController.getById);
  app.get("/users/supabase/:id", userController.getBySupabaseId);
  app.get("/users/email/:email", userController.getByEmail);
  app.post("/users", userController.createUser);
  app.patch("/users/kitchens", userController.addKitchenRelationship);
  app.delete("/users/:id", userController.deleteUserById);

  // kitchen
  app.get("/kitchens", kitchenController.getKitchens); // mainly here for testing
  app.get("/kitchens/:id", kitchenController.getById);
  app.get("/kitchens/users/:id", kitchenController.getUsersByKitchen); // get all related users
  app.post("/kitchens/users/:id", kitchenController.createKitchen);
  app.patch("/kitchens/users", kitchenController.addUserRelationship);
  app.patch("/kitchens/users", kitchenController.addUserRelationship);
  app.patch("/kitchens/:id", kitchenController.updateKitchenById);
  app.delete("/kitchens/:id", kitchenController.deleteKitchen);

  // food
  app.get("/foods", foodController.getFood);
  app.get("/foods/:id", foodController.getFoodById);
  app.post("/kitchens/:id/foods", foodController.createFood);
  app.patch("/foods/:foodId", foodController.updateFoodById);
  app.delete("/foods/:foodId", foodController.deleteFoodById);

  // invite 
  app.get("/invites/users", inviteController.getInvites);
  app.get("/invites/users/:id", inviteController.getByInviteId);
  app.post("/invites/users", inviteController.createInvite);
  app.delete("/invites/users/accept/:id", inviteController.acceptInvite);
  app.delete("/invites/users/reject/:id", inviteController.deleteInvite);

  
  return app;
}
