-- DropForeignKey
ALTER TABLE "user_kitchens" DROP CONSTRAINT "user_kitchens_kitchen_id_fkey";

-- AddForeignKey
ALTER TABLE "user_kitchens" ADD CONSTRAINT "user_kitchens_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE CASCADE ON UPDATE CASCADE;
