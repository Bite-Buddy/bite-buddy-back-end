/*
  Warnings:

  - You are about to drop the column `boughtOn` on the `food` table. All the data in the column will be lost.
  - You are about to drop the column `updatedOn` on the `food` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "food" DROP COLUMN "boughtOn",
DROP COLUMN "updatedOn",
ADD COLUMN     "bought_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
