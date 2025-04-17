/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `idea_userId` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `opinion` on the `UserPlace` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `googlePlaceId` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ideaUserId` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Place` DROP FOREIGN KEY `Place_idea_userId_fkey`;

-- DropIndex
DROP INDEX `Category_name_key` ON `Category`;

-- DropIndex
DROP INDEX `Place_idea_userId_fkey` ON `Place`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `name`,
    ADD COLUMN `category_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Place` DROP COLUMN `idea_userId`,
    ADD COLUMN `googlePlaceId` VARCHAR(191) NOT NULL,
    ADD COLUMN `ideaUserId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserPlace` DROP COLUMN `opinion`;

-- CreateTable
CREATE TABLE `MyVisitedPlace` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `placeId` VARCHAR(191) NOT NULL,
    `opinion` VARCHAR(191) NOT NULL,
    `wouldReturn` VARCHAR(191) NOT NULL,
    `averageRating` DOUBLE NOT NULL,
    `ratingAmbiente` INTEGER NOT NULL,
    `ratingAtendimento` INTEGER NOT NULL,
    `ratingComida` INTEGER NOT NULL,
    `ratingPreco` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Category_category_name_key` ON `Category`(`category_name`);

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_ideaUserId_fkey` FOREIGN KEY (`ideaUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MyVisitedPlace` ADD CONSTRAINT `MyVisitedPlace_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MyVisitedPlace` ADD CONSTRAINT `MyVisitedPlace_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
