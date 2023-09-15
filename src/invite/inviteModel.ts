import prisma from '../util/prisma-client';
import * as userModel from "../user/userModel"

// interface IInvite {
//     recipientId: number,
//     kitchenId: number
// }

export async function createInvite(kitchenId: number, recipientEmail: string) {
    const recipient = await userModel.getByEmail(recipientEmail);
    // const newInvite: IInvite = {recipientId: recipientId, kitchenId: kitchenId}
    if (recipient) {
        const recipientId = recipient.id;
        return await prisma.invite.create({
            data: {recipient_id: recipientId, kitchen_id: kitchenId}
         })
    }
    else {
        return false;
    }
}

export async function deleteInvite(inviteId: number) {
    return await prisma.invite.delete({
        where: {
            id: inviteId
        }
    })
}

export async function acceptInvite(inviteId: number) {

}