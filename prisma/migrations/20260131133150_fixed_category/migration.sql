/*
  Warnings:

  - You are about to drop the column `color` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `category` table. All the data in the column will be lost.
  - The `status` column on the `category` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CategoryStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropIndex
DROP INDEX "category_slug_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "color",
DROP COLUMN "icon",
DROP COLUMN "image",
DROP COLUMN "slug",
DROP COLUMN "status",
ADD COLUMN     "status" "CategoryStatus" NOT NULL DEFAULT 'ACTIVE';
