/*
  Warnings:

  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kitchen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_kitchens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_kitchen_id_fkey";

-- DropForeignKey
ALTER TABLE "User_kitchens" DROP CONSTRAINT "User_kitchens_kitchen_id_fkey";

-- DropForeignKey
ALTER TABLE "User_kitchens" DROP CONSTRAINT "User_kitchens_user_id_fkey";

-- DropTable
DROP TABLE "Food";

-- DropTable
DROP TABLE "Kitchen";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "User_kitchens";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kitchen" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "kitchen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_kitchens" (
    "kitchen_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "user_kitchens_pkey" PRIMARY KEY ("kitchen_id","user_id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "boughtOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kitchen_id" INTEGER NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user_kitchens" ADD CONSTRAINT "user_kitchens_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_kitchens" ADD CONSTRAINT "user_kitchens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
