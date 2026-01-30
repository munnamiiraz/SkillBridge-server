-- AlterTable
ALTER TABLE "availability_slot" ADD COLUMN     "isBooked" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "booking" ADD COLUMN     "availabilitySlotId" TEXT;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_availabilitySlotId_fkey" FOREIGN KEY ("availabilitySlotId") REFERENCES "availability_slot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
