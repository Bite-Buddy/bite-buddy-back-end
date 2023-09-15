import {Request, Response} from 'express';
import * as userModel from "./userModel"

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await userModel.getUsers();
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const user = await userModel.getById(parseInt(id));
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getBySupabaseId(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const user = await userModel.getBySupabaseId(id);
        if (!user) {
            res.status(404).send({failed: "user not found"})
        }
        else {
            res.status(200).send(user);
        }
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function getByEmail(req: Request, res: Response) {
    try {
        const email = req.params.email;
        const user = await userModel.getByEmail(email);
        if (!user) {
            res.status(404).send({failed: "No match found with that email"})
        }
        else {
            res.status(200).send(user);
        }
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function createUser(req: Request, res: Response) {
   try {
    if (!req.body.supabase_id || !req.body.email) {
        res.status(400).send("missing details");
    }
    else {
        const user = await userModel.createUser(req.body);
        res.status(200).send(user);
    }
   }
   catch (error) {
    console.log(error);
    throw error;
   }
}

export async function addKitchenRelationship(req: Request, res: Response) {
    try {
        if (!req.body.id || !req.body.kitchen_id) {
            res.status(400).send("missing details");
        }
        else {
            const updatedUser = await userModel.addKitchenRelationship(req.body.id, req.body.kitchen_id);
            res.status(204).send(updatedUser);
        }
    }
    catch (error) {
        console.error("Error adding kitchen relationship to user", error);
        throw error;
    }
}

export async function deleteUserById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const userResponse = await userModel.deleteUserById(parseInt(id));
        res.status(200).send({
            message: "User deleted",
            userResponse: userResponse,
        });
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}
