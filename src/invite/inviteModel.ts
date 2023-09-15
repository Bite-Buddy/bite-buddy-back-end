import prisma from '../util/prisma-client';
import * as userModel from "../user/userModel"

// interface IInvite {
//     recipientId: number,
//     kitchenId: number
// }

export async function createInvite(kitchenId: number, recipientEmail: string) {
    const recipientId = await userModel.getByEmail(recipientEmail);
    // const newInvite: IInvite = {recipientId: recipientId, kitchenId: kitchenId}
    return await prisma.invite.create({
       data: {recipient_id: recipientId, kitchen_id: kitchenId}
    })
}

