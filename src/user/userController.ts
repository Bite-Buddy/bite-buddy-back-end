import {Request, Response} from 'express';

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



