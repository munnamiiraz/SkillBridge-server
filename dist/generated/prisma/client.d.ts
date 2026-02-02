import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model account
 *
 */
export type account = Prisma.accountModel;
/**
 * Model availability_slot
 *
 */
export type availability_slot = Prisma.availability_slotModel;
/**
 * Model booking
 *
 */
export type booking = Prisma.bookingModel;
/**
 * Model category
 *
 */
export type category = Prisma.categoryModel;
/**
 * Model review
 *
 */
export type review = Prisma.reviewModel;
/**
 * Model session
 *
 */
export type session = Prisma.sessionModel;
/**
 * Model subject
 *
 */
export type subject = Prisma.subjectModel;
/**
 * Model tutor_profile
 *
 */
export type tutor_profile = Prisma.tutor_profileModel;
/**
 * Model tutor_subject
 *
 */
export type tutor_subject = Prisma.tutor_subjectModel;
/**
 * Model user
 *
 */
export type user = Prisma.userModel;
/**
 * Model verification
 *
 */
export type verification = Prisma.verificationModel;
//# sourceMappingURL=client.d.ts.map