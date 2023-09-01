/*
  Warnings:

  - You are about to drop the column `kitchenId` on the `Food` table. All the data in the column will be lost.
  - The primary key for the `UserKitchens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `kitchenId` on the `UserKitchens` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserKitchens` table. All the data in the column will be lost.
  - Added the required column `kitchen_id` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kitchen_id` to the `UserKitchens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserKitchens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_kitchenId_fkey";

-- DropForeignKey
ALTER TABLE "UserKitchens" DROP CONSTRAINT "UserKitchens_kitchenId_fkey";

-- DropForeignKey
ALTER TABLE "UserKitchens" DROP CONSTRAINT "UserKitchens_userId_fkey";

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "kitchenId",
ADD COLUMN     "kitchen_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserKitchens" DROP CONSTRAINT "UserKitchens_pkey",
DROP COLUMN "kitchenId",
DROP COLUMN "userId",
ADD COLUMN     "kitchen_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "UserKitchens_pkey" PRIMARY KEY ("kitchen_id", "user_id");

-- AddForeignKey
ALTER TABLE "UserKitchens" ADD CONSTRAINT "UserKitchens_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "Kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserKitchens" ADD CONSTRAINT "UserKitchens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "Kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
