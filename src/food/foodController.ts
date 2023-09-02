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

export async function createFood(req: Request, res: Response) {
    try {
        if (!req.session.user) {
            res.status(400).send("Error: Please log in");
        }
        else {
            const userID = req.session.user?.id;
            const kitchenID = req.params.id;
            const foodName = req.body.name;
            await foodModel.createFood(userID, kitchenID, foodName);
            res.status(200).send("Food added")
        }
    }
    catch (error) { 
        res.status(500).send("Error: " + error)
    }
}