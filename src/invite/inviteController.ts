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
            const invite = await inviteModel.createInvite(parseInt(kitchenId), recipientEmail);
            res.status(201).send({
                message: "Invite sent",
                invite: invite,
            });
        }
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    }
}

export async function deleteInvite(req: Request, res: Response) {
    try {
        const inviteId = req.params.id;
        const inviteResponse = await inviteModel.deleteInvite(parseInt(inviteId))
        res.status(200).send({
            message: "Invite deleted",
            inviteResponse: inviteResponse,
        })
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    }
}

export async function acceptInvite(req: Request, res: Response) {
    try {
        const inviteId = req.params.id;
        const inviteResponse = await inviteModel.acceptInvite(parseInt(inviteId))
        res.status(200).send({
            message: "Invite accepted",
            inviteResponse: inviteResponse,
        })
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    }
}