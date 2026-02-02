import { prisma } from "../lib/prisma";

async function updateAllTutorStats() {
  console.log("Starting tutor stats update...");
  
  try {
    // Get all tutor profiles
    const tutorProfiles = await prisma.tutor_profile.findMany({
      select: { id: true }
    });

    console.log(`Found ${tutorProfiles.length} tutor profiles to update`);

    for (const tutorProfile of tutorProfiles) {
      // Get all reviews for this tutor
      const reviews = await prisma.review.findMany({
        where: {
          booking: {
            tutorProfileId: tutorProfile.id
          }
        },
        select: {
          rating: true
        }
      });

      const totalReviews = reviews.length;
      const averageRating = totalReviews > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
        : 0;

      // Update tutor profile
      await prisma.tutor_profile.update({
        where: { id: tutorProfile.id },
        data: {
          totalReviews: totalReviews,
          averageRating: Math.round(averageRating * 10) / 10,
          updatedAt: new Date()
        }
      });

      console.log(`Updated tutor ${tutorProfile.id}: ${totalReviews} reviews, ${averageRating.toFixed(1)} avg rating`);
    }

    console.log("Tutor stats update completed successfully!");
  } catch (error) {
    console.error("Error updating tutor stats:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script if called directly
if (require.main === module) {
  updateAllTutorStats();
}

export { updateAllTutorStats };