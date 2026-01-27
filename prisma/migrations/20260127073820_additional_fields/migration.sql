/*
  Warnings:

  - Added the required column `address` to the `tutor_profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tutor_profile" ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "address" TEXT NOT NULL;
