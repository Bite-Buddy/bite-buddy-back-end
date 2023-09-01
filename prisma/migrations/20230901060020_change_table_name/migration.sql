/*
  Warnings:

  - You are about to drop the `UserKitchens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserKitchens" DROP CONSTRAINT "UserKitchens_kitchen_id_fkey";

-- DropForeignKey
ALTER TABLE "UserKitchens" DROP CONSTRAINT "UserKitchens_user_id_fkey";

-- DropTable
DROP TABLE "UserKitchens";

-- CreateTable
CREATE TABLE "User_kitchens" (
    "kitchen_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "User_kitchens_pkey" PRIMARY KEY ("kitchen_id","user_id")
);

-- AddForeignKey
ALTER TABLE "User_kitchens" ADD CONSTRAINT "User_kitchens_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "Kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_kitchens" ADD CONSTRAINT "User_kitchens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
