/*
  Warnings:

  - You are about to drop the `user_kitchens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_kitchens" DROP CONSTRAINT "user_kitchens_kitchen_id_fkey";

-- DropForeignKey
ALTER TABLE "user_kitchens" DROP CONSTRAINT "user_kitchens_user_id_fkey";

-- DropTable
DROP TABLE "user_kitchens";

-- CreateTable
CREATE TABLE "_KitchenToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_KitchenToUser_AB_unique" ON "_KitchenToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_KitchenToUser_B_index" ON "_KitchenToUser"("B");

-- AddForeignKey
ALTER TABLE "_KitchenToUser" ADD CONSTRAINT "_KitchenToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "kitchen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KitchenToUser" ADD CONSTRAINT "_KitchenToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
