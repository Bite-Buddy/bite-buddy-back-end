import {Request, Response} from 'express';
import * as userModel from "./userModel"


export async function getUsers(req: Request, res: Response) {
    console.log("😂😂😂😂")
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
    console.log("🙌🙌🙌🙌")
    try {
        const id = req.params.id;
        const user = await userModel.getBySupabaseId(id);
        if (!user) {
            res.status(404).send({failed: "user not found"})
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).send("Error: " + error)
    }
}

export async function createUser(req: Request, res: Response) {
   
    const user = await userModel.createUser(req.body);
    res.status(200).send(user);
}

// When thinking about these next two functions I realized they will be more complex (needing to be logged in with 
// supabase first before approval to udpate then specifying what of the user account to update, which for us would just be the user's kitchens)
// We would need the session id or the token from supabase to see the user is logged in first before being able to update and delete
// For MVP, these functionalities doon't have to be super fleshed out, these are just basic things we can use for testing

// export async function updateUserById(req: Request, res: Response) {
//     try {
//         const id = req.params.id;
//         await userModel.updatedUser(id);
//         res.status(200).send("User updated");
//     }
//     catch (error) {
//         res.status(500).send("Error: " + error);
//     }
// }

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
    



