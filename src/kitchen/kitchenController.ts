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

