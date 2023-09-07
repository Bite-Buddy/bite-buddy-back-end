import {Request, Response} from 'express';
import * as foodModel from "./foodModel";

interface IFoodUpdate {
    name?: string,
    bought_on?: Date,   
    updated_on?: Date
  }

export async function getFood(req: Request, res: Response) {
    try {
        const food = await foodModel.getFood();
        res.status(200).send(food)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getFoodById(req: Request, res: Response) {
    try {
        const foodId = req.params.id;
        const food = await foodModel.getFoodById(parseInt(foodId));
        res.status(200).send(food)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function createFood(req: Request, res: Response) {
    try {
        const kitchenID = parseInt(req.params.id);
        const { name, boughtOn } = req.body;
        const boughtOnDate = new Date(boughtOn);
        if (!name || typeof name !== 'string' || isNaN(boughtOnDate.getTime())) {
            return res.status(400).send("Invalid 'name' or 'boughtOnDate' value in the request.");
        }
        await foodModel.createFood(kitchenID, name, boughtOn);
        res.status(200).send("Food added")
    }
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}

export async function updateFoodById(req: Request, res: Response) {
    try {
        const foodID = parseInt(req.params.foodId);
        const foodUpdate: IFoodUpdate = req.body;
        await foodModel.updateFoodById(foodID, foodUpdate);
        res.status(200).send("Food updated")
    }  
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}

export async function deleteFoodById(req: Request, res: Response) {
    try {
        const foodID = req.params.foodId;
        await foodModel.deleteFoodById(parseInt(foodID));
        res.status(200).send("Food deleted")
        
    }
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}