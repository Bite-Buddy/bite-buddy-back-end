import {Request, Response} from 'express';
import * as foodModel from "./foodModel";

interface IFood {
    name: string,
    bought_on: Date,   
    updated_on: Date,
    inStock: boolean,
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
        const foodRequest: IFood = req.body;
        const foodResponse = await foodModel.createFood(kitchenID, foodRequest);
        res.status(200).send({
            message: "Food added",
            food: foodResponse,
        })
    }
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}

export async function updateFoodById(req: Request, res: Response) {
    try {
        const foodID = parseInt(req.params.foodId);
        const foodUpdate: IFood = req.body;
        const foodResponse = await foodModel.updateFoodById(foodID, foodUpdate);
        res.status(200).send({
            message: "Food updated",
            foodResponse: foodResponse,
        })
    }  
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}

export async function deleteFoodById(req: Request, res: Response) {
    try {
        const foodID = req.params.foodId;
        const foodResponse = await foodModel.deleteFoodById(parseInt(foodID));
        res.status(200).send({
            message: "Food deleted",
            foodResponse: foodResponse,
        })     
    }
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}