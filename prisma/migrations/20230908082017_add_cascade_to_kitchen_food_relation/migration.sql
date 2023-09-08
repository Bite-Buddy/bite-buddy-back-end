-- DropForeignKey
ALTER TABLE "food" DROP CONSTRAINT "food_kitchen_id_fkey";

-- DropForeignKey
ALTER TABLE "user_kitchens" DROP CONSTRAINT "user_kitchens_kitchen_id_fkey";

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_kitchens" ADD CONSTRAINT "user_kitchens_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
