import {Request, Response} from 'express';
import * as kitchenModel from "./kitchenModel"

export async function getKitchens(req: Request, res: Response) {
    try {
        const kitchens = await kitchenModel.getKitchens();
        res.status(200).send(kitchens)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const kitchen = await kitchenModel.getById(parseInt(id));
        res.status(200).send(kitchen)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getUsersByKitchen(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const users = await kitchenModel.getUsersByKitchen(parseInt(id));
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function createKitchen(req: Request, res: Response) {
    try {
        const userId = req.params.id;
        const kitchen = await kitchenModel.createKitchen(parseInt(userId), req.body.name);
        res.status(201).json({
            message: "Kitchen added",
            kitchen: kitchen,
          });
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function updateKitchenById(req: Request, res: Response) {
  try {
      const kitchenId = parseInt(req.params.id);
      const name = req.body.name;
      const kitchenResponse = await kitchenModel.updateKitchenById(kitchenId, name);
      res.status(200).send({
          message: "Kitchen Updated",
          kitchenResponse: kitchenResponse,
      })
  }  
  catch (error) { 
      res.status(500).send("Error: " + error)
  }
}

export async function addUserRelationship(req: Request, res: Response) {
    try {
        if (!req.params.id || ! req.params.userId) {
            res.status(400).send("missing kitchen id or user id")
        }
        else {
            const kitchenId = parseInt(req.params.id);
            const userId = parseInt(req.params.userId);
            const updatedKitchen = await kitchenModel.addUserRelationship(kitchenId, userId);
            res.status(204).send({
                message: "Kitchen relationship updated",
                updatedKitchen: updatedKitchen,
            });
        }
        
    }  
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
  }

export async function deleteKitchen(req: Request, res: Response) {
    try {
        const kitchenId = req.params.id;
        const kitchenResponse = await kitchenModel.deleteKitchen(parseInt(kitchenId));
        res.status(200).send({
            message: "Kitchen deleted",
            kitchenResponse: kitchenResponse,
        })
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}