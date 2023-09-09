/*
  Warnings:

  - Added the required column `name` to the `kitchen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kitchen" ADD COLUMN     "name" VARCHAR(255) NOT NULL;
