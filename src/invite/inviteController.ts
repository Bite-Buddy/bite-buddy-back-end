import {Request, Response} from 'express';
import * as inviteModel from "./inviteModel"

export async function createInvite(req: Request, res: Response) {
    try {
        if (!req.body.email || !req.body.kitchenId) {
            res.status(400).send("Error: Missing paramaters");
        }
        else {
            const recipientEmail = req.body.email;
            const kitchenId = req.body.kitchenId;
            const invite = await inviteModel.createInvite(recipientEmail, kitchenId);
            res.status(200).send(invite);
        }
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    }
}