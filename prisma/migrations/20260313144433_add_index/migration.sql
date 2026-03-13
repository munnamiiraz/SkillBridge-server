-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE INDEX "account_providerId_accountId_idx" ON "account"("providerId", "accountId");

-- CreateIndex
CREATE INDEX "availability_slot_tutorProfileId_idx" ON "availability_slot"("tutorProfileId");

-- CreateIndex
CREATE INDEX "availability_slot_dayOfWeek_idx" ON "availability_slot"("dayOfWeek");

-- CreateIndex
CREATE INDEX "availability_slot_tutorProfileId_dayOfWeek_isBooked_idx" ON "availability_slot"("tutorProfileId", "dayOfWeek", "isBooked");

-- CreateIndex
CREATE INDEX "booking_studentId_idx" ON "booking"("studentId");

-- CreateIndex
CREATE INDEX "booking_tutorProfileId_idx" ON "booking"("tutorProfileId");

-- CreateIndex
CREATE INDEX "booking_availabilitySlotId_idx" ON "booking"("availabilitySlotId");

-- CreateIndex
CREATE INDEX "booking_status_idx" ON "booking"("status");

-- CreateIndex
CREATE INDEX "booking_scheduledAt_idx" ON "booking"("scheduledAt");

-- CreateIndex
CREATE INDEX "booking_tutorProfileId_status_idx" ON "booking"("tutorProfileId", "status");

-- CreateIndex
CREATE INDEX "booking_studentId_status_idx" ON "booking"("studentId", "status");

-- CreateIndex
CREATE INDEX "review_studentId_idx" ON "review"("studentId");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE INDEX "subject_categoryId_idx" ON "subject"("categoryId");

-- CreateIndex
CREATE INDEX "tutor_profile_isFeatured_idx" ON "tutor_profile"("isFeatured");

-- CreateIndex
CREATE INDEX "tutor_profile_isAvailable_idx" ON "tutor_profile"("isAvailable");

-- CreateIndex
CREATE INDEX "tutor_profile_averageRating_idx" ON "tutor_profile"("averageRating");

-- CreateIndex
CREATE INDEX "tutor_profile_isAvailable_isFeatured_idx" ON "tutor_profile"("isAvailable", "isFeatured");

-- CreateIndex
CREATE INDEX "tutor_subject_subjectId_idx" ON "tutor_subject"("subjectId");

-- CreateIndex
CREATE INDEX "tutor_subject_tutorProfileId_idx" ON "tutor_subject"("tutorProfileId");

-- CreateIndex
CREATE INDEX "user_role_idx" ON "user"("role");

-- CreateIndex
CREATE INDEX "user_status_idx" ON "user"("status");

-- CreateIndex
CREATE INDEX "user_role_status_idx" ON "user"("role", "status");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");
