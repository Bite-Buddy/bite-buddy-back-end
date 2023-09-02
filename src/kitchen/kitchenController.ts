import {Request, Response} from 'express';
import kitchenModel from "./kitchenModel"

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
        const kitchen = await kitchenModel.getById(id);
        res.status(200).send(kitchen)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getUsersByKitchen(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const users = await kitchenModel.getUsersByKitchen(id);
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}