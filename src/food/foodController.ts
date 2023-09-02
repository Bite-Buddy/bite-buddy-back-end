import {Request, Response} from 'express';
import foodModel from "./foodModel"

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
        const food = await foodModel.getFoodById(foodId);
        res.status(200).send(food)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}