var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// src/generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../src/generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n  user                  user      @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel availability_slot {\n  id             String        @id\n  tutorProfileId String\n  dayOfWeek      Int\n  startTime      String\n  endTime        String\n  isRecurring    Boolean       @default(true)\n  specificDate   DateTime?\n  isBooked       Boolean       @default(false)\n  createdAt      DateTime      @default(now())\n  updatedAt      DateTime      @updatedAt\n  tutor_profile  tutor_profile @relation(fields: [tutorProfileId], references: [id], onDelete: Cascade)\n  booking        booking[]\n}\n\nmodel booking {\n  id                 String             @id\n  studentId          String\n  tutorProfileId     String\n  availabilitySlotId String?\n  scheduledAt        DateTime\n  duration           Int                @default(60)\n  status             BookingStatus      @default(PENDING)\n  subject            String?\n  notes              String?\n  meetingLink        String?\n  price              Float\n  createdAt          DateTime           @default(now())\n  updatedAt          DateTime           @updatedAt\n  user               user               @relation(fields: [studentId], references: [id], onDelete: Cascade)\n  tutor_profile      tutor_profile      @relation(fields: [tutorProfileId], references: [id], onDelete: Cascade)\n  availability_slot  availability_slot? @relation(fields: [availabilitySlotId], references: [id], onDelete: SetNull)\n  review             review?\n}\n\nmodel category {\n  id          String         @id @default(uuid())\n  name        String         @unique\n  description String?\n  status      CategoryStatus @default(ACTIVE)\n  createdAt   DateTime       @default(now())\n  updatedAt   DateTime       @updatedAt\n  subject     subject[]\n}\n\nmodel review {\n  id        String   @id\n  bookingId String   @unique\n  studentId String\n  rating    Int\n  comment   String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  booking   booking  @relation(fields: [bookingId], references: [id], onDelete: Cascade)\n  user      user     @relation(fields: [studentId], references: [id], onDelete: Cascade)\n}\n\nmodel session {\n  id        String   @id\n  expiresAt DateTime\n  token     String   @unique\n  ipAddress String?\n  userAgent String?\n  userId    String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  user      user     @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel subject {\n  id            String          @id\n  name          String\n  categoryId    String\n  createdAt     DateTime        @default(now())\n  updatedAt     DateTime        @updatedAt\n  category      category        @relation(fields: [categoryId], references: [id], onDelete: Cascade)\n  tutor_subject tutor_subject[]\n\n  @@unique([name, categoryId])\n}\n\nmodel tutor_profile {\n  id                String              @id\n  userId            String              @unique\n  bio               String?\n  headline          String?\n  hourlyRate        Float\n  address           String?\n  experience        Int                 @default(0)\n  education         String?\n  isAvailable       Boolean             @default(true)\n  averageRating     Float               @default(0)\n  totalReviews      Int                 @default(0)\n  totalSessions     Int                 @default(0)\n  isFeatured        Boolean             @default(false)\n  createdAt         DateTime            @default(now())\n  updatedAt         DateTime            @updatedAt\n  availability_slot availability_slot[]\n  booking           booking[]\n  user              user                @relation(fields: [userId], references: [id], onDelete: Cascade)\n  tutor_subject     tutor_subject[]\n}\n\nmodel tutor_subject {\n  id             String        @id\n  tutorProfileId String\n  subjectId      String\n  subject        subject       @relation(fields: [subjectId], references: [id], onDelete: Cascade)\n  tutor_profile  tutor_profile @relation(fields: [tutorProfileId], references: [id], onDelete: Cascade)\n\n  @@unique([tutorProfileId, subjectId])\n}\n\nmodel user {\n  id            String         @id\n  name          String         @default("")\n  phone         String         @default("N/A")\n  email         String         @unique\n  emailVerified Boolean        @default(false)\n  address       String?\n  image         String?\n  coverImage    String?\n  role          Role           @default(STUDENT)\n  status        UserStatus     @default(ACTIVE)\n  banReason     String?\n  createdAt     DateTime       @default(now())\n  updatedAt     DateTime       @updatedAt\n  account       account[]\n  booking       booking[]\n  review        review[]\n  session       session[]\n  tutor_profile tutor_profile?\n}\n\nmodel verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n}\n\nenum BookingStatus {\n  PENDING\n  CONFIRMED\n  ONGOING\n  COMPLETED\n  CANCELLED\n}\n\nenum Role {\n  STUDENT\n  TUTOR\n  ADMIN\n}\n\nenum UserStatus {\n  ACTIVE\n  INACTIVE\n  BANNED\n}\n\nenum CategoryStatus {\n  ACTIVE\n  INACTIVE\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"user","relationName":"accountTouser"}],"dbName":null},"availability_slot":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tutorProfileId","kind":"scalar","type":"String"},{"name":"dayOfWeek","kind":"scalar","type":"Int"},{"name":"startTime","kind":"scalar","type":"String"},{"name":"endTime","kind":"scalar","type":"String"},{"name":"isRecurring","kind":"scalar","type":"Boolean"},{"name":"specificDate","kind":"scalar","type":"DateTime"},{"name":"isBooked","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"tutor_profile","kind":"object","type":"tutor_profile","relationName":"availability_slotTotutor_profile"},{"name":"booking","kind":"object","type":"booking","relationName":"availability_slotTobooking"}],"dbName":null},"booking":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"tutorProfileId","kind":"scalar","type":"String"},{"name":"availabilitySlotId","kind":"scalar","type":"String"},{"name":"scheduledAt","kind":"scalar","type":"DateTime"},{"name":"duration","kind":"scalar","type":"Int"},{"name":"status","kind":"enum","type":"BookingStatus"},{"name":"subject","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"meetingLink","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"user","relationName":"bookingTouser"},{"name":"tutor_profile","kind":"object","type":"tutor_profile","relationName":"bookingTotutor_profile"},{"name":"availability_slot","kind":"object","type":"availability_slot","relationName":"availability_slotTobooking"},{"name":"review","kind":"object","type":"review","relationName":"bookingToreview"}],"dbName":null},"category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"CategoryStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"subject","kind":"object","type":"subject","relationName":"categoryTosubject"}],"dbName":null},"review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"bookingId","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"booking","kind":"object","type":"booking","relationName":"bookingToreview"},{"name":"user","kind":"object","type":"user","relationName":"reviewTouser"}],"dbName":null},"session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"user","relationName":"sessionTouser"}],"dbName":null},"subject":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"category","kind":"object","type":"category","relationName":"categoryTosubject"},{"name":"tutor_subject","kind":"object","type":"tutor_subject","relationName":"subjectTotutor_subject"}],"dbName":null},"tutor_profile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"bio","kind":"scalar","type":"String"},{"name":"headline","kind":"scalar","type":"String"},{"name":"hourlyRate","kind":"scalar","type":"Float"},{"name":"address","kind":"scalar","type":"String"},{"name":"experience","kind":"scalar","type":"Int"},{"name":"education","kind":"scalar","type":"String"},{"name":"isAvailable","kind":"scalar","type":"Boolean"},{"name":"averageRating","kind":"scalar","type":"Float"},{"name":"totalReviews","kind":"scalar","type":"Int"},{"name":"totalSessions","kind":"scalar","type":"Int"},{"name":"isFeatured","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"availability_slot","kind":"object","type":"availability_slot","relationName":"availability_slotTotutor_profile"},{"name":"booking","kind":"object","type":"booking","relationName":"bookingTotutor_profile"},{"name":"user","kind":"object","type":"user","relationName":"tutor_profileTouser"},{"name":"tutor_subject","kind":"object","type":"tutor_subject","relationName":"tutor_profileTotutor_subject"}],"dbName":null},"tutor_subject":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tutorProfileId","kind":"scalar","type":"String"},{"name":"subjectId","kind":"scalar","type":"String"},{"name":"subject","kind":"object","type":"subject","relationName":"subjectTotutor_subject"},{"name":"tutor_profile","kind":"object","type":"tutor_profile","relationName":"tutor_profileTotutor_subject"}],"dbName":null},"user":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"address","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"coverImage","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"banReason","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"account","kind":"object","type":"account","relationName":"accountTouser"},{"name":"booking","kind":"object","type":"booking","relationName":"bookingTouser"},{"name":"review","kind":"object","type":"review","relationName":"reviewTouser"},{"name":"session","kind":"object","type":"session","relationName":"sessionTouser"},{"name":"tutor_profile","kind":"object","type":"tutor_profile","relationName":"tutor_profileTouser"}],"dbName":null},"verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AccountScalarFieldEnum: () => AccountScalarFieldEnum,
  AnyNull: () => AnyNull2,
  Availability_slotScalarFieldEnum: () => Availability_slotScalarFieldEnum,
  BookingScalarFieldEnum: () => BookingScalarFieldEnum,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  ReviewScalarFieldEnum: () => ReviewScalarFieldEnum,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  SubjectScalarFieldEnum: () => SubjectScalarFieldEnum,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  Tutor_profileScalarFieldEnum: () => Tutor_profileScalarFieldEnum,
  Tutor_subjectScalarFieldEnum: () => Tutor_subjectScalarFieldEnum,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.3.0",
  engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  account: "account",
  availability_slot: "availability_slot",
  booking: "booking",
  category: "category",
  review: "review",
  session: "session",
  subject: "subject",
  tutor_profile: "tutor_profile",
  tutor_subject: "tutor_subject",
  user: "user",
  verification: "verification"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var Availability_slotScalarFieldEnum = {
  id: "id",
  tutorProfileId: "tutorProfileId",
  dayOfWeek: "dayOfWeek",
  startTime: "startTime",
  endTime: "endTime",
  isRecurring: "isRecurring",
  specificDate: "specificDate",
  isBooked: "isBooked",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var BookingScalarFieldEnum = {
  id: "id",
  studentId: "studentId",
  tutorProfileId: "tutorProfileId",
  availabilitySlotId: "availabilitySlotId",
  scheduledAt: "scheduledAt",
  duration: "duration",
  status: "status",
  subject: "subject",
  notes: "notes",
  meetingLink: "meetingLink",
  price: "price",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CategoryScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  status: "status",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ReviewScalarFieldEnum = {
  id: "id",
  bookingId: "bookingId",
  studentId: "studentId",
  rating: "rating",
  comment: "comment",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SubjectScalarFieldEnum = {
  id: "id",
  name: "name",
  categoryId: "categoryId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var Tutor_profileScalarFieldEnum = {
  id: "id",
  userId: "userId",
  bio: "bio",
  headline: "headline",
  hourlyRate: "hourlyRate",
  address: "address",
  experience: "experience",
  education: "education",
  isAvailable: "isAvailable",
  averageRating: "averageRating",
  totalReviews: "totalReviews",
  totalSessions: "totalSessions",
  isFeatured: "isFeatured",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var Tutor_subjectScalarFieldEnum = {
  id: "id",
  tutorProfileId: "tutorProfileId",
  subjectId: "subjectId"
};
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  phone: "phone",
  email: "email",
  emailVerified: "emailVerified",
  address: "address",
  image: "image",
  coverImage: "coverImage",
  role: "role",
  status: "status",
  banReason: "banReason",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
import pg from "pg";
var connectionString = `${process.env.DATABASE_URL}`;
var pool = new pg.Pool({ connectionString });
var adapter = new PrismaPg(pool);
var prisma = new PrismaClient({ adapter });

export {
  prismaNamespace_exports,
  prisma
};
