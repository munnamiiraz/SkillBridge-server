import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly account: "account";
    readonly availability_slot: "availability_slot";
    readonly booking: "booking";
    readonly category: "category";
    readonly review: "review";
    readonly session: "session";
    readonly subject: "subject";
    readonly tutor_profile: "tutor_profile";
    readonly tutor_subject: "tutor_subject";
    readonly user: "user";
    readonly verification: "verification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const Availability_slotScalarFieldEnum: {
    readonly id: "id";
    readonly tutorProfileId: "tutorProfileId";
    readonly dayOfWeek: "dayOfWeek";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly isRecurring: "isRecurring";
    readonly specificDate: "specificDate";
    readonly isBooked: "isBooked";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type Availability_slotScalarFieldEnum = (typeof Availability_slotScalarFieldEnum)[keyof typeof Availability_slotScalarFieldEnum];
export declare const BookingScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly tutorProfileId: "tutorProfileId";
    readonly availabilitySlotId: "availabilitySlotId";
    readonly scheduledAt: "scheduledAt";
    readonly duration: "duration";
    readonly status: "status";
    readonly subject: "subject";
    readonly notes: "notes";
    readonly meetingLink: "meetingLink";
    readonly price: "price";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly bookingId: "bookingId";
    readonly studentId: "studentId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const Tutor_profileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly bio: "bio";
    readonly headline: "headline";
    readonly hourlyRate: "hourlyRate";
    readonly address: "address";
    readonly experience: "experience";
    readonly education: "education";
    readonly isAvailable: "isAvailable";
    readonly averageRating: "averageRating";
    readonly totalReviews: "totalReviews";
    readonly totalSessions: "totalSessions";
    readonly isFeatured: "isFeatured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type Tutor_profileScalarFieldEnum = (typeof Tutor_profileScalarFieldEnum)[keyof typeof Tutor_profileScalarFieldEnum];
export declare const Tutor_subjectScalarFieldEnum: {
    readonly id: "id";
    readonly tutorProfileId: "tutorProfileId";
    readonly subjectId: "subjectId";
};
export type Tutor_subjectScalarFieldEnum = (typeof Tutor_subjectScalarFieldEnum)[keyof typeof Tutor_subjectScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone: "phone";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly address: "address";
    readonly image: "image";
    readonly coverImage: "coverImage";
    readonly role: "role";
    readonly status: "status";
    readonly banReason: "banReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map