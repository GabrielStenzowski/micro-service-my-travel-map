/*
  Warnings:

  - You are about to drop the `MyVisitedPlace` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MyVisitedPlace` DROP FOREIGN KEY `MyVisitedPlace_placeId_fkey`;

-- DropForeignKey
ALTER TABLE `MyVisitedPlace` DROP FOREIGN KEY `MyVisitedPlace_userId_fkey`;

-- DropTable
DROP TABLE `MyVisitedPlace`;

-- CreateTable
CREATE TABLE `VisitedPlaces` (
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

-- AddForeignKey
ALTER TABLE `VisitedPlaces` ADD CONSTRAINT `VisitedPlaces_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VisitedPlaces` ADD CONSTRAINT `VisitedPlaces_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
