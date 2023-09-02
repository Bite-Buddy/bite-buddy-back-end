import {Request, Response} from 'express';
import userModel from "./userModel"

export async function logout(req: Request, res: Response) {
    req.session.destroy((error: any) => {
        if (error) {
            res.status(500).send("Error: " + error)
        }
        else {
            res.status(200).send("Logging out");
        }
    });
}

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
        const user = await userModel.getById(id);
        res.status(200).send(user)
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        if (!req.body.email) {
            res.status(400).send("Error: no email")
        }
        else {
            await userModel.createUser(req.body);
            res.status(200).send("User created");
        }
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    }
}



