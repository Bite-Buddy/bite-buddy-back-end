-- DropForeignKey
ALTER TABLE "invite" DROP CONSTRAINT "invite_kitchen_id_fkey";

-- DropForeignKey
ALTER TABLE "invite" DROP CONSTRAINT "invite_recipient_id_fkey";

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
