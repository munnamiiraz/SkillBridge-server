
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model availability_slot
 * 
 */
export type availability_slot = $Result.DefaultSelection<Prisma.$availability_slotPayload>
/**
 * Model booking
 * 
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model session
 * 
 */
export type session = $Result.DefaultSelection<Prisma.$sessionPayload>
/**
 * Model subject
 * 
 */
export type subject = $Result.DefaultSelection<Prisma.$subjectPayload>
/**
 * Model tutor_profile
 * 
 */
export type tutor_profile = $Result.DefaultSelection<Prisma.$tutor_profilePayload>
/**
 * Model tutor_subject
 * 
 */
export type tutor_subject = $Result.DefaultSelection<Prisma.$tutor_subjectPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model verification
 * 
 */
export type verification = $Result.DefaultSelection<Prisma.$verificationPayload>
/**
 * Model knowledge_base
 * 
 */
export type knowledge_base = $Result.DefaultSelection<Prisma.$knowledge_basePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const Role: {
  STUDENT: 'STUDENT',
  TUTOR: 'TUTOR',
  VERIFIED_TUTOR: 'VERIFIED_TUTOR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BANNED: 'BANNED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const CategoryStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type CategoryStatus = (typeof CategoryStatus)[keyof typeof CategoryStatus]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type CategoryStatus = $Enums.CategoryStatus

export const CategoryStatus: typeof $Enums.CategoryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability_slot`: Exposes CRUD operations for the **availability_slot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availability_slots
    * const availability_slots = await prisma.availability_slot.findMany()
    * ```
    */
  get availability_slot(): Prisma.availability_slotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.subjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutor_profile`: Exposes CRUD operations for the **tutor_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutor_profiles
    * const tutor_profiles = await prisma.tutor_profile.findMany()
    * ```
    */
  get tutor_profile(): Prisma.tutor_profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutor_subject`: Exposes CRUD operations for the **tutor_subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutor_subjects
    * const tutor_subjects = await prisma.tutor_subject.findMany()
    * ```
    */
  get tutor_subject(): Prisma.tutor_subjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.verificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledge_base`: Exposes CRUD operations for the **knowledge_base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Knowledge_bases
    * const knowledge_bases = await prisma.knowledge_base.findMany()
    * ```
    */
  get knowledge_base(): Prisma.knowledge_baseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account: 'account',
    availability_slot: 'availability_slot',
    booking: 'booking',
    category: 'category',
    review: 'review',
    session: 'session',
    subject: 'subject',
    tutor_profile: 'tutor_profile',
    tutor_subject: 'tutor_subject',
    user: 'user',
    verification: 'verification',
    knowledge_base: 'knowledge_base'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "availability_slot" | "booking" | "category" | "review" | "session" | "subject" | "tutor_profile" | "tutor_subject" | "user" | "verification" | "knowledge_base"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      availability_slot: {
        payload: Prisma.$availability_slotPayload<ExtArgs>
        fields: Prisma.availability_slotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.availability_slotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.availability_slotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>
          }
          findFirst: {
            args: Prisma.availability_slotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.availability_slotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>
          }
          findMany: {
            args: Prisma.availability_slotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>[]
          }
          create: {
            args: Prisma.availability_slotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>
          }
          createMany: {
            args: Prisma.availability_slotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.availability_slotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>[]
          }
          delete: {
            args: Prisma.availability_slotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>
          }
          update: {
            args: Prisma.availability_slotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>
          }
          deleteMany: {
            args: Prisma.availability_slotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.availability_slotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.availability_slotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>[]
          }
          upsert: {
            args: Prisma.availability_slotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availability_slotPayload>
          }
          aggregate: {
            args: Prisma.Availability_slotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability_slot>
          }
          groupBy: {
            args: Prisma.availability_slotGroupByArgs<ExtArgs>
            result: $Utils.Optional<Availability_slotGroupByOutputType>[]
          }
          count: {
            args: Prisma.availability_slotCountArgs<ExtArgs>
            result: $Utils.Optional<Availability_slotCountAggregateOutputType> | number
          }
        }
      }
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      session: {
        payload: Prisma.$sessionPayload<ExtArgs>
        fields: Prisma.sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findFirst: {
            args: Prisma.sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findMany: {
            args: Prisma.sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          create: {
            args: Prisma.sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          createMany: {
            args: Prisma.sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          delete: {
            args: Prisma.sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          update: {
            args: Prisma.sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          deleteMany: {
            args: Prisma.sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          upsert: {
            args: Prisma.sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      subject: {
        payload: Prisma.$subjectPayload<ExtArgs>
        fields: Prisma.subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findFirst: {
            args: Prisma.subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findMany: {
            args: Prisma.subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          create: {
            args: Prisma.subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          createMany: {
            args: Prisma.subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          delete: {
            args: Prisma.subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          update: {
            args: Prisma.subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          deleteMany: {
            args: Prisma.subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          upsert: {
            args: Prisma.subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      tutor_profile: {
        payload: Prisma.$tutor_profilePayload<ExtArgs>
        fields: Prisma.tutor_profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tutor_profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tutor_profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>
          }
          findFirst: {
            args: Prisma.tutor_profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tutor_profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>
          }
          findMany: {
            args: Prisma.tutor_profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>[]
          }
          create: {
            args: Prisma.tutor_profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>
          }
          createMany: {
            args: Prisma.tutor_profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tutor_profileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>[]
          }
          delete: {
            args: Prisma.tutor_profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>
          }
          update: {
            args: Prisma.tutor_profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>
          }
          deleteMany: {
            args: Prisma.tutor_profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tutor_profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tutor_profileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>[]
          }
          upsert: {
            args: Prisma.tutor_profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_profilePayload>
          }
          aggregate: {
            args: Prisma.Tutor_profileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor_profile>
          }
          groupBy: {
            args: Prisma.tutor_profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tutor_profileGroupByOutputType>[]
          }
          count: {
            args: Prisma.tutor_profileCountArgs<ExtArgs>
            result: $Utils.Optional<Tutor_profileCountAggregateOutputType> | number
          }
        }
      }
      tutor_subject: {
        payload: Prisma.$tutor_subjectPayload<ExtArgs>
        fields: Prisma.tutor_subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tutor_subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tutor_subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>
          }
          findFirst: {
            args: Prisma.tutor_subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tutor_subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>
          }
          findMany: {
            args: Prisma.tutor_subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>[]
          }
          create: {
            args: Prisma.tutor_subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>
          }
          createMany: {
            args: Prisma.tutor_subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tutor_subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>[]
          }
          delete: {
            args: Prisma.tutor_subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>
          }
          update: {
            args: Prisma.tutor_subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>
          }
          deleteMany: {
            args: Prisma.tutor_subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tutor_subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tutor_subjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>[]
          }
          upsert: {
            args: Prisma.tutor_subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutor_subjectPayload>
          }
          aggregate: {
            args: Prisma.Tutor_subjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor_subject>
          }
          groupBy: {
            args: Prisma.tutor_subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tutor_subjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.tutor_subjectCountArgs<ExtArgs>
            result: $Utils.Optional<Tutor_subjectCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      verification: {
        payload: Prisma.$verificationPayload<ExtArgs>
        fields: Prisma.verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          findFirst: {
            args: Prisma.verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          findMany: {
            args: Prisma.verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>[]
          }
          create: {
            args: Prisma.verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          createMany: {
            args: Prisma.verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>[]
          }
          delete: {
            args: Prisma.verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          update: {
            args: Prisma.verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          deleteMany: {
            args: Prisma.verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>[]
          }
          upsert: {
            args: Prisma.verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      knowledge_base: {
        payload: Prisma.$knowledge_basePayload<ExtArgs>
        fields: Prisma.knowledge_baseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.knowledge_baseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.knowledge_baseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>
          }
          findFirst: {
            args: Prisma.knowledge_baseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.knowledge_baseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>
          }
          findMany: {
            args: Prisma.knowledge_baseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>[]
          }
          create: {
            args: Prisma.knowledge_baseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>
          }
          createMany: {
            args: Prisma.knowledge_baseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.knowledge_baseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>[]
          }
          delete: {
            args: Prisma.knowledge_baseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>
          }
          update: {
            args: Prisma.knowledge_baseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>
          }
          deleteMany: {
            args: Prisma.knowledge_baseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.knowledge_baseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.knowledge_baseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>[]
          }
          upsert: {
            args: Prisma.knowledge_baseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_basePayload>
          }
          aggregate: {
            args: Prisma.Knowledge_baseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledge_base>
          }
          groupBy: {
            args: Prisma.knowledge_baseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Knowledge_baseGroupByOutputType>[]
          }
          count: {
            args: Prisma.knowledge_baseCountArgs<ExtArgs>
            result: $Utils.Optional<Knowledge_baseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: accountOmit
    availability_slot?: availability_slotOmit
    booking?: bookingOmit
    category?: categoryOmit
    review?: reviewOmit
    session?: sessionOmit
    subject?: subjectOmit
    tutor_profile?: tutor_profileOmit
    tutor_subject?: tutor_subjectOmit
    user?: userOmit
    verification?: verificationOmit
    knowledge_base?: knowledge_baseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Availability_slotCountOutputType
   */

  export type Availability_slotCountOutputType = {
    booking: number
  }

  export type Availability_slotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Availability_slotCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * Availability_slotCountOutputType without action
   */
  export type Availability_slotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability_slotCountOutputType
     */
    select?: Availability_slotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Availability_slotCountOutputType without action
   */
  export type Availability_slotCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subject: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | CategoryCountOutputTypeCountSubjectArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    tutor_subject: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor_subject?: boolean | SubjectCountOutputTypeCountTutor_subjectArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTutor_subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutor_subjectWhereInput
  }


  /**
   * Count Type Tutor_profileCountOutputType
   */

  export type Tutor_profileCountOutputType = {
    availability_slot: number
    booking: number
    tutor_subject: number
  }

  export type Tutor_profileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability_slot?: boolean | Tutor_profileCountOutputTypeCountAvailability_slotArgs
    booking?: boolean | Tutor_profileCountOutputTypeCountBookingArgs
    tutor_subject?: boolean | Tutor_profileCountOutputTypeCountTutor_subjectArgs
  }

  // Custom InputTypes
  /**
   * Tutor_profileCountOutputType without action
   */
  export type Tutor_profileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor_profileCountOutputType
     */
    select?: Tutor_profileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tutor_profileCountOutputType without action
   */
  export type Tutor_profileCountOutputTypeCountAvailability_slotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availability_slotWhereInput
  }

  /**
   * Tutor_profileCountOutputType without action
   */
  export type Tutor_profileCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * Tutor_profileCountOutputType without action
   */
  export type Tutor_profileCountOutputTypeCountTutor_subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutor_subjectWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    account: number
    booking: number
    review: number
    session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | UserCountOutputTypeCountAccountArgs
    booking?: boolean | UserCountOutputTypeCountBookingArgs
    review?: boolean | UserCountOutputTypeCountReviewArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountCreateManyAndReturnArgs>(args?: SelectSubset<T, accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountUpdateManyAndReturnArgs>(args: SelectSubset<T, accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'String'>
    readonly accountId: FieldRef<"account", 'String'>
    readonly providerId: FieldRef<"account", 'String'>
    readonly userId: FieldRef<"account", 'String'>
    readonly accessToken: FieldRef<"account", 'String'>
    readonly refreshToken: FieldRef<"account", 'String'>
    readonly idToken: FieldRef<"account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"account", 'DateTime'>
    readonly scope: FieldRef<"account", 'String'>
    readonly password: FieldRef<"account", 'String'>
    readonly createdAt: FieldRef<"account", 'DateTime'>
    readonly updatedAt: FieldRef<"account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account createManyAndReturn
   */
  export type accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account updateManyAndReturn
   */
  export type accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model availability_slot
   */

  export type AggregateAvailability_slot = {
    _count: Availability_slotCountAggregateOutputType | null
    _avg: Availability_slotAvgAggregateOutputType | null
    _sum: Availability_slotSumAggregateOutputType | null
    _min: Availability_slotMinAggregateOutputType | null
    _max: Availability_slotMaxAggregateOutputType | null
  }

  export type Availability_slotAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type Availability_slotSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type Availability_slotMinAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isRecurring: boolean | null
    specificDate: Date | null
    isBooked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Availability_slotMaxAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isRecurring: boolean | null
    specificDate: Date | null
    isBooked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Availability_slotCountAggregateOutputType = {
    id: number
    tutorProfileId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isRecurring: number
    specificDate: number
    isBooked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Availability_slotAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type Availability_slotSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type Availability_slotMinAggregateInputType = {
    id?: true
    tutorProfileId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isRecurring?: true
    specificDate?: true
    isBooked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Availability_slotMaxAggregateInputType = {
    id?: true
    tutorProfileId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isRecurring?: true
    specificDate?: true
    isBooked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Availability_slotCountAggregateInputType = {
    id?: true
    tutorProfileId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isRecurring?: true
    specificDate?: true
    isBooked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Availability_slotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which availability_slot to aggregate.
     */
    where?: availability_slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: availability_slotOrderByWithRelationInput | availability_slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: availability_slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availability_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned availability_slots
    **/
    _count?: true | Availability_slotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Availability_slotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Availability_slotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Availability_slotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Availability_slotMaxAggregateInputType
  }

  export type GetAvailability_slotAggregateType<T extends Availability_slotAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability_slot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability_slot[P]>
      : GetScalarType<T[P], AggregateAvailability_slot[P]>
  }




  export type availability_slotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availability_slotWhereInput
    orderBy?: availability_slotOrderByWithAggregationInput | availability_slotOrderByWithAggregationInput[]
    by: Availability_slotScalarFieldEnum[] | Availability_slotScalarFieldEnum
    having?: availability_slotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Availability_slotCountAggregateInputType | true
    _avg?: Availability_slotAvgAggregateInputType
    _sum?: Availability_slotSumAggregateInputType
    _min?: Availability_slotMinAggregateInputType
    _max?: Availability_slotMaxAggregateInputType
  }

  export type Availability_slotGroupByOutputType = {
    id: string
    tutorProfileId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring: boolean
    specificDate: Date | null
    isBooked: boolean
    createdAt: Date
    updatedAt: Date
    _count: Availability_slotCountAggregateOutputType | null
    _avg: Availability_slotAvgAggregateOutputType | null
    _sum: Availability_slotSumAggregateOutputType | null
    _min: Availability_slotMinAggregateOutputType | null
    _max: Availability_slotMaxAggregateOutputType | null
  }

  type GetAvailability_slotGroupByPayload<T extends availability_slotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Availability_slotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Availability_slotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Availability_slotGroupByOutputType[P]>
            : GetScalarType<T[P], Availability_slotGroupByOutputType[P]>
        }
      >
    >


  export type availability_slotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    specificDate?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    booking?: boolean | availability_slot$bookingArgs<ExtArgs>
    _count?: boolean | Availability_slotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability_slot"]>

  export type availability_slotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    specificDate?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability_slot"]>

  export type availability_slotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    specificDate?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability_slot"]>

  export type availability_slotSelectScalar = {
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    specificDate?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type availability_slotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorProfileId" | "dayOfWeek" | "startTime" | "endTime" | "isRecurring" | "specificDate" | "isBooked" | "createdAt" | "updatedAt", ExtArgs["result"]["availability_slot"]>
  export type availability_slotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    booking?: boolean | availability_slot$bookingArgs<ExtArgs>
    _count?: boolean | Availability_slotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type availability_slotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }
  export type availability_slotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }

  export type $availability_slotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "availability_slot"
    objects: {
      tutor_profile: Prisma.$tutor_profilePayload<ExtArgs>
      booking: Prisma.$bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tutorProfileId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      isRecurring: boolean
      specificDate: Date | null
      isBooked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availability_slot"]>
    composites: {}
  }

  type availability_slotGetPayload<S extends boolean | null | undefined | availability_slotDefaultArgs> = $Result.GetResult<Prisma.$availability_slotPayload, S>

  type availability_slotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<availability_slotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Availability_slotCountAggregateInputType | true
    }

  export interface availability_slotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['availability_slot'], meta: { name: 'availability_slot' } }
    /**
     * Find zero or one Availability_slot that matches the filter.
     * @param {availability_slotFindUniqueArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends availability_slotFindUniqueArgs>(args: SelectSubset<T, availability_slotFindUniqueArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability_slot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {availability_slotFindUniqueOrThrowArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends availability_slotFindUniqueOrThrowArgs>(args: SelectSubset<T, availability_slotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability_slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotFindFirstArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends availability_slotFindFirstArgs>(args?: SelectSubset<T, availability_slotFindFirstArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability_slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotFindFirstOrThrowArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends availability_slotFindFirstOrThrowArgs>(args?: SelectSubset<T, availability_slotFindFirstOrThrowArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availability_slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availability_slots
     * const availability_slots = await prisma.availability_slot.findMany()
     * 
     * // Get first 10 Availability_slots
     * const availability_slots = await prisma.availability_slot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availability_slotWithIdOnly = await prisma.availability_slot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends availability_slotFindManyArgs>(args?: SelectSubset<T, availability_slotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability_slot.
     * @param {availability_slotCreateArgs} args - Arguments to create a Availability_slot.
     * @example
     * // Create one Availability_slot
     * const Availability_slot = await prisma.availability_slot.create({
     *   data: {
     *     // ... data to create a Availability_slot
     *   }
     * })
     * 
     */
    create<T extends availability_slotCreateArgs>(args: SelectSubset<T, availability_slotCreateArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availability_slots.
     * @param {availability_slotCreateManyArgs} args - Arguments to create many Availability_slots.
     * @example
     * // Create many Availability_slots
     * const availability_slot = await prisma.availability_slot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends availability_slotCreateManyArgs>(args?: SelectSubset<T, availability_slotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availability_slots and returns the data saved in the database.
     * @param {availability_slotCreateManyAndReturnArgs} args - Arguments to create many Availability_slots.
     * @example
     * // Create many Availability_slots
     * const availability_slot = await prisma.availability_slot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availability_slots and only return the `id`
     * const availability_slotWithIdOnly = await prisma.availability_slot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends availability_slotCreateManyAndReturnArgs>(args?: SelectSubset<T, availability_slotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability_slot.
     * @param {availability_slotDeleteArgs} args - Arguments to delete one Availability_slot.
     * @example
     * // Delete one Availability_slot
     * const Availability_slot = await prisma.availability_slot.delete({
     *   where: {
     *     // ... filter to delete one Availability_slot
     *   }
     * })
     * 
     */
    delete<T extends availability_slotDeleteArgs>(args: SelectSubset<T, availability_slotDeleteArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability_slot.
     * @param {availability_slotUpdateArgs} args - Arguments to update one Availability_slot.
     * @example
     * // Update one Availability_slot
     * const availability_slot = await prisma.availability_slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends availability_slotUpdateArgs>(args: SelectSubset<T, availability_slotUpdateArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availability_slots.
     * @param {availability_slotDeleteManyArgs} args - Arguments to filter Availability_slots to delete.
     * @example
     * // Delete a few Availability_slots
     * const { count } = await prisma.availability_slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends availability_slotDeleteManyArgs>(args?: SelectSubset<T, availability_slotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availability_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availability_slots
     * const availability_slot = await prisma.availability_slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends availability_slotUpdateManyArgs>(args: SelectSubset<T, availability_slotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availability_slots and returns the data updated in the database.
     * @param {availability_slotUpdateManyAndReturnArgs} args - Arguments to update many Availability_slots.
     * @example
     * // Update many Availability_slots
     * const availability_slot = await prisma.availability_slot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availability_slots and only return the `id`
     * const availability_slotWithIdOnly = await prisma.availability_slot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends availability_slotUpdateManyAndReturnArgs>(args: SelectSubset<T, availability_slotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability_slot.
     * @param {availability_slotUpsertArgs} args - Arguments to update or create a Availability_slot.
     * @example
     * // Update or create a Availability_slot
     * const availability_slot = await prisma.availability_slot.upsert({
     *   create: {
     *     // ... data to create a Availability_slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability_slot we want to update
     *   }
     * })
     */
    upsert<T extends availability_slotUpsertArgs>(args: SelectSubset<T, availability_slotUpsertArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availability_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotCountArgs} args - Arguments to filter Availability_slots to count.
     * @example
     * // Count the number of Availability_slots
     * const count = await prisma.availability_slot.count({
     *   where: {
     *     // ... the filter for the Availability_slots we want to count
     *   }
     * })
    **/
    count<T extends availability_slotCountArgs>(
      args?: Subset<T, availability_slotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Availability_slotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability_slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Availability_slotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Availability_slotAggregateArgs>(args: Subset<T, Availability_slotAggregateArgs>): Prisma.PrismaPromise<GetAvailability_slotAggregateType<T>>

    /**
     * Group by Availability_slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends availability_slotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: availability_slotGroupByArgs['orderBy'] }
        : { orderBy?: availability_slotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, availability_slotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailability_slotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the availability_slot model
   */
  readonly fields: availability_slotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for availability_slot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__availability_slotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor_profile<T extends tutor_profileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tutor_profileDefaultArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends availability_slot$bookingArgs<ExtArgs> = {}>(args?: Subset<T, availability_slot$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the availability_slot model
   */
  interface availability_slotFieldRefs {
    readonly id: FieldRef<"availability_slot", 'String'>
    readonly tutorProfileId: FieldRef<"availability_slot", 'String'>
    readonly dayOfWeek: FieldRef<"availability_slot", 'Int'>
    readonly startTime: FieldRef<"availability_slot", 'String'>
    readonly endTime: FieldRef<"availability_slot", 'String'>
    readonly isRecurring: FieldRef<"availability_slot", 'Boolean'>
    readonly specificDate: FieldRef<"availability_slot", 'DateTime'>
    readonly isBooked: FieldRef<"availability_slot", 'Boolean'>
    readonly createdAt: FieldRef<"availability_slot", 'DateTime'>
    readonly updatedAt: FieldRef<"availability_slot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * availability_slot findUnique
   */
  export type availability_slotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * Filter, which availability_slot to fetch.
     */
    where: availability_slotWhereUniqueInput
  }

  /**
   * availability_slot findUniqueOrThrow
   */
  export type availability_slotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * Filter, which availability_slot to fetch.
     */
    where: availability_slotWhereUniqueInput
  }

  /**
   * availability_slot findFirst
   */
  export type availability_slotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * Filter, which availability_slot to fetch.
     */
    where?: availability_slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: availability_slotOrderByWithRelationInput | availability_slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for availability_slots.
     */
    cursor?: availability_slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availability_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availability_slots.
     */
    distinct?: Availability_slotScalarFieldEnum | Availability_slotScalarFieldEnum[]
  }

  /**
   * availability_slot findFirstOrThrow
   */
  export type availability_slotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * Filter, which availability_slot to fetch.
     */
    where?: availability_slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: availability_slotOrderByWithRelationInput | availability_slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for availability_slots.
     */
    cursor?: availability_slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availability_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availability_slots.
     */
    distinct?: Availability_slotScalarFieldEnum | Availability_slotScalarFieldEnum[]
  }

  /**
   * availability_slot findMany
   */
  export type availability_slotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * Filter, which availability_slots to fetch.
     */
    where?: availability_slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: availability_slotOrderByWithRelationInput | availability_slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing availability_slots.
     */
    cursor?: availability_slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availability_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availability_slots.
     */
    distinct?: Availability_slotScalarFieldEnum | Availability_slotScalarFieldEnum[]
  }

  /**
   * availability_slot create
   */
  export type availability_slotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * The data needed to create a availability_slot.
     */
    data: XOR<availability_slotCreateInput, availability_slotUncheckedCreateInput>
  }

  /**
   * availability_slot createMany
   */
  export type availability_slotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many availability_slots.
     */
    data: availability_slotCreateManyInput | availability_slotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * availability_slot createManyAndReturn
   */
  export type availability_slotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * The data used to create many availability_slots.
     */
    data: availability_slotCreateManyInput | availability_slotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * availability_slot update
   */
  export type availability_slotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * The data needed to update a availability_slot.
     */
    data: XOR<availability_slotUpdateInput, availability_slotUncheckedUpdateInput>
    /**
     * Choose, which availability_slot to update.
     */
    where: availability_slotWhereUniqueInput
  }

  /**
   * availability_slot updateMany
   */
  export type availability_slotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update availability_slots.
     */
    data: XOR<availability_slotUpdateManyMutationInput, availability_slotUncheckedUpdateManyInput>
    /**
     * Filter which availability_slots to update
     */
    where?: availability_slotWhereInput
    /**
     * Limit how many availability_slots to update.
     */
    limit?: number
  }

  /**
   * availability_slot updateManyAndReturn
   */
  export type availability_slotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * The data used to update availability_slots.
     */
    data: XOR<availability_slotUpdateManyMutationInput, availability_slotUncheckedUpdateManyInput>
    /**
     * Filter which availability_slots to update
     */
    where?: availability_slotWhereInput
    /**
     * Limit how many availability_slots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * availability_slot upsert
   */
  export type availability_slotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * The filter to search for the availability_slot to update in case it exists.
     */
    where: availability_slotWhereUniqueInput
    /**
     * In case the availability_slot found by the `where` argument doesn't exist, create a new availability_slot with this data.
     */
    create: XOR<availability_slotCreateInput, availability_slotUncheckedCreateInput>
    /**
     * In case the availability_slot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<availability_slotUpdateInput, availability_slotUncheckedUpdateInput>
  }

  /**
   * availability_slot delete
   */
  export type availability_slotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    /**
     * Filter which availability_slot to delete.
     */
    where: availability_slotWhereUniqueInput
  }

  /**
   * availability_slot deleteMany
   */
  export type availability_slotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which availability_slots to delete
     */
    where?: availability_slotWhereInput
    /**
     * Limit how many availability_slots to delete.
     */
    limit?: number
  }

  /**
   * availability_slot.booking
   */
  export type availability_slot$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * availability_slot without action
   */
  export type availability_slotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
  }


  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    duration: number | null
    price: number | null
  }

  export type BookingSumAggregateOutputType = {
    duration: number | null
    price: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    tutorProfileId: string | null
    availabilitySlotId: string | null
    scheduledAt: Date | null
    duration: number | null
    status: $Enums.BookingStatus | null
    subject: string | null
    notes: string | null
    meetingLink: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    tutorProfileId: string | null
    availabilitySlotId: string | null
    scheduledAt: Date | null
    duration: number | null
    status: $Enums.BookingStatus | null
    subject: string | null
    notes: string | null
    meetingLink: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    studentId: number
    tutorProfileId: number
    availabilitySlotId: number
    scheduledAt: number
    duration: number
    status: number
    subject: number
    notes: number
    meetingLink: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    duration?: true
    price?: true
  }

  export type BookingSumAggregateInputType = {
    duration?: true
    price?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    studentId?: true
    tutorProfileId?: true
    availabilitySlotId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    subject?: true
    notes?: true
    meetingLink?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    studentId?: true
    tutorProfileId?: true
    availabilitySlotId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    subject?: true
    notes?: true
    meetingLink?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    studentId?: true
    tutorProfileId?: true
    availabilitySlotId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    subject?: true
    notes?: true
    meetingLink?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    studentId: string
    tutorProfileId: string
    availabilitySlotId: string | null
    scheduledAt: Date
    duration: number
    status: $Enums.BookingStatus
    subject: string | null
    notes: string | null
    meetingLink: string | null
    price: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    availabilitySlotId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    subject?: boolean
    notes?: boolean
    meetingLink?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    availability_slot?: boolean | booking$availability_slotArgs<ExtArgs>
    review?: boolean | booking$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    availabilitySlotId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    subject?: boolean
    notes?: boolean
    meetingLink?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    availability_slot?: boolean | booking$availability_slotArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    availabilitySlotId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    subject?: boolean
    notes?: boolean
    meetingLink?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    availability_slot?: boolean | booking$availability_slotArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectScalar = {
    id?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    availabilitySlotId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    subject?: boolean
    notes?: boolean
    meetingLink?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "tutorProfileId" | "availabilitySlotId" | "scheduledAt" | "duration" | "status" | "subject" | "notes" | "meetingLink" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    availability_slot?: boolean | booking$availability_slotArgs<ExtArgs>
    review?: boolean | booking$reviewArgs<ExtArgs>
  }
  export type bookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    availability_slot?: boolean | booking$availability_slotArgs<ExtArgs>
  }
  export type bookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
    availability_slot?: boolean | booking$availability_slotArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      tutor_profile: Prisma.$tutor_profilePayload<ExtArgs>
      availability_slot: Prisma.$availability_slotPayload<ExtArgs> | null
      review: Prisma.$reviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      tutorProfileId: string
      availabilitySlotId: string | null
      scheduledAt: Date
      duration: number
      status: $Enums.BookingStatus
      subject: string | null
      notes: string | null
      meetingLink: string | null
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutor_profile<T extends tutor_profileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tutor_profileDefaultArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availability_slot<T extends booking$availability_slotArgs<ExtArgs> = {}>(args?: Subset<T, booking$availability_slotArgs<ExtArgs>>): Prisma__availability_slotClient<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, booking$reviewArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<"booking", 'String'>
    readonly studentId: FieldRef<"booking", 'String'>
    readonly tutorProfileId: FieldRef<"booking", 'String'>
    readonly availabilitySlotId: FieldRef<"booking", 'String'>
    readonly scheduledAt: FieldRef<"booking", 'DateTime'>
    readonly duration: FieldRef<"booking", 'Int'>
    readonly status: FieldRef<"booking", 'BookingStatus'>
    readonly subject: FieldRef<"booking", 'String'>
    readonly notes: FieldRef<"booking", 'String'>
    readonly meetingLink: FieldRef<"booking", 'String'>
    readonly price: FieldRef<"booking", 'Float'>
    readonly createdAt: FieldRef<"booking", 'DateTime'>
    readonly updatedAt: FieldRef<"booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking createManyAndReturn
   */
  export type bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking updateManyAndReturn
   */
  export type bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking.availability_slot
   */
  export type booking$availability_slotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    where?: availability_slotWhereInput
  }

  /**
   * booking.review
   */
  export type booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.CategoryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.CategoryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.CategoryStatus
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | category$subjectArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | category$subjectArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      subject: Prisma.$subjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.CategoryStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends category$subjectArgs<ExtArgs> = {}>(args?: Subset<T, category$subjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'String'>
    readonly name: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly status: FieldRef<"category", 'CategoryStatus'>
    readonly createdAt: FieldRef<"category", 'DateTime'>
    readonly updatedAt: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.subject
   */
  export type category$subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    cursor?: subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    studentId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    studentId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    bookingId: number
    studentId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    bookingId?: true
    studentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    bookingId?: true
    studentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    bookingId?: true
    studentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    bookingId: string
    studentId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | bookingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | bookingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | bookingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "studentId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      studentId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends bookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingDefaultArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'String'>
    readonly bookingId: FieldRef<"review", 'String'>
    readonly studentId: FieldRef<"review", 'String'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly createdAt: FieldRef<"review", 'DateTime'>
    readonly updatedAt: FieldRef<"review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    ipAddress: number
    userAgent: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session to aggregate.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithAggregationInput | sessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    ipAddress: string | null
    userAgent: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "ipAddress" | "userAgent" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type sessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type sessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      ipAddress: string | null
      userAgent: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = $Result.GetResult<Prisma.$sessionPayload, S>

  type sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session'], meta: { name: 'session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {sessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionFindUniqueArgs>(args: SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionFindFirstArgs>(args?: SelectSubset<T, sessionFindFirstArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionFindManyArgs>(args?: SelectSubset<T, sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {sessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends sessionCreateArgs>(args: SelectSubset<T, sessionCreateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionCreateManyArgs>(args?: SelectSubset<T, sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {sessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends sessionDeleteArgs>(args: SelectSubset<T, sessionDeleteArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {sessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionUpdateArgs>(args: SelectSubset<T, sessionUpdateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionDeleteManyArgs>(args?: SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionUpdateManyArgs>(args: SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {sessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends sessionUpsertArgs>(args: SelectSubset<T, sessionUpsertArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionCountArgs>(
      args?: Subset<T, sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionGroupByArgs['orderBy'] }
        : { orderBy?: sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session model
   */
  readonly fields: sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the session model
   */
  interface sessionFieldRefs {
    readonly id: FieldRef<"session", 'String'>
    readonly expiresAt: FieldRef<"session", 'DateTime'>
    readonly token: FieldRef<"session", 'String'>
    readonly ipAddress: FieldRef<"session", 'String'>
    readonly userAgent: FieldRef<"session", 'String'>
    readonly userId: FieldRef<"session", 'String'>
    readonly createdAt: FieldRef<"session", 'DateTime'>
    readonly updatedAt: FieldRef<"session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * session findUnique
   */
  export type sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findUniqueOrThrow
   */
  export type sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findFirst
   */
  export type sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findFirstOrThrow
   */
  export type sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findMany
   */
  export type sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session create
   */
  export type sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a session.
     */
    data: XOR<sessionCreateInput, sessionUncheckedCreateInput>
  }

  /**
   * session createMany
   */
  export type sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session createManyAndReturn
   */
  export type sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * session update
   */
  export type sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a session.
     */
    data: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
    /**
     * Choose, which session to update.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session updateMany
   */
  export type sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * session updateManyAndReturn
   */
  export type sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * session upsert
   */
  export type sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the session to update in case it exists.
     */
    where: sessionWhereUniqueInput
    /**
     * In case the session found by the `where` argument doesn't exist, create a new session with this data.
     */
    create: XOR<sessionCreateInput, sessionUncheckedCreateInput>
    /**
     * In case the session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
  }

  /**
   * session delete
   */
  export type sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter which session to delete.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session deleteMany
   */
  export type sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * session without action
   */
  export type sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
  }


  /**
   * Model subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject to aggregate.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithAggregationInput | subjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    tutor_subject?: boolean | subject$tutor_subjectArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type subjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type subjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    tutor_subject?: boolean | subject$tutor_subjectArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }
  export type subjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }

  export type $subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      tutor_subject: Prisma.$tutor_subjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type subjectGetPayload<S extends boolean | null | undefined | subjectDefaultArgs> = $Result.GetResult<Prisma.$subjectPayload, S>

  type subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject'], meta: { name: 'subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {subjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectFindUniqueArgs>(args: SelectSubset<T, subjectFindUniqueArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectFindFirstArgs>(args?: SelectSubset<T, subjectFindFirstArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectFindManyArgs>(args?: SelectSubset<T, subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {subjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends subjectCreateArgs>(args: SelectSubset<T, subjectCreateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {subjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectCreateManyArgs>(args?: SelectSubset<T, subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {subjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {subjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends subjectDeleteArgs>(args: SelectSubset<T, subjectDeleteArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {subjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectUpdateArgs>(args: SelectSubset<T, subjectUpdateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {subjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectDeleteManyArgs>(args?: SelectSubset<T, subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectUpdateManyArgs>(args: SelectSubset<T, subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {subjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends subjectUpdateManyAndReturnArgs>(args: SelectSubset<T, subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {subjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends subjectUpsertArgs>(args: SelectSubset<T, subjectUpsertArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectCountArgs>(
      args?: Subset<T, subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectGroupByArgs['orderBy'] }
        : { orderBy?: subjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject model
   */
  readonly fields: subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutor_subject<T extends subject$tutor_subjectArgs<ExtArgs> = {}>(args?: Subset<T, subject$tutor_subjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subject model
   */
  interface subjectFieldRefs {
    readonly id: FieldRef<"subject", 'String'>
    readonly name: FieldRef<"subject", 'String'>
    readonly categoryId: FieldRef<"subject", 'String'>
    readonly createdAt: FieldRef<"subject", 'DateTime'>
    readonly updatedAt: FieldRef<"subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subject findUnique
   */
  export type subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findUniqueOrThrow
   */
  export type subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findFirst
   */
  export type subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findFirstOrThrow
   */
  export type subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findMany
   */
  export type subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject create
   */
  export type subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to create a subject.
     */
    data: XOR<subjectCreateInput, subjectUncheckedCreateInput>
  }

  /**
   * subject createMany
   */
  export type subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject createManyAndReturn
   */
  export type subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject update
   */
  export type subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to update a subject.
     */
    data: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
    /**
     * Choose, which subject to update.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject updateMany
   */
  export type subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subject updateManyAndReturn
   */
  export type subjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject upsert
   */
  export type subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The filter to search for the subject to update in case it exists.
     */
    where: subjectWhereUniqueInput
    /**
     * In case the subject found by the `where` argument doesn't exist, create a new subject with this data.
     */
    create: XOR<subjectCreateInput, subjectUncheckedCreateInput>
    /**
     * In case the subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
  }

  /**
   * subject delete
   */
  export type subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter which subject to delete.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject deleteMany
   */
  export type subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to delete.
     */
    limit?: number
  }

  /**
   * subject.tutor_subject
   */
  export type subject$tutor_subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    where?: tutor_subjectWhereInput
    orderBy?: tutor_subjectOrderByWithRelationInput | tutor_subjectOrderByWithRelationInput[]
    cursor?: tutor_subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tutor_subjectScalarFieldEnum | Tutor_subjectScalarFieldEnum[]
  }

  /**
   * subject without action
   */
  export type subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
  }


  /**
   * Model tutor_profile
   */

  export type AggregateTutor_profile = {
    _count: Tutor_profileCountAggregateOutputType | null
    _avg: Tutor_profileAvgAggregateOutputType | null
    _sum: Tutor_profileSumAggregateOutputType | null
    _min: Tutor_profileMinAggregateOutputType | null
    _max: Tutor_profileMaxAggregateOutputType | null
  }

  export type Tutor_profileAvgAggregateOutputType = {
    hourlyRate: number | null
    experience: number | null
    averageRating: number | null
    totalReviews: number | null
    totalSessions: number | null
  }

  export type Tutor_profileSumAggregateOutputType = {
    hourlyRate: number | null
    experience: number | null
    averageRating: number | null
    totalReviews: number | null
    totalSessions: number | null
  }

  export type Tutor_profileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    headline: string | null
    hourlyRate: number | null
    address: string | null
    experience: number | null
    education: string | null
    isAvailable: boolean | null
    averageRating: number | null
    totalReviews: number | null
    totalSessions: number | null
    isVerified: boolean | null
    verifiedAt: Date | null
    isFeatured: boolean | null
    banner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tutor_profileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    headline: string | null
    hourlyRate: number | null
    address: string | null
    experience: number | null
    education: string | null
    isAvailable: boolean | null
    averageRating: number | null
    totalReviews: number | null
    totalSessions: number | null
    isVerified: boolean | null
    verifiedAt: Date | null
    isFeatured: boolean | null
    banner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tutor_profileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    headline: number
    hourlyRate: number
    address: number
    experience: number
    education: number
    isAvailable: number
    averageRating: number
    totalReviews: number
    totalSessions: number
    isVerified: number
    verifiedAt: number
    isFeatured: number
    banner: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Tutor_profileAvgAggregateInputType = {
    hourlyRate?: true
    experience?: true
    averageRating?: true
    totalReviews?: true
    totalSessions?: true
  }

  export type Tutor_profileSumAggregateInputType = {
    hourlyRate?: true
    experience?: true
    averageRating?: true
    totalReviews?: true
    totalSessions?: true
  }

  export type Tutor_profileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    headline?: true
    hourlyRate?: true
    address?: true
    experience?: true
    education?: true
    isAvailable?: true
    averageRating?: true
    totalReviews?: true
    totalSessions?: true
    isVerified?: true
    verifiedAt?: true
    isFeatured?: true
    banner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tutor_profileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    headline?: true
    hourlyRate?: true
    address?: true
    experience?: true
    education?: true
    isAvailable?: true
    averageRating?: true
    totalReviews?: true
    totalSessions?: true
    isVerified?: true
    verifiedAt?: true
    isFeatured?: true
    banner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tutor_profileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    headline?: true
    hourlyRate?: true
    address?: true
    experience?: true
    education?: true
    isAvailable?: true
    averageRating?: true
    totalReviews?: true
    totalSessions?: true
    isVerified?: true
    verifiedAt?: true
    isFeatured?: true
    banner?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Tutor_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_profile to aggregate.
     */
    where?: tutor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: tutor_profileOrderByWithRelationInput | tutor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tutor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tutor_profiles
    **/
    _count?: true | Tutor_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tutor_profileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tutor_profileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tutor_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tutor_profileMaxAggregateInputType
  }

  export type GetTutor_profileAggregateType<T extends Tutor_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor_profile[P]>
      : GetScalarType<T[P], AggregateTutor_profile[P]>
  }




  export type tutor_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutor_profileWhereInput
    orderBy?: tutor_profileOrderByWithAggregationInput | tutor_profileOrderByWithAggregationInput[]
    by: Tutor_profileScalarFieldEnum[] | Tutor_profileScalarFieldEnum
    having?: tutor_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tutor_profileCountAggregateInputType | true
    _avg?: Tutor_profileAvgAggregateInputType
    _sum?: Tutor_profileSumAggregateInputType
    _min?: Tutor_profileMinAggregateInputType
    _max?: Tutor_profileMaxAggregateInputType
  }

  export type Tutor_profileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    headline: string | null
    hourlyRate: number
    address: string | null
    experience: number
    education: string | null
    isAvailable: boolean
    averageRating: number
    totalReviews: number
    totalSessions: number
    isVerified: boolean
    verifiedAt: Date | null
    isFeatured: boolean
    banner: string | null
    createdAt: Date
    updatedAt: Date
    _count: Tutor_profileCountAggregateOutputType | null
    _avg: Tutor_profileAvgAggregateOutputType | null
    _sum: Tutor_profileSumAggregateOutputType | null
    _min: Tutor_profileMinAggregateOutputType | null
    _max: Tutor_profileMaxAggregateOutputType | null
  }

  type GetTutor_profileGroupByPayload<T extends tutor_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tutor_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tutor_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tutor_profileGroupByOutputType[P]>
            : GetScalarType<T[P], Tutor_profileGroupByOutputType[P]>
        }
      >
    >


  export type tutor_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    headline?: boolean
    hourlyRate?: boolean
    address?: boolean
    experience?: boolean
    education?: boolean
    isAvailable?: boolean
    averageRating?: boolean
    totalReviews?: boolean
    totalSessions?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    isFeatured?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availability_slot?: boolean | tutor_profile$availability_slotArgs<ExtArgs>
    booking?: boolean | tutor_profile$bookingArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_subject?: boolean | tutor_profile$tutor_subjectArgs<ExtArgs>
    _count?: boolean | Tutor_profileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_profile"]>

  export type tutor_profileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    headline?: boolean
    hourlyRate?: boolean
    address?: boolean
    experience?: boolean
    education?: boolean
    isAvailable?: boolean
    averageRating?: boolean
    totalReviews?: boolean
    totalSessions?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    isFeatured?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_profile"]>

  export type tutor_profileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    headline?: boolean
    hourlyRate?: boolean
    address?: boolean
    experience?: boolean
    education?: boolean
    isAvailable?: boolean
    averageRating?: boolean
    totalReviews?: boolean
    totalSessions?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    isFeatured?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_profile"]>

  export type tutor_profileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    headline?: boolean
    hourlyRate?: boolean
    address?: boolean
    experience?: boolean
    education?: boolean
    isAvailable?: boolean
    averageRating?: boolean
    totalReviews?: boolean
    totalSessions?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    isFeatured?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tutor_profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "headline" | "hourlyRate" | "address" | "experience" | "education" | "isAvailable" | "averageRating" | "totalReviews" | "totalSessions" | "isVerified" | "verifiedAt" | "isFeatured" | "banner" | "createdAt" | "updatedAt", ExtArgs["result"]["tutor_profile"]>
  export type tutor_profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability_slot?: boolean | tutor_profile$availability_slotArgs<ExtArgs>
    booking?: boolean | tutor_profile$bookingArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    tutor_subject?: boolean | tutor_profile$tutor_subjectArgs<ExtArgs>
    _count?: boolean | Tutor_profileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tutor_profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type tutor_profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $tutor_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tutor_profile"
    objects: {
      availability_slot: Prisma.$availability_slotPayload<ExtArgs>[]
      booking: Prisma.$bookingPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      tutor_subject: Prisma.$tutor_subjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      headline: string | null
      hourlyRate: number
      address: string | null
      experience: number
      education: string | null
      isAvailable: boolean
      averageRating: number
      totalReviews: number
      totalSessions: number
      isVerified: boolean
      verifiedAt: Date | null
      isFeatured: boolean
      banner: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tutor_profile"]>
    composites: {}
  }

  type tutor_profileGetPayload<S extends boolean | null | undefined | tutor_profileDefaultArgs> = $Result.GetResult<Prisma.$tutor_profilePayload, S>

  type tutor_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tutor_profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tutor_profileCountAggregateInputType | true
    }

  export interface tutor_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tutor_profile'], meta: { name: 'tutor_profile' } }
    /**
     * Find zero or one Tutor_profile that matches the filter.
     * @param {tutor_profileFindUniqueArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutor_profileFindUniqueArgs>(args: SelectSubset<T, tutor_profileFindUniqueArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor_profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutor_profileFindUniqueOrThrowArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutor_profileFindUniqueOrThrowArgs>(args: SelectSubset<T, tutor_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileFindFirstArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutor_profileFindFirstArgs>(args?: SelectSubset<T, tutor_profileFindFirstArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileFindFirstOrThrowArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutor_profileFindFirstOrThrowArgs>(args?: SelectSubset<T, tutor_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutor_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutor_profiles
     * const tutor_profiles = await prisma.tutor_profile.findMany()
     * 
     * // Get first 10 Tutor_profiles
     * const tutor_profiles = await prisma.tutor_profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutor_profileWithIdOnly = await prisma.tutor_profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tutor_profileFindManyArgs>(args?: SelectSubset<T, tutor_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor_profile.
     * @param {tutor_profileCreateArgs} args - Arguments to create a Tutor_profile.
     * @example
     * // Create one Tutor_profile
     * const Tutor_profile = await prisma.tutor_profile.create({
     *   data: {
     *     // ... data to create a Tutor_profile
     *   }
     * })
     * 
     */
    create<T extends tutor_profileCreateArgs>(args: SelectSubset<T, tutor_profileCreateArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutor_profiles.
     * @param {tutor_profileCreateManyArgs} args - Arguments to create many Tutor_profiles.
     * @example
     * // Create many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tutor_profileCreateManyArgs>(args?: SelectSubset<T, tutor_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutor_profiles and returns the data saved in the database.
     * @param {tutor_profileCreateManyAndReturnArgs} args - Arguments to create many Tutor_profiles.
     * @example
     * // Create many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutor_profiles and only return the `id`
     * const tutor_profileWithIdOnly = await prisma.tutor_profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tutor_profileCreateManyAndReturnArgs>(args?: SelectSubset<T, tutor_profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutor_profile.
     * @param {tutor_profileDeleteArgs} args - Arguments to delete one Tutor_profile.
     * @example
     * // Delete one Tutor_profile
     * const Tutor_profile = await prisma.tutor_profile.delete({
     *   where: {
     *     // ... filter to delete one Tutor_profile
     *   }
     * })
     * 
     */
    delete<T extends tutor_profileDeleteArgs>(args: SelectSubset<T, tutor_profileDeleteArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor_profile.
     * @param {tutor_profileUpdateArgs} args - Arguments to update one Tutor_profile.
     * @example
     * // Update one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tutor_profileUpdateArgs>(args: SelectSubset<T, tutor_profileUpdateArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutor_profiles.
     * @param {tutor_profileDeleteManyArgs} args - Arguments to filter Tutor_profiles to delete.
     * @example
     * // Delete a few Tutor_profiles
     * const { count } = await prisma.tutor_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tutor_profileDeleteManyArgs>(args?: SelectSubset<T, tutor_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tutor_profileUpdateManyArgs>(args: SelectSubset<T, tutor_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutor_profiles and returns the data updated in the database.
     * @param {tutor_profileUpdateManyAndReturnArgs} args - Arguments to update many Tutor_profiles.
     * @example
     * // Update many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutor_profiles and only return the `id`
     * const tutor_profileWithIdOnly = await prisma.tutor_profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tutor_profileUpdateManyAndReturnArgs>(args: SelectSubset<T, tutor_profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutor_profile.
     * @param {tutor_profileUpsertArgs} args - Arguments to update or create a Tutor_profile.
     * @example
     * // Update or create a Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.upsert({
     *   create: {
     *     // ... data to create a Tutor_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor_profile we want to update
     *   }
     * })
     */
    upsert<T extends tutor_profileUpsertArgs>(args: SelectSubset<T, tutor_profileUpsertArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileCountArgs} args - Arguments to filter Tutor_profiles to count.
     * @example
     * // Count the number of Tutor_profiles
     * const count = await prisma.tutor_profile.count({
     *   where: {
     *     // ... the filter for the Tutor_profiles we want to count
     *   }
     * })
    **/
    count<T extends tutor_profileCountArgs>(
      args?: Subset<T, tutor_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tutor_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutor_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tutor_profileAggregateArgs>(args: Subset<T, Tutor_profileAggregateArgs>): Prisma.PrismaPromise<GetTutor_profileAggregateType<T>>

    /**
     * Group by Tutor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tutor_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tutor_profileGroupByArgs['orderBy'] }
        : { orderBy?: tutor_profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tutor_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutor_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tutor_profile model
   */
  readonly fields: tutor_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tutor_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tutor_profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availability_slot<T extends tutor_profile$availability_slotArgs<ExtArgs> = {}>(args?: Subset<T, tutor_profile$availability_slotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends tutor_profile$bookingArgs<ExtArgs> = {}>(args?: Subset<T, tutor_profile$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutor_subject<T extends tutor_profile$tutor_subjectArgs<ExtArgs> = {}>(args?: Subset<T, tutor_profile$tutor_subjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tutor_profile model
   */
  interface tutor_profileFieldRefs {
    readonly id: FieldRef<"tutor_profile", 'String'>
    readonly userId: FieldRef<"tutor_profile", 'String'>
    readonly bio: FieldRef<"tutor_profile", 'String'>
    readonly headline: FieldRef<"tutor_profile", 'String'>
    readonly hourlyRate: FieldRef<"tutor_profile", 'Float'>
    readonly address: FieldRef<"tutor_profile", 'String'>
    readonly experience: FieldRef<"tutor_profile", 'Int'>
    readonly education: FieldRef<"tutor_profile", 'String'>
    readonly isAvailable: FieldRef<"tutor_profile", 'Boolean'>
    readonly averageRating: FieldRef<"tutor_profile", 'Float'>
    readonly totalReviews: FieldRef<"tutor_profile", 'Int'>
    readonly totalSessions: FieldRef<"tutor_profile", 'Int'>
    readonly isVerified: FieldRef<"tutor_profile", 'Boolean'>
    readonly verifiedAt: FieldRef<"tutor_profile", 'DateTime'>
    readonly isFeatured: FieldRef<"tutor_profile", 'Boolean'>
    readonly banner: FieldRef<"tutor_profile", 'String'>
    readonly createdAt: FieldRef<"tutor_profile", 'DateTime'>
    readonly updatedAt: FieldRef<"tutor_profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tutor_profile findUnique
   */
  export type tutor_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * Filter, which tutor_profile to fetch.
     */
    where: tutor_profileWhereUniqueInput
  }

  /**
   * tutor_profile findUniqueOrThrow
   */
  export type tutor_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * Filter, which tutor_profile to fetch.
     */
    where: tutor_profileWhereUniqueInput
  }

  /**
   * tutor_profile findFirst
   */
  export type tutor_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * Filter, which tutor_profile to fetch.
     */
    where?: tutor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: tutor_profileOrderByWithRelationInput | tutor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutor_profiles.
     */
    cursor?: tutor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_profiles.
     */
    distinct?: Tutor_profileScalarFieldEnum | Tutor_profileScalarFieldEnum[]
  }

  /**
   * tutor_profile findFirstOrThrow
   */
  export type tutor_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * Filter, which tutor_profile to fetch.
     */
    where?: tutor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: tutor_profileOrderByWithRelationInput | tutor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutor_profiles.
     */
    cursor?: tutor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_profiles.
     */
    distinct?: Tutor_profileScalarFieldEnum | Tutor_profileScalarFieldEnum[]
  }

  /**
   * tutor_profile findMany
   */
  export type tutor_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * Filter, which tutor_profiles to fetch.
     */
    where?: tutor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: tutor_profileOrderByWithRelationInput | tutor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tutor_profiles.
     */
    cursor?: tutor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_profiles.
     */
    distinct?: Tutor_profileScalarFieldEnum | Tutor_profileScalarFieldEnum[]
  }

  /**
   * tutor_profile create
   */
  export type tutor_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * The data needed to create a tutor_profile.
     */
    data: XOR<tutor_profileCreateInput, tutor_profileUncheckedCreateInput>
  }

  /**
   * tutor_profile createMany
   */
  export type tutor_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutor_profiles.
     */
    data: tutor_profileCreateManyInput | tutor_profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutor_profile createManyAndReturn
   */
  export type tutor_profileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * The data used to create many tutor_profiles.
     */
    data: tutor_profileCreateManyInput | tutor_profileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutor_profile update
   */
  export type tutor_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * The data needed to update a tutor_profile.
     */
    data: XOR<tutor_profileUpdateInput, tutor_profileUncheckedUpdateInput>
    /**
     * Choose, which tutor_profile to update.
     */
    where: tutor_profileWhereUniqueInput
  }

  /**
   * tutor_profile updateMany
   */
  export type tutor_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tutor_profiles.
     */
    data: XOR<tutor_profileUpdateManyMutationInput, tutor_profileUncheckedUpdateManyInput>
    /**
     * Filter which tutor_profiles to update
     */
    where?: tutor_profileWhereInput
    /**
     * Limit how many tutor_profiles to update.
     */
    limit?: number
  }

  /**
   * tutor_profile updateManyAndReturn
   */
  export type tutor_profileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * The data used to update tutor_profiles.
     */
    data: XOR<tutor_profileUpdateManyMutationInput, tutor_profileUncheckedUpdateManyInput>
    /**
     * Filter which tutor_profiles to update
     */
    where?: tutor_profileWhereInput
    /**
     * Limit how many tutor_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutor_profile upsert
   */
  export type tutor_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * The filter to search for the tutor_profile to update in case it exists.
     */
    where: tutor_profileWhereUniqueInput
    /**
     * In case the tutor_profile found by the `where` argument doesn't exist, create a new tutor_profile with this data.
     */
    create: XOR<tutor_profileCreateInput, tutor_profileUncheckedCreateInput>
    /**
     * In case the tutor_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tutor_profileUpdateInput, tutor_profileUncheckedUpdateInput>
  }

  /**
   * tutor_profile delete
   */
  export type tutor_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    /**
     * Filter which tutor_profile to delete.
     */
    where: tutor_profileWhereUniqueInput
  }

  /**
   * tutor_profile deleteMany
   */
  export type tutor_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_profiles to delete
     */
    where?: tutor_profileWhereInput
    /**
     * Limit how many tutor_profiles to delete.
     */
    limit?: number
  }

  /**
   * tutor_profile.availability_slot
   */
  export type tutor_profile$availability_slotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: availability_slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: availability_slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availability_slotInclude<ExtArgs> | null
    where?: availability_slotWhereInput
    orderBy?: availability_slotOrderByWithRelationInput | availability_slotOrderByWithRelationInput[]
    cursor?: availability_slotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Availability_slotScalarFieldEnum | Availability_slotScalarFieldEnum[]
  }

  /**
   * tutor_profile.booking
   */
  export type tutor_profile$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * tutor_profile.tutor_subject
   */
  export type tutor_profile$tutor_subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    where?: tutor_subjectWhereInput
    orderBy?: tutor_subjectOrderByWithRelationInput | tutor_subjectOrderByWithRelationInput[]
    cursor?: tutor_subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tutor_subjectScalarFieldEnum | Tutor_subjectScalarFieldEnum[]
  }

  /**
   * tutor_profile without action
   */
  export type tutor_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
  }


  /**
   * Model tutor_subject
   */

  export type AggregateTutor_subject = {
    _count: Tutor_subjectCountAggregateOutputType | null
    _min: Tutor_subjectMinAggregateOutputType | null
    _max: Tutor_subjectMaxAggregateOutputType | null
  }

  export type Tutor_subjectMinAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    subjectId: string | null
  }

  export type Tutor_subjectMaxAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    subjectId: string | null
  }

  export type Tutor_subjectCountAggregateOutputType = {
    id: number
    tutorProfileId: number
    subjectId: number
    _all: number
  }


  export type Tutor_subjectMinAggregateInputType = {
    id?: true
    tutorProfileId?: true
    subjectId?: true
  }

  export type Tutor_subjectMaxAggregateInputType = {
    id?: true
    tutorProfileId?: true
    subjectId?: true
  }

  export type Tutor_subjectCountAggregateInputType = {
    id?: true
    tutorProfileId?: true
    subjectId?: true
    _all?: true
  }

  export type Tutor_subjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_subject to aggregate.
     */
    where?: tutor_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: tutor_subjectOrderByWithRelationInput | tutor_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tutor_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tutor_subjects
    **/
    _count?: true | Tutor_subjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tutor_subjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tutor_subjectMaxAggregateInputType
  }

  export type GetTutor_subjectAggregateType<T extends Tutor_subjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor_subject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor_subject[P]>
      : GetScalarType<T[P], AggregateTutor_subject[P]>
  }




  export type tutor_subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutor_subjectWhereInput
    orderBy?: tutor_subjectOrderByWithAggregationInput | tutor_subjectOrderByWithAggregationInput[]
    by: Tutor_subjectScalarFieldEnum[] | Tutor_subjectScalarFieldEnum
    having?: tutor_subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tutor_subjectCountAggregateInputType | true
    _min?: Tutor_subjectMinAggregateInputType
    _max?: Tutor_subjectMaxAggregateInputType
  }

  export type Tutor_subjectGroupByOutputType = {
    id: string
    tutorProfileId: string
    subjectId: string
    _count: Tutor_subjectCountAggregateOutputType | null
    _min: Tutor_subjectMinAggregateOutputType | null
    _max: Tutor_subjectMaxAggregateOutputType | null
  }

  type GetTutor_subjectGroupByPayload<T extends tutor_subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tutor_subjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tutor_subjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tutor_subjectGroupByOutputType[P]>
            : GetScalarType<T[P], Tutor_subjectGroupByOutputType[P]>
        }
      >
    >


  export type tutor_subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    subjectId?: boolean
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_subject"]>

  export type tutor_subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    subjectId?: boolean
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_subject"]>

  export type tutor_subjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    subjectId?: boolean
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor_subject"]>

  export type tutor_subjectSelectScalar = {
    id?: boolean
    tutorProfileId?: boolean
    subjectId?: boolean
  }

  export type tutor_subjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorProfileId" | "subjectId", ExtArgs["result"]["tutor_subject"]>
  export type tutor_subjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }
  export type tutor_subjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }
  export type tutor_subjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    tutor_profile?: boolean | tutor_profileDefaultArgs<ExtArgs>
  }

  export type $tutor_subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tutor_subject"
    objects: {
      subject: Prisma.$subjectPayload<ExtArgs>
      tutor_profile: Prisma.$tutor_profilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tutorProfileId: string
      subjectId: string
    }, ExtArgs["result"]["tutor_subject"]>
    composites: {}
  }

  type tutor_subjectGetPayload<S extends boolean | null | undefined | tutor_subjectDefaultArgs> = $Result.GetResult<Prisma.$tutor_subjectPayload, S>

  type tutor_subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tutor_subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tutor_subjectCountAggregateInputType | true
    }

  export interface tutor_subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tutor_subject'], meta: { name: 'tutor_subject' } }
    /**
     * Find zero or one Tutor_subject that matches the filter.
     * @param {tutor_subjectFindUniqueArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutor_subjectFindUniqueArgs>(args: SelectSubset<T, tutor_subjectFindUniqueArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor_subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutor_subjectFindUniqueOrThrowArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutor_subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, tutor_subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor_subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectFindFirstArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutor_subjectFindFirstArgs>(args?: SelectSubset<T, tutor_subjectFindFirstArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor_subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectFindFirstOrThrowArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutor_subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, tutor_subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutor_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutor_subjects
     * const tutor_subjects = await prisma.tutor_subject.findMany()
     * 
     * // Get first 10 Tutor_subjects
     * const tutor_subjects = await prisma.tutor_subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutor_subjectWithIdOnly = await prisma.tutor_subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tutor_subjectFindManyArgs>(args?: SelectSubset<T, tutor_subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor_subject.
     * @param {tutor_subjectCreateArgs} args - Arguments to create a Tutor_subject.
     * @example
     * // Create one Tutor_subject
     * const Tutor_subject = await prisma.tutor_subject.create({
     *   data: {
     *     // ... data to create a Tutor_subject
     *   }
     * })
     * 
     */
    create<T extends tutor_subjectCreateArgs>(args: SelectSubset<T, tutor_subjectCreateArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutor_subjects.
     * @param {tutor_subjectCreateManyArgs} args - Arguments to create many Tutor_subjects.
     * @example
     * // Create many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tutor_subjectCreateManyArgs>(args?: SelectSubset<T, tutor_subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutor_subjects and returns the data saved in the database.
     * @param {tutor_subjectCreateManyAndReturnArgs} args - Arguments to create many Tutor_subjects.
     * @example
     * // Create many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutor_subjects and only return the `id`
     * const tutor_subjectWithIdOnly = await prisma.tutor_subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tutor_subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, tutor_subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutor_subject.
     * @param {tutor_subjectDeleteArgs} args - Arguments to delete one Tutor_subject.
     * @example
     * // Delete one Tutor_subject
     * const Tutor_subject = await prisma.tutor_subject.delete({
     *   where: {
     *     // ... filter to delete one Tutor_subject
     *   }
     * })
     * 
     */
    delete<T extends tutor_subjectDeleteArgs>(args: SelectSubset<T, tutor_subjectDeleteArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor_subject.
     * @param {tutor_subjectUpdateArgs} args - Arguments to update one Tutor_subject.
     * @example
     * // Update one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tutor_subjectUpdateArgs>(args: SelectSubset<T, tutor_subjectUpdateArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutor_subjects.
     * @param {tutor_subjectDeleteManyArgs} args - Arguments to filter Tutor_subjects to delete.
     * @example
     * // Delete a few Tutor_subjects
     * const { count } = await prisma.tutor_subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tutor_subjectDeleteManyArgs>(args?: SelectSubset<T, tutor_subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutor_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tutor_subjectUpdateManyArgs>(args: SelectSubset<T, tutor_subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutor_subjects and returns the data updated in the database.
     * @param {tutor_subjectUpdateManyAndReturnArgs} args - Arguments to update many Tutor_subjects.
     * @example
     * // Update many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutor_subjects and only return the `id`
     * const tutor_subjectWithIdOnly = await prisma.tutor_subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tutor_subjectUpdateManyAndReturnArgs>(args: SelectSubset<T, tutor_subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutor_subject.
     * @param {tutor_subjectUpsertArgs} args - Arguments to update or create a Tutor_subject.
     * @example
     * // Update or create a Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.upsert({
     *   create: {
     *     // ... data to create a Tutor_subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor_subject we want to update
     *   }
     * })
     */
    upsert<T extends tutor_subjectUpsertArgs>(args: SelectSubset<T, tutor_subjectUpsertArgs<ExtArgs>>): Prisma__tutor_subjectClient<$Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutor_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectCountArgs} args - Arguments to filter Tutor_subjects to count.
     * @example
     * // Count the number of Tutor_subjects
     * const count = await prisma.tutor_subject.count({
     *   where: {
     *     // ... the filter for the Tutor_subjects we want to count
     *   }
     * })
    **/
    count<T extends tutor_subjectCountArgs>(
      args?: Subset<T, tutor_subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tutor_subjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutor_subjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tutor_subjectAggregateArgs>(args: Subset<T, Tutor_subjectAggregateArgs>): Prisma.PrismaPromise<GetTutor_subjectAggregateType<T>>

    /**
     * Group by Tutor_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tutor_subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tutor_subjectGroupByArgs['orderBy'] }
        : { orderBy?: tutor_subjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tutor_subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutor_subjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tutor_subject model
   */
  readonly fields: tutor_subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tutor_subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tutor_subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutor_profile<T extends tutor_profileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tutor_profileDefaultArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tutor_subject model
   */
  interface tutor_subjectFieldRefs {
    readonly id: FieldRef<"tutor_subject", 'String'>
    readonly tutorProfileId: FieldRef<"tutor_subject", 'String'>
    readonly subjectId: FieldRef<"tutor_subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tutor_subject findUnique
   */
  export type tutor_subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * Filter, which tutor_subject to fetch.
     */
    where: tutor_subjectWhereUniqueInput
  }

  /**
   * tutor_subject findUniqueOrThrow
   */
  export type tutor_subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * Filter, which tutor_subject to fetch.
     */
    where: tutor_subjectWhereUniqueInput
  }

  /**
   * tutor_subject findFirst
   */
  export type tutor_subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * Filter, which tutor_subject to fetch.
     */
    where?: tutor_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: tutor_subjectOrderByWithRelationInput | tutor_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutor_subjects.
     */
    cursor?: tutor_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_subjects.
     */
    distinct?: Tutor_subjectScalarFieldEnum | Tutor_subjectScalarFieldEnum[]
  }

  /**
   * tutor_subject findFirstOrThrow
   */
  export type tutor_subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * Filter, which tutor_subject to fetch.
     */
    where?: tutor_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: tutor_subjectOrderByWithRelationInput | tutor_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutor_subjects.
     */
    cursor?: tutor_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_subjects.
     */
    distinct?: Tutor_subjectScalarFieldEnum | Tutor_subjectScalarFieldEnum[]
  }

  /**
   * tutor_subject findMany
   */
  export type tutor_subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * Filter, which tutor_subjects to fetch.
     */
    where?: tutor_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: tutor_subjectOrderByWithRelationInput | tutor_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tutor_subjects.
     */
    cursor?: tutor_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutor_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutor_subjects.
     */
    distinct?: Tutor_subjectScalarFieldEnum | Tutor_subjectScalarFieldEnum[]
  }

  /**
   * tutor_subject create
   */
  export type tutor_subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * The data needed to create a tutor_subject.
     */
    data: XOR<tutor_subjectCreateInput, tutor_subjectUncheckedCreateInput>
  }

  /**
   * tutor_subject createMany
   */
  export type tutor_subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutor_subjects.
     */
    data: tutor_subjectCreateManyInput | tutor_subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutor_subject createManyAndReturn
   */
  export type tutor_subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * The data used to create many tutor_subjects.
     */
    data: tutor_subjectCreateManyInput | tutor_subjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutor_subject update
   */
  export type tutor_subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * The data needed to update a tutor_subject.
     */
    data: XOR<tutor_subjectUpdateInput, tutor_subjectUncheckedUpdateInput>
    /**
     * Choose, which tutor_subject to update.
     */
    where: tutor_subjectWhereUniqueInput
  }

  /**
   * tutor_subject updateMany
   */
  export type tutor_subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tutor_subjects.
     */
    data: XOR<tutor_subjectUpdateManyMutationInput, tutor_subjectUncheckedUpdateManyInput>
    /**
     * Filter which tutor_subjects to update
     */
    where?: tutor_subjectWhereInput
    /**
     * Limit how many tutor_subjects to update.
     */
    limit?: number
  }

  /**
   * tutor_subject updateManyAndReturn
   */
  export type tutor_subjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * The data used to update tutor_subjects.
     */
    data: XOR<tutor_subjectUpdateManyMutationInput, tutor_subjectUncheckedUpdateManyInput>
    /**
     * Filter which tutor_subjects to update
     */
    where?: tutor_subjectWhereInput
    /**
     * Limit how many tutor_subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tutor_subject upsert
   */
  export type tutor_subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * The filter to search for the tutor_subject to update in case it exists.
     */
    where: tutor_subjectWhereUniqueInput
    /**
     * In case the tutor_subject found by the `where` argument doesn't exist, create a new tutor_subject with this data.
     */
    create: XOR<tutor_subjectCreateInput, tutor_subjectUncheckedCreateInput>
    /**
     * In case the tutor_subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tutor_subjectUpdateInput, tutor_subjectUncheckedUpdateInput>
  }

  /**
   * tutor_subject delete
   */
  export type tutor_subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
    /**
     * Filter which tutor_subject to delete.
     */
    where: tutor_subjectWhereUniqueInput
  }

  /**
   * tutor_subject deleteMany
   */
  export type tutor_subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_subjects to delete
     */
    where?: tutor_subjectWhereInput
    /**
     * Limit how many tutor_subjects to delete.
     */
    limit?: number
  }

  /**
   * tutor_subject without action
   */
  export type tutor_subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: tutor_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: tutor_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_subjectInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    emailVerified: boolean | null
    address: string | null
    image: string | null
    coverImage: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    banReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    emailVerified: boolean | null
    address: string | null
    image: string | null
    coverImage: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    banReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    emailVerified: number
    address: number
    image: number
    coverImage: number
    role: number
    status: number
    banReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    emailVerified?: true
    address?: true
    image?: true
    coverImage?: true
    role?: true
    status?: true
    banReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    emailVerified?: true
    address?: true
    image?: true
    coverImage?: true
    role?: true
    status?: true
    banReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    emailVerified?: true
    address?: true
    image?: true
    coverImage?: true
    role?: true
    status?: true
    banReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    emailVerified: boolean
    address: string | null
    image: string | null
    coverImage: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    banReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    address?: boolean
    image?: boolean
    coverImage?: boolean
    role?: boolean
    status?: boolean
    banReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | user$accountArgs<ExtArgs>
    booking?: boolean | user$bookingArgs<ExtArgs>
    review?: boolean | user$reviewArgs<ExtArgs>
    session?: boolean | user$sessionArgs<ExtArgs>
    tutor_profile?: boolean | user$tutor_profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    address?: boolean
    image?: boolean
    coverImage?: boolean
    role?: boolean
    status?: boolean
    banReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    address?: boolean
    image?: boolean
    coverImage?: boolean
    role?: boolean
    status?: boolean
    banReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    address?: boolean
    image?: boolean
    coverImage?: boolean
    role?: boolean
    status?: boolean
    banReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "emailVerified" | "address" | "image" | "coverImage" | "role" | "status" | "banReason" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | user$accountArgs<ExtArgs>
    booking?: boolean | user$bookingArgs<ExtArgs>
    review?: boolean | user$reviewArgs<ExtArgs>
    session?: boolean | user$sessionArgs<ExtArgs>
    tutor_profile?: boolean | user$tutor_profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>[]
      booking: Prisma.$bookingPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
      session: Prisma.$sessionPayload<ExtArgs>[]
      tutor_profile: Prisma.$tutor_profilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      emailVerified: boolean
      address: string | null
      image: string | null
      coverImage: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      banReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends user$accountArgs<ExtArgs> = {}>(args?: Subset<T, user$accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends user$bookingArgs<ExtArgs> = {}>(args?: Subset<T, user$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends user$reviewArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends user$sessionArgs<ExtArgs> = {}>(args?: Subset<T, user$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutor_profile<T extends user$tutor_profileArgs<ExtArgs> = {}>(args?: Subset<T, user$tutor_profileArgs<ExtArgs>>): Prisma__tutor_profileClient<$Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly emailVerified: FieldRef<"user", 'Boolean'>
    readonly address: FieldRef<"user", 'String'>
    readonly image: FieldRef<"user", 'String'>
    readonly coverImage: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
    readonly status: FieldRef<"user", 'UserStatus'>
    readonly banReason: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.account
   */
  export type user$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    where?: accountWhereInput
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    cursor?: accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user.session
   */
  export type user$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    cursor?: sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * user.tutor_profile
   */
  export type user$tutor_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: tutor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: tutor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutor_profileInclude<ExtArgs> | null
    where?: tutor_profileWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verification to aggregate.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationWhereInput
    orderBy?: verificationOrderByWithAggregationInput | verificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type verificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type verificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type verificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type verificationGetPayload<S extends boolean | null | undefined | verificationDefaultArgs> = $Result.GetResult<Prisma.$verificationPayload, S>

  type verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verification'], meta: { name: 'verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {verificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificationFindUniqueArgs>(args: SelectSubset<T, verificationFindUniqueArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificationFindFirstArgs>(args?: SelectSubset<T, verificationFindFirstArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verificationFindManyArgs>(args?: SelectSubset<T, verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {verificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends verificationCreateArgs>(args: SelectSubset<T, verificationCreateArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {verificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificationCreateManyArgs>(args?: SelectSubset<T, verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {verificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verificationCreateManyAndReturnArgs>(args?: SelectSubset<T, verificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {verificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends verificationDeleteArgs>(args: SelectSubset<T, verificationDeleteArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {verificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificationUpdateArgs>(args: SelectSubset<T, verificationUpdateArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {verificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificationDeleteManyArgs>(args?: SelectSubset<T, verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificationUpdateManyArgs>(args: SelectSubset<T, verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {verificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends verificationUpdateManyAndReturnArgs>(args: SelectSubset<T, verificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {verificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends verificationUpsertArgs>(args: SelectSubset<T, verificationUpsertArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends verificationCountArgs>(
      args?: Subset<T, verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificationGroupByArgs['orderBy'] }
        : { orderBy?: verificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verification model
   */
  readonly fields: verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verification model
   */
  interface verificationFieldRefs {
    readonly id: FieldRef<"verification", 'String'>
    readonly identifier: FieldRef<"verification", 'String'>
    readonly value: FieldRef<"verification", 'String'>
    readonly expiresAt: FieldRef<"verification", 'DateTime'>
    readonly createdAt: FieldRef<"verification", 'DateTime'>
    readonly updatedAt: FieldRef<"verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verification findUnique
   */
  export type verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification findUniqueOrThrow
   */
  export type verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification findFirst
   */
  export type verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * verification findFirstOrThrow
   */
  export type verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * verification findMany
   */
  export type verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * verification create
   */
  export type verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The data needed to create a verification.
     */
    data: XOR<verificationCreateInput, verificationUncheckedCreateInput>
  }

  /**
   * verification createMany
   */
  export type verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verifications.
     */
    data: verificationCreateManyInput | verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification createManyAndReturn
   */
  export type verificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The data used to create many verifications.
     */
    data: verificationCreateManyInput | verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification update
   */
  export type verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The data needed to update a verification.
     */
    data: XOR<verificationUpdateInput, verificationUncheckedUpdateInput>
    /**
     * Choose, which verification to update.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification updateMany
   */
  export type verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verifications.
     */
    data: XOR<verificationUpdateManyMutationInput, verificationUncheckedUpdateManyInput>
    /**
     * Filter which verifications to update
     */
    where?: verificationWhereInput
    /**
     * Limit how many verifications to update.
     */
    limit?: number
  }

  /**
   * verification updateManyAndReturn
   */
  export type verificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The data used to update verifications.
     */
    data: XOR<verificationUpdateManyMutationInput, verificationUncheckedUpdateManyInput>
    /**
     * Filter which verifications to update
     */
    where?: verificationWhereInput
    /**
     * Limit how many verifications to update.
     */
    limit?: number
  }

  /**
   * verification upsert
   */
  export type verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The filter to search for the verification to update in case it exists.
     */
    where: verificationWhereUniqueInput
    /**
     * In case the verification found by the `where` argument doesn't exist, create a new verification with this data.
     */
    create: XOR<verificationCreateInput, verificationUncheckedCreateInput>
    /**
     * In case the verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationUpdateInput, verificationUncheckedUpdateInput>
  }

  /**
   * verification delete
   */
  export type verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter which verification to delete.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification deleteMany
   */
  export type verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verifications to delete
     */
    where?: verificationWhereInput
    /**
     * Limit how many verifications to delete.
     */
    limit?: number
  }

  /**
   * verification without action
   */
  export type verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
  }


  /**
   * Model knowledge_base
   */

  export type AggregateKnowledge_base = {
    _count: Knowledge_baseCountAggregateOutputType | null
    _min: Knowledge_baseMinAggregateOutputType | null
    _max: Knowledge_baseMaxAggregateOutputType | null
  }

  export type Knowledge_baseMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Knowledge_baseMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Knowledge_baseCountAggregateOutputType = {
    id: number
    content: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Knowledge_baseMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Knowledge_baseMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Knowledge_baseCountAggregateInputType = {
    id?: true
    content?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Knowledge_baseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which knowledge_base to aggregate.
     */
    where?: knowledge_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_bases to fetch.
     */
    orderBy?: knowledge_baseOrderByWithRelationInput | knowledge_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: knowledge_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned knowledge_bases
    **/
    _count?: true | Knowledge_baseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Knowledge_baseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Knowledge_baseMaxAggregateInputType
  }

  export type GetKnowledge_baseAggregateType<T extends Knowledge_baseAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledge_base]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledge_base[P]>
      : GetScalarType<T[P], AggregateKnowledge_base[P]>
  }




  export type knowledge_baseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: knowledge_baseWhereInput
    orderBy?: knowledge_baseOrderByWithAggregationInput | knowledge_baseOrderByWithAggregationInput[]
    by: Knowledge_baseScalarFieldEnum[] | Knowledge_baseScalarFieldEnum
    having?: knowledge_baseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Knowledge_baseCountAggregateInputType | true
    _min?: Knowledge_baseMinAggregateInputType
    _max?: Knowledge_baseMaxAggregateInputType
  }

  export type Knowledge_baseGroupByOutputType = {
    id: string
    content: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: Knowledge_baseCountAggregateOutputType | null
    _min: Knowledge_baseMinAggregateOutputType | null
    _max: Knowledge_baseMaxAggregateOutputType | null
  }

  type GetKnowledge_baseGroupByPayload<T extends knowledge_baseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Knowledge_baseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Knowledge_baseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Knowledge_baseGroupByOutputType[P]>
            : GetScalarType<T[P], Knowledge_baseGroupByOutputType[P]>
        }
      >
    >


  export type knowledge_baseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledge_base"]>

  export type knowledge_baseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledge_base"]>

  export type knowledge_baseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledge_base"]>

  export type knowledge_baseSelectScalar = {
    id?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type knowledge_baseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["knowledge_base"]>

  export type $knowledge_basePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "knowledge_base"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledge_base"]>
    composites: {}
  }

  type knowledge_baseGetPayload<S extends boolean | null | undefined | knowledge_baseDefaultArgs> = $Result.GetResult<Prisma.$knowledge_basePayload, S>

  type knowledge_baseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<knowledge_baseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Knowledge_baseCountAggregateInputType | true
    }

  export interface knowledge_baseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['knowledge_base'], meta: { name: 'knowledge_base' } }
    /**
     * Find zero or one Knowledge_base that matches the filter.
     * @param {knowledge_baseFindUniqueArgs} args - Arguments to find a Knowledge_base
     * @example
     * // Get one Knowledge_base
     * const knowledge_base = await prisma.knowledge_base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends knowledge_baseFindUniqueArgs>(args: SelectSubset<T, knowledge_baseFindUniqueArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Knowledge_base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {knowledge_baseFindUniqueOrThrowArgs} args - Arguments to find a Knowledge_base
     * @example
     * // Get one Knowledge_base
     * const knowledge_base = await prisma.knowledge_base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends knowledge_baseFindUniqueOrThrowArgs>(args: SelectSubset<T, knowledge_baseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge_base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_baseFindFirstArgs} args - Arguments to find a Knowledge_base
     * @example
     * // Get one Knowledge_base
     * const knowledge_base = await prisma.knowledge_base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends knowledge_baseFindFirstArgs>(args?: SelectSubset<T, knowledge_baseFindFirstArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge_base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_baseFindFirstOrThrowArgs} args - Arguments to find a Knowledge_base
     * @example
     * // Get one Knowledge_base
     * const knowledge_base = await prisma.knowledge_base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends knowledge_baseFindFirstOrThrowArgs>(args?: SelectSubset<T, knowledge_baseFindFirstOrThrowArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Knowledge_bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_baseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Knowledge_bases
     * const knowledge_bases = await prisma.knowledge_base.findMany()
     * 
     * // Get first 10 Knowledge_bases
     * const knowledge_bases = await prisma.knowledge_base.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledge_baseWithIdOnly = await prisma.knowledge_base.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends knowledge_baseFindManyArgs>(args?: SelectSubset<T, knowledge_baseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Knowledge_base.
     * @param {knowledge_baseCreateArgs} args - Arguments to create a Knowledge_base.
     * @example
     * // Create one Knowledge_base
     * const Knowledge_base = await prisma.knowledge_base.create({
     *   data: {
     *     // ... data to create a Knowledge_base
     *   }
     * })
     * 
     */
    create<T extends knowledge_baseCreateArgs>(args: SelectSubset<T, knowledge_baseCreateArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Knowledge_bases.
     * @param {knowledge_baseCreateManyArgs} args - Arguments to create many Knowledge_bases.
     * @example
     * // Create many Knowledge_bases
     * const knowledge_base = await prisma.knowledge_base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends knowledge_baseCreateManyArgs>(args?: SelectSubset<T, knowledge_baseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Knowledge_bases and returns the data saved in the database.
     * @param {knowledge_baseCreateManyAndReturnArgs} args - Arguments to create many Knowledge_bases.
     * @example
     * // Create many Knowledge_bases
     * const knowledge_base = await prisma.knowledge_base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Knowledge_bases and only return the `id`
     * const knowledge_baseWithIdOnly = await prisma.knowledge_base.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends knowledge_baseCreateManyAndReturnArgs>(args?: SelectSubset<T, knowledge_baseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Knowledge_base.
     * @param {knowledge_baseDeleteArgs} args - Arguments to delete one Knowledge_base.
     * @example
     * // Delete one Knowledge_base
     * const Knowledge_base = await prisma.knowledge_base.delete({
     *   where: {
     *     // ... filter to delete one Knowledge_base
     *   }
     * })
     * 
     */
    delete<T extends knowledge_baseDeleteArgs>(args: SelectSubset<T, knowledge_baseDeleteArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Knowledge_base.
     * @param {knowledge_baseUpdateArgs} args - Arguments to update one Knowledge_base.
     * @example
     * // Update one Knowledge_base
     * const knowledge_base = await prisma.knowledge_base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends knowledge_baseUpdateArgs>(args: SelectSubset<T, knowledge_baseUpdateArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Knowledge_bases.
     * @param {knowledge_baseDeleteManyArgs} args - Arguments to filter Knowledge_bases to delete.
     * @example
     * // Delete a few Knowledge_bases
     * const { count } = await prisma.knowledge_base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends knowledge_baseDeleteManyArgs>(args?: SelectSubset<T, knowledge_baseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledge_bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_baseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Knowledge_bases
     * const knowledge_base = await prisma.knowledge_base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends knowledge_baseUpdateManyArgs>(args: SelectSubset<T, knowledge_baseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledge_bases and returns the data updated in the database.
     * @param {knowledge_baseUpdateManyAndReturnArgs} args - Arguments to update many Knowledge_bases.
     * @example
     * // Update many Knowledge_bases
     * const knowledge_base = await prisma.knowledge_base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Knowledge_bases and only return the `id`
     * const knowledge_baseWithIdOnly = await prisma.knowledge_base.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends knowledge_baseUpdateManyAndReturnArgs>(args: SelectSubset<T, knowledge_baseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Knowledge_base.
     * @param {knowledge_baseUpsertArgs} args - Arguments to update or create a Knowledge_base.
     * @example
     * // Update or create a Knowledge_base
     * const knowledge_base = await prisma.knowledge_base.upsert({
     *   create: {
     *     // ... data to create a Knowledge_base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Knowledge_base we want to update
     *   }
     * })
     */
    upsert<T extends knowledge_baseUpsertArgs>(args: SelectSubset<T, knowledge_baseUpsertArgs<ExtArgs>>): Prisma__knowledge_baseClient<$Result.GetResult<Prisma.$knowledge_basePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Knowledge_bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_baseCountArgs} args - Arguments to filter Knowledge_bases to count.
     * @example
     * // Count the number of Knowledge_bases
     * const count = await prisma.knowledge_base.count({
     *   where: {
     *     // ... the filter for the Knowledge_bases we want to count
     *   }
     * })
    **/
    count<T extends knowledge_baseCountArgs>(
      args?: Subset<T, knowledge_baseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Knowledge_baseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Knowledge_base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Knowledge_baseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Knowledge_baseAggregateArgs>(args: Subset<T, Knowledge_baseAggregateArgs>): Prisma.PrismaPromise<GetKnowledge_baseAggregateType<T>>

    /**
     * Group by Knowledge_base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_baseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends knowledge_baseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: knowledge_baseGroupByArgs['orderBy'] }
        : { orderBy?: knowledge_baseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, knowledge_baseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledge_baseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the knowledge_base model
   */
  readonly fields: knowledge_baseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for knowledge_base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__knowledge_baseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the knowledge_base model
   */
  interface knowledge_baseFieldRefs {
    readonly id: FieldRef<"knowledge_base", 'String'>
    readonly content: FieldRef<"knowledge_base", 'String'>
    readonly metadata: FieldRef<"knowledge_base", 'Json'>
    readonly createdAt: FieldRef<"knowledge_base", 'DateTime'>
    readonly updatedAt: FieldRef<"knowledge_base", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * knowledge_base findUnique
   */
  export type knowledge_baseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * Filter, which knowledge_base to fetch.
     */
    where: knowledge_baseWhereUniqueInput
  }

  /**
   * knowledge_base findUniqueOrThrow
   */
  export type knowledge_baseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * Filter, which knowledge_base to fetch.
     */
    where: knowledge_baseWhereUniqueInput
  }

  /**
   * knowledge_base findFirst
   */
  export type knowledge_baseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * Filter, which knowledge_base to fetch.
     */
    where?: knowledge_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_bases to fetch.
     */
    orderBy?: knowledge_baseOrderByWithRelationInput | knowledge_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for knowledge_bases.
     */
    cursor?: knowledge_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of knowledge_bases.
     */
    distinct?: Knowledge_baseScalarFieldEnum | Knowledge_baseScalarFieldEnum[]
  }

  /**
   * knowledge_base findFirstOrThrow
   */
  export type knowledge_baseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * Filter, which knowledge_base to fetch.
     */
    where?: knowledge_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_bases to fetch.
     */
    orderBy?: knowledge_baseOrderByWithRelationInput | knowledge_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for knowledge_bases.
     */
    cursor?: knowledge_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of knowledge_bases.
     */
    distinct?: Knowledge_baseScalarFieldEnum | Knowledge_baseScalarFieldEnum[]
  }

  /**
   * knowledge_base findMany
   */
  export type knowledge_baseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * Filter, which knowledge_bases to fetch.
     */
    where?: knowledge_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_bases to fetch.
     */
    orderBy?: knowledge_baseOrderByWithRelationInput | knowledge_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing knowledge_bases.
     */
    cursor?: knowledge_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of knowledge_bases.
     */
    distinct?: Knowledge_baseScalarFieldEnum | Knowledge_baseScalarFieldEnum[]
  }

  /**
   * knowledge_base create
   */
  export type knowledge_baseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * The data needed to create a knowledge_base.
     */
    data: XOR<knowledge_baseCreateInput, knowledge_baseUncheckedCreateInput>
  }

  /**
   * knowledge_base createMany
   */
  export type knowledge_baseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many knowledge_bases.
     */
    data: knowledge_baseCreateManyInput | knowledge_baseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * knowledge_base createManyAndReturn
   */
  export type knowledge_baseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * The data used to create many knowledge_bases.
     */
    data: knowledge_baseCreateManyInput | knowledge_baseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * knowledge_base update
   */
  export type knowledge_baseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * The data needed to update a knowledge_base.
     */
    data: XOR<knowledge_baseUpdateInput, knowledge_baseUncheckedUpdateInput>
    /**
     * Choose, which knowledge_base to update.
     */
    where: knowledge_baseWhereUniqueInput
  }

  /**
   * knowledge_base updateMany
   */
  export type knowledge_baseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update knowledge_bases.
     */
    data: XOR<knowledge_baseUpdateManyMutationInput, knowledge_baseUncheckedUpdateManyInput>
    /**
     * Filter which knowledge_bases to update
     */
    where?: knowledge_baseWhereInput
    /**
     * Limit how many knowledge_bases to update.
     */
    limit?: number
  }

  /**
   * knowledge_base updateManyAndReturn
   */
  export type knowledge_baseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * The data used to update knowledge_bases.
     */
    data: XOR<knowledge_baseUpdateManyMutationInput, knowledge_baseUncheckedUpdateManyInput>
    /**
     * Filter which knowledge_bases to update
     */
    where?: knowledge_baseWhereInput
    /**
     * Limit how many knowledge_bases to update.
     */
    limit?: number
  }

  /**
   * knowledge_base upsert
   */
  export type knowledge_baseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * The filter to search for the knowledge_base to update in case it exists.
     */
    where: knowledge_baseWhereUniqueInput
    /**
     * In case the knowledge_base found by the `where` argument doesn't exist, create a new knowledge_base with this data.
     */
    create: XOR<knowledge_baseCreateInput, knowledge_baseUncheckedCreateInput>
    /**
     * In case the knowledge_base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<knowledge_baseUpdateInput, knowledge_baseUncheckedUpdateInput>
  }

  /**
   * knowledge_base delete
   */
  export type knowledge_baseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
    /**
     * Filter which knowledge_base to delete.
     */
    where: knowledge_baseWhereUniqueInput
  }

  /**
   * knowledge_base deleteMany
   */
  export type knowledge_baseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which knowledge_bases to delete
     */
    where?: knowledge_baseWhereInput
    /**
     * Limit how many knowledge_bases to delete.
     */
    limit?: number
  }

  /**
   * knowledge_base without action
   */
  export type knowledge_baseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_base
     */
    select?: knowledge_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_base
     */
    omit?: knowledge_baseOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const Availability_slotScalarFieldEnum: {
    id: 'id',
    tutorProfileId: 'tutorProfileId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isRecurring: 'isRecurring',
    specificDate: 'specificDate',
    isBooked: 'isBooked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Availability_slotScalarFieldEnum = (typeof Availability_slotScalarFieldEnum)[keyof typeof Availability_slotScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    tutorProfileId: 'tutorProfileId',
    availabilitySlotId: 'availabilitySlotId',
    scheduledAt: 'scheduledAt',
    duration: 'duration',
    status: 'status',
    subject: 'subject',
    notes: 'notes',
    meetingLink: 'meetingLink',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    studentId: 'studentId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const Tutor_profileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    headline: 'headline',
    hourlyRate: 'hourlyRate',
    address: 'address',
    experience: 'experience',
    education: 'education',
    isAvailable: 'isAvailable',
    averageRating: 'averageRating',
    totalReviews: 'totalReviews',
    totalSessions: 'totalSessions',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    isFeatured: 'isFeatured',
    banner: 'banner',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Tutor_profileScalarFieldEnum = (typeof Tutor_profileScalarFieldEnum)[keyof typeof Tutor_profileScalarFieldEnum]


  export const Tutor_subjectScalarFieldEnum: {
    id: 'id',
    tutorProfileId: 'tutorProfileId',
    subjectId: 'subjectId'
  };

  export type Tutor_subjectScalarFieldEnum = (typeof Tutor_subjectScalarFieldEnum)[keyof typeof Tutor_subjectScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    emailVerified: 'emailVerified',
    address: 'address',
    image: 'image',
    coverImage: 'coverImage',
    role: 'role',
    status: 'status',
    banReason: 'banReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const Knowledge_baseScalarFieldEnum: {
    id: 'id',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Knowledge_baseScalarFieldEnum = (typeof Knowledge_baseScalarFieldEnum)[keyof typeof Knowledge_baseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CategoryStatus'
   */
  export type EnumCategoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryStatus'>
    


  /**
   * Reference to a field of type 'CategoryStatus[]'
   */
  export type ListEnumCategoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: StringFilter<"account"> | string
    accountId?: StringFilter<"account"> | string
    providerId?: StringFilter<"account"> | string
    userId?: StringFilter<"account"> | string
    accessToken?: StringNullableFilter<"account"> | string | null
    refreshToken?: StringNullableFilter<"account"> | string | null
    idToken?: StringNullableFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    scope?: StringNullableFilter<"account"> | string | null
    password?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    accountId?: StringFilter<"account"> | string
    providerId?: StringFilter<"account"> | string
    userId?: StringFilter<"account"> | string
    accessToken?: StringNullableFilter<"account"> | string | null
    refreshToken?: StringNullableFilter<"account"> | string | null
    idToken?: StringNullableFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    scope?: StringNullableFilter<"account"> | string | null
    password?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account"> | string
    accountId?: StringWithAggregatesFilter<"account"> | string
    providerId?: StringWithAggregatesFilter<"account"> | string
    userId?: StringWithAggregatesFilter<"account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"account"> | string | null
    password?: StringNullableWithAggregatesFilter<"account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
  }

  export type availability_slotWhereInput = {
    AND?: availability_slotWhereInput | availability_slotWhereInput[]
    OR?: availability_slotWhereInput[]
    NOT?: availability_slotWhereInput | availability_slotWhereInput[]
    id?: StringFilter<"availability_slot"> | string
    tutorProfileId?: StringFilter<"availability_slot"> | string
    dayOfWeek?: IntFilter<"availability_slot"> | number
    startTime?: StringFilter<"availability_slot"> | string
    endTime?: StringFilter<"availability_slot"> | string
    isRecurring?: BoolFilter<"availability_slot"> | boolean
    specificDate?: DateTimeNullableFilter<"availability_slot"> | Date | string | null
    isBooked?: BoolFilter<"availability_slot"> | boolean
    createdAt?: DateTimeFilter<"availability_slot"> | Date | string
    updatedAt?: DateTimeFilter<"availability_slot"> | Date | string
    tutor_profile?: XOR<Tutor_profileScalarRelationFilter, tutor_profileWhereInput>
    booking?: BookingListRelationFilter
  }

  export type availability_slotOrderByWithRelationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    specificDate?: SortOrderInput | SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutor_profile?: tutor_profileOrderByWithRelationInput
    booking?: bookingOrderByRelationAggregateInput
  }

  export type availability_slotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: availability_slotWhereInput | availability_slotWhereInput[]
    OR?: availability_slotWhereInput[]
    NOT?: availability_slotWhereInput | availability_slotWhereInput[]
    tutorProfileId?: StringFilter<"availability_slot"> | string
    dayOfWeek?: IntFilter<"availability_slot"> | number
    startTime?: StringFilter<"availability_slot"> | string
    endTime?: StringFilter<"availability_slot"> | string
    isRecurring?: BoolFilter<"availability_slot"> | boolean
    specificDate?: DateTimeNullableFilter<"availability_slot"> | Date | string | null
    isBooked?: BoolFilter<"availability_slot"> | boolean
    createdAt?: DateTimeFilter<"availability_slot"> | Date | string
    updatedAt?: DateTimeFilter<"availability_slot"> | Date | string
    tutor_profile?: XOR<Tutor_profileScalarRelationFilter, tutor_profileWhereInput>
    booking?: BookingListRelationFilter
  }, "id">

  export type availability_slotOrderByWithAggregationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    specificDate?: SortOrderInput | SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: availability_slotCountOrderByAggregateInput
    _avg?: availability_slotAvgOrderByAggregateInput
    _max?: availability_slotMaxOrderByAggregateInput
    _min?: availability_slotMinOrderByAggregateInput
    _sum?: availability_slotSumOrderByAggregateInput
  }

  export type availability_slotScalarWhereWithAggregatesInput = {
    AND?: availability_slotScalarWhereWithAggregatesInput | availability_slotScalarWhereWithAggregatesInput[]
    OR?: availability_slotScalarWhereWithAggregatesInput[]
    NOT?: availability_slotScalarWhereWithAggregatesInput | availability_slotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"availability_slot"> | string
    tutorProfileId?: StringWithAggregatesFilter<"availability_slot"> | string
    dayOfWeek?: IntWithAggregatesFilter<"availability_slot"> | number
    startTime?: StringWithAggregatesFilter<"availability_slot"> | string
    endTime?: StringWithAggregatesFilter<"availability_slot"> | string
    isRecurring?: BoolWithAggregatesFilter<"availability_slot"> | boolean
    specificDate?: DateTimeNullableWithAggregatesFilter<"availability_slot"> | Date | string | null
    isBooked?: BoolWithAggregatesFilter<"availability_slot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"availability_slot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"availability_slot"> | Date | string
  }

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    id?: StringFilter<"booking"> | string
    studentId?: StringFilter<"booking"> | string
    tutorProfileId?: StringFilter<"booking"> | string
    availabilitySlotId?: StringNullableFilter<"booking"> | string | null
    scheduledAt?: DateTimeFilter<"booking"> | Date | string
    duration?: IntFilter<"booking"> | number
    status?: EnumBookingStatusFilter<"booking"> | $Enums.BookingStatus
    subject?: StringNullableFilter<"booking"> | string | null
    notes?: StringNullableFilter<"booking"> | string | null
    meetingLink?: StringNullableFilter<"booking"> | string | null
    price?: FloatFilter<"booking"> | number
    createdAt?: DateTimeFilter<"booking"> | Date | string
    updatedAt?: DateTimeFilter<"booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tutor_profile?: XOR<Tutor_profileScalarRelationFilter, tutor_profileWhereInput>
    availability_slot?: XOR<Availability_slotNullableScalarRelationFilter, availability_slotWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, reviewWhereInput> | null
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    availabilitySlotId?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    meetingLink?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    tutor_profile?: tutor_profileOrderByWithRelationInput
    availability_slot?: availability_slotOrderByWithRelationInput
    review?: reviewOrderByWithRelationInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    studentId?: StringFilter<"booking"> | string
    tutorProfileId?: StringFilter<"booking"> | string
    availabilitySlotId?: StringNullableFilter<"booking"> | string | null
    scheduledAt?: DateTimeFilter<"booking"> | Date | string
    duration?: IntFilter<"booking"> | number
    status?: EnumBookingStatusFilter<"booking"> | $Enums.BookingStatus
    subject?: StringNullableFilter<"booking"> | string | null
    notes?: StringNullableFilter<"booking"> | string | null
    meetingLink?: StringNullableFilter<"booking"> | string | null
    price?: FloatFilter<"booking"> | number
    createdAt?: DateTimeFilter<"booking"> | Date | string
    updatedAt?: DateTimeFilter<"booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tutor_profile?: XOR<Tutor_profileScalarRelationFilter, tutor_profileWhereInput>
    availability_slot?: XOR<Availability_slotNullableScalarRelationFilter, availability_slotWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, reviewWhereInput> | null
  }, "id">

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    availabilitySlotId?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    meetingLink?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: bookingCountOrderByAggregateInput
    _avg?: bookingAvgOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
    _sum?: bookingSumOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"booking"> | string
    studentId?: StringWithAggregatesFilter<"booking"> | string
    tutorProfileId?: StringWithAggregatesFilter<"booking"> | string
    availabilitySlotId?: StringNullableWithAggregatesFilter<"booking"> | string | null
    scheduledAt?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    duration?: IntWithAggregatesFilter<"booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"booking"> | $Enums.BookingStatus
    subject?: StringNullableWithAggregatesFilter<"booking"> | string | null
    notes?: StringNullableWithAggregatesFilter<"booking"> | string | null
    meetingLink?: StringNullableWithAggregatesFilter<"booking"> | string | null
    price?: FloatWithAggregatesFilter<"booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"booking"> | Date | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: StringFilter<"category"> | string
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    status?: EnumCategoryStatusFilter<"category"> | $Enums.CategoryStatus
    createdAt?: DateTimeFilter<"category"> | Date | string
    updatedAt?: DateTimeFilter<"category"> | Date | string
    subject?: SubjectListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: subjectOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    description?: StringNullableFilter<"category"> | string | null
    status?: EnumCategoryStatusFilter<"category"> | $Enums.CategoryStatus
    createdAt?: DateTimeFilter<"category"> | Date | string
    updatedAt?: DateTimeFilter<"category"> | Date | string
    subject?: SubjectListRelationFilter
  }, "id" | "name">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category"> | string
    name?: StringWithAggregatesFilter<"category"> | string
    description?: StringNullableWithAggregatesFilter<"category"> | string | null
    status?: EnumCategoryStatusWithAggregatesFilter<"category"> | $Enums.CategoryStatus
    createdAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: StringFilter<"review"> | string
    bookingId?: StringFilter<"review"> | string
    studentId?: StringFilter<"review"> | string
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    createdAt?: DateTimeFilter<"review"> | Date | string
    updatedAt?: DateTimeFilter<"review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, bookingWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: bookingOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    studentId?: StringFilter<"review"> | string
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    createdAt?: DateTimeFilter<"review"> | Date | string
    updatedAt?: DateTimeFilter<"review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, bookingWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "bookingId">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"review"> | string
    bookingId?: StringWithAggregatesFilter<"review"> | string
    studentId?: StringWithAggregatesFilter<"review"> | string
    rating?: IntWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"review"> | Date | string
  }

  export type sessionWhereInput = {
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    id?: StringFilter<"session"> | string
    expiresAt?: DateTimeFilter<"session"> | Date | string
    token?: StringFilter<"session"> | string
    ipAddress?: StringNullableFilter<"session"> | string | null
    userAgent?: StringNullableFilter<"session"> | string | null
    userId?: StringFilter<"session"> | string
    createdAt?: DateTimeFilter<"session"> | Date | string
    updatedAt?: DateTimeFilter<"session"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type sessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    expiresAt?: DateTimeFilter<"session"> | Date | string
    ipAddress?: StringNullableFilter<"session"> | string | null
    userAgent?: StringNullableFilter<"session"> | string | null
    userId?: StringFilter<"session"> | string
    createdAt?: DateTimeFilter<"session"> | Date | string
    updatedAt?: DateTimeFilter<"session"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "token">

  export type sessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sessionCountOrderByAggregateInput
    _max?: sessionMaxOrderByAggregateInput
    _min?: sessionMinOrderByAggregateInput
  }

  export type sessionScalarWhereWithAggregatesInput = {
    AND?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    OR?: sessionScalarWhereWithAggregatesInput[]
    NOT?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"session"> | Date | string
    token?: StringWithAggregatesFilter<"session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"session"> | string | null
    userId?: StringWithAggregatesFilter<"session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"session"> | Date | string
  }

  export type subjectWhereInput = {
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    id?: StringFilter<"subject"> | string
    name?: StringFilter<"subject"> | string
    categoryId?: StringFilter<"subject"> | string
    createdAt?: DateTimeFilter<"subject"> | Date | string
    updatedAt?: DateTimeFilter<"subject"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    tutor_subject?: Tutor_subjectListRelationFilter
  }

  export type subjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: categoryOrderByWithRelationInput
    tutor_subject?: tutor_subjectOrderByRelationAggregateInput
  }

  export type subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_categoryId?: subjectNameCategoryIdCompoundUniqueInput
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    name?: StringFilter<"subject"> | string
    categoryId?: StringFilter<"subject"> | string
    createdAt?: DateTimeFilter<"subject"> | Date | string
    updatedAt?: DateTimeFilter<"subject"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    tutor_subject?: Tutor_subjectListRelationFilter
  }, "id" | "name_categoryId">

  export type subjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: subjectCountOrderByAggregateInput
    _max?: subjectMaxOrderByAggregateInput
    _min?: subjectMinOrderByAggregateInput
  }

  export type subjectScalarWhereWithAggregatesInput = {
    AND?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    OR?: subjectScalarWhereWithAggregatesInput[]
    NOT?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"subject"> | string
    name?: StringWithAggregatesFilter<"subject"> | string
    categoryId?: StringWithAggregatesFilter<"subject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"subject"> | Date | string
  }

  export type tutor_profileWhereInput = {
    AND?: tutor_profileWhereInput | tutor_profileWhereInput[]
    OR?: tutor_profileWhereInput[]
    NOT?: tutor_profileWhereInput | tutor_profileWhereInput[]
    id?: StringFilter<"tutor_profile"> | string
    userId?: StringFilter<"tutor_profile"> | string
    bio?: StringNullableFilter<"tutor_profile"> | string | null
    headline?: StringNullableFilter<"tutor_profile"> | string | null
    hourlyRate?: FloatFilter<"tutor_profile"> | number
    address?: StringNullableFilter<"tutor_profile"> | string | null
    experience?: IntFilter<"tutor_profile"> | number
    education?: StringNullableFilter<"tutor_profile"> | string | null
    isAvailable?: BoolFilter<"tutor_profile"> | boolean
    averageRating?: FloatFilter<"tutor_profile"> | number
    totalReviews?: IntFilter<"tutor_profile"> | number
    totalSessions?: IntFilter<"tutor_profile"> | number
    isVerified?: BoolFilter<"tutor_profile"> | boolean
    verifiedAt?: DateTimeNullableFilter<"tutor_profile"> | Date | string | null
    isFeatured?: BoolFilter<"tutor_profile"> | boolean
    banner?: StringNullableFilter<"tutor_profile"> | string | null
    createdAt?: DateTimeFilter<"tutor_profile"> | Date | string
    updatedAt?: DateTimeFilter<"tutor_profile"> | Date | string
    availability_slot?: Availability_slotListRelationFilter
    booking?: BookingListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tutor_subject?: Tutor_subjectListRelationFilter
  }

  export type tutor_profileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    headline?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    address?: SortOrderInput | SortOrder
    experience?: SortOrder
    education?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    banner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availability_slot?: availability_slotOrderByRelationAggregateInput
    booking?: bookingOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    tutor_subject?: tutor_subjectOrderByRelationAggregateInput
  }

  export type tutor_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: tutor_profileWhereInput | tutor_profileWhereInput[]
    OR?: tutor_profileWhereInput[]
    NOT?: tutor_profileWhereInput | tutor_profileWhereInput[]
    bio?: StringNullableFilter<"tutor_profile"> | string | null
    headline?: StringNullableFilter<"tutor_profile"> | string | null
    hourlyRate?: FloatFilter<"tutor_profile"> | number
    address?: StringNullableFilter<"tutor_profile"> | string | null
    experience?: IntFilter<"tutor_profile"> | number
    education?: StringNullableFilter<"tutor_profile"> | string | null
    isAvailable?: BoolFilter<"tutor_profile"> | boolean
    averageRating?: FloatFilter<"tutor_profile"> | number
    totalReviews?: IntFilter<"tutor_profile"> | number
    totalSessions?: IntFilter<"tutor_profile"> | number
    isVerified?: BoolFilter<"tutor_profile"> | boolean
    verifiedAt?: DateTimeNullableFilter<"tutor_profile"> | Date | string | null
    isFeatured?: BoolFilter<"tutor_profile"> | boolean
    banner?: StringNullableFilter<"tutor_profile"> | string | null
    createdAt?: DateTimeFilter<"tutor_profile"> | Date | string
    updatedAt?: DateTimeFilter<"tutor_profile"> | Date | string
    availability_slot?: Availability_slotListRelationFilter
    booking?: BookingListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tutor_subject?: Tutor_subjectListRelationFilter
  }, "id" | "userId">

  export type tutor_profileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    headline?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    address?: SortOrderInput | SortOrder
    experience?: SortOrder
    education?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    banner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tutor_profileCountOrderByAggregateInput
    _avg?: tutor_profileAvgOrderByAggregateInput
    _max?: tutor_profileMaxOrderByAggregateInput
    _min?: tutor_profileMinOrderByAggregateInput
    _sum?: tutor_profileSumOrderByAggregateInput
  }

  export type tutor_profileScalarWhereWithAggregatesInput = {
    AND?: tutor_profileScalarWhereWithAggregatesInput | tutor_profileScalarWhereWithAggregatesInput[]
    OR?: tutor_profileScalarWhereWithAggregatesInput[]
    NOT?: tutor_profileScalarWhereWithAggregatesInput | tutor_profileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tutor_profile"> | string
    userId?: StringWithAggregatesFilter<"tutor_profile"> | string
    bio?: StringNullableWithAggregatesFilter<"tutor_profile"> | string | null
    headline?: StringNullableWithAggregatesFilter<"tutor_profile"> | string | null
    hourlyRate?: FloatWithAggregatesFilter<"tutor_profile"> | number
    address?: StringNullableWithAggregatesFilter<"tutor_profile"> | string | null
    experience?: IntWithAggregatesFilter<"tutor_profile"> | number
    education?: StringNullableWithAggregatesFilter<"tutor_profile"> | string | null
    isAvailable?: BoolWithAggregatesFilter<"tutor_profile"> | boolean
    averageRating?: FloatWithAggregatesFilter<"tutor_profile"> | number
    totalReviews?: IntWithAggregatesFilter<"tutor_profile"> | number
    totalSessions?: IntWithAggregatesFilter<"tutor_profile"> | number
    isVerified?: BoolWithAggregatesFilter<"tutor_profile"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"tutor_profile"> | Date | string | null
    isFeatured?: BoolWithAggregatesFilter<"tutor_profile"> | boolean
    banner?: StringNullableWithAggregatesFilter<"tutor_profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"tutor_profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tutor_profile"> | Date | string
  }

  export type tutor_subjectWhereInput = {
    AND?: tutor_subjectWhereInput | tutor_subjectWhereInput[]
    OR?: tutor_subjectWhereInput[]
    NOT?: tutor_subjectWhereInput | tutor_subjectWhereInput[]
    id?: StringFilter<"tutor_subject"> | string
    tutorProfileId?: StringFilter<"tutor_subject"> | string
    subjectId?: StringFilter<"tutor_subject"> | string
    subject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
    tutor_profile?: XOR<Tutor_profileScalarRelationFilter, tutor_profileWhereInput>
  }

  export type tutor_subjectOrderByWithRelationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    subjectId?: SortOrder
    subject?: subjectOrderByWithRelationInput
    tutor_profile?: tutor_profileOrderByWithRelationInput
  }

  export type tutor_subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tutorProfileId_subjectId?: tutor_subjectTutorProfileIdSubjectIdCompoundUniqueInput
    AND?: tutor_subjectWhereInput | tutor_subjectWhereInput[]
    OR?: tutor_subjectWhereInput[]
    NOT?: tutor_subjectWhereInput | tutor_subjectWhereInput[]
    tutorProfileId?: StringFilter<"tutor_subject"> | string
    subjectId?: StringFilter<"tutor_subject"> | string
    subject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
    tutor_profile?: XOR<Tutor_profileScalarRelationFilter, tutor_profileWhereInput>
  }, "id" | "tutorProfileId_subjectId">

  export type tutor_subjectOrderByWithAggregationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    subjectId?: SortOrder
    _count?: tutor_subjectCountOrderByAggregateInput
    _max?: tutor_subjectMaxOrderByAggregateInput
    _min?: tutor_subjectMinOrderByAggregateInput
  }

  export type tutor_subjectScalarWhereWithAggregatesInput = {
    AND?: tutor_subjectScalarWhereWithAggregatesInput | tutor_subjectScalarWhereWithAggregatesInput[]
    OR?: tutor_subjectScalarWhereWithAggregatesInput[]
    NOT?: tutor_subjectScalarWhereWithAggregatesInput | tutor_subjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tutor_subject"> | string
    tutorProfileId?: StringWithAggregatesFilter<"tutor_subject"> | string
    subjectId?: StringWithAggregatesFilter<"tutor_subject"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    emailVerified?: BoolFilter<"user"> | boolean
    address?: StringNullableFilter<"user"> | string | null
    image?: StringNullableFilter<"user"> | string | null
    coverImage?: StringNullableFilter<"user"> | string | null
    role?: EnumRoleFilter<"user"> | $Enums.Role
    status?: EnumUserStatusFilter<"user"> | $Enums.UserStatus
    banReason?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    account?: AccountListRelationFilter
    booking?: BookingListRelationFilter
    review?: ReviewListRelationFilter
    session?: SessionListRelationFilter
    tutor_profile?: XOR<Tutor_profileNullableScalarRelationFilter, tutor_profileWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    address?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    banReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: accountOrderByRelationAggregateInput
    booking?: bookingOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    session?: sessionOrderByRelationAggregateInput
    tutor_profile?: tutor_profileOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    emailVerified?: BoolFilter<"user"> | boolean
    address?: StringNullableFilter<"user"> | string | null
    image?: StringNullableFilter<"user"> | string | null
    coverImage?: StringNullableFilter<"user"> | string | null
    role?: EnumRoleFilter<"user"> | $Enums.Role
    status?: EnumUserStatusFilter<"user"> | $Enums.UserStatus
    banReason?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    account?: AccountListRelationFilter
    booking?: BookingListRelationFilter
    review?: ReviewListRelationFilter
    session?: SessionListRelationFilter
    tutor_profile?: XOR<Tutor_profileNullableScalarRelationFilter, tutor_profileWhereInput> | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    address?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    banReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    phone?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    emailVerified?: BoolWithAggregatesFilter<"user"> | boolean
    address?: StringNullableWithAggregatesFilter<"user"> | string | null
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"user"> | $Enums.UserStatus
    banReason?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type verificationWhereInput = {
    AND?: verificationWhereInput | verificationWhereInput[]
    OR?: verificationWhereInput[]
    NOT?: verificationWhereInput | verificationWhereInput[]
    id?: StringFilter<"verification"> | string
    identifier?: StringFilter<"verification"> | string
    value?: StringFilter<"verification"> | string
    expiresAt?: DateTimeFilter<"verification"> | Date | string
    createdAt?: DateTimeFilter<"verification"> | Date | string
    updatedAt?: DateTimeFilter<"verification"> | Date | string
  }

  export type verificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: verificationWhereInput | verificationWhereInput[]
    OR?: verificationWhereInput[]
    NOT?: verificationWhereInput | verificationWhereInput[]
    identifier?: StringFilter<"verification"> | string
    value?: StringFilter<"verification"> | string
    expiresAt?: DateTimeFilter<"verification"> | Date | string
    createdAt?: DateTimeFilter<"verification"> | Date | string
    updatedAt?: DateTimeFilter<"verification"> | Date | string
  }, "id">

  export type verificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: verificationCountOrderByAggregateInput
    _max?: verificationMaxOrderByAggregateInput
    _min?: verificationMinOrderByAggregateInput
  }

  export type verificationScalarWhereWithAggregatesInput = {
    AND?: verificationScalarWhereWithAggregatesInput | verificationScalarWhereWithAggregatesInput[]
    OR?: verificationScalarWhereWithAggregatesInput[]
    NOT?: verificationScalarWhereWithAggregatesInput | verificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"verification"> | string
    identifier?: StringWithAggregatesFilter<"verification"> | string
    value?: StringWithAggregatesFilter<"verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"verification"> | Date | string
  }

  export type knowledge_baseWhereInput = {
    AND?: knowledge_baseWhereInput | knowledge_baseWhereInput[]
    OR?: knowledge_baseWhereInput[]
    NOT?: knowledge_baseWhereInput | knowledge_baseWhereInput[]
    id?: StringFilter<"knowledge_base"> | string
    content?: StringFilter<"knowledge_base"> | string
    metadata?: JsonNullableFilter<"knowledge_base">
    createdAt?: DateTimeFilter<"knowledge_base"> | Date | string
    updatedAt?: DateTimeFilter<"knowledge_base"> | Date | string
  }

  export type knowledge_baseOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type knowledge_baseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: knowledge_baseWhereInput | knowledge_baseWhereInput[]
    OR?: knowledge_baseWhereInput[]
    NOT?: knowledge_baseWhereInput | knowledge_baseWhereInput[]
    content?: StringFilter<"knowledge_base"> | string
    metadata?: JsonNullableFilter<"knowledge_base">
    createdAt?: DateTimeFilter<"knowledge_base"> | Date | string
    updatedAt?: DateTimeFilter<"knowledge_base"> | Date | string
  }, "id">

  export type knowledge_baseOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: knowledge_baseCountOrderByAggregateInput
    _max?: knowledge_baseMaxOrderByAggregateInput
    _min?: knowledge_baseMinOrderByAggregateInput
  }

  export type knowledge_baseScalarWhereWithAggregatesInput = {
    AND?: knowledge_baseScalarWhereWithAggregatesInput | knowledge_baseScalarWhereWithAggregatesInput[]
    OR?: knowledge_baseScalarWhereWithAggregatesInput[]
    NOT?: knowledge_baseScalarWhereWithAggregatesInput | knowledge_baseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"knowledge_base"> | string
    content?: StringWithAggregatesFilter<"knowledge_base"> | string
    metadata?: JsonNullableWithAggregatesFilter<"knowledge_base">
    createdAt?: DateTimeWithAggregatesFilter<"knowledge_base"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"knowledge_base"> | Date | string
  }

  export type accountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutAccountInput
  }

  export type accountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availability_slotCreateInput = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor_profile: tutor_profileCreateNestedOneWithoutAvailability_slotInput
    booking?: bookingCreateNestedManyWithoutAvailability_slotInput
  }

  export type availability_slotUncheckedCreateInput = {
    id: string
    tutorProfileId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutAvailability_slotInput
  }

  export type availability_slotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutAvailability_slotNestedInput
    booking?: bookingUpdateManyWithoutAvailability_slotNestedInput
  }

  export type availability_slotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutAvailability_slotNestedInput
  }

  export type availability_slotCreateManyInput = {
    id: string
    tutorProfileId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availability_slotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availability_slotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateInput = {
    id: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutBookingInput
    tutor_profile: tutor_profileCreateNestedOneWithoutBookingInput
    availability_slot?: availability_slotCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    id: string
    studentId: string
    tutorProfileId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingNestedInput
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutBookingNestedInput
    availability_slot?: availability_slotUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type bookingCreateManyInput = {
    id: string
    studentId: string
    tutorProfileId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: subjectCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: subjectUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: subjectUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: subjectUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateInput = {
    id: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: bookingCreateNestedOneWithoutReviewInput
    user: userCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id: string
    bookingId: string
    studentId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
    user?: userUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateManyInput = {
    id: string
    bookingId: string
    studentId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutSessionInput
  }

  export type sessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutSessionNestedInput
  }

  export type sessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: categoryCreateNestedOneWithoutSubjectInput
    tutor_subject?: tutor_subjectCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateInput = {
    id: string
    name: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor_subject?: tutor_subjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutSubjectNestedInput
    tutor_subject?: tutor_subjectUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor_subject?: tutor_subjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectCreateManyInput = {
    id: string
    name: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type subjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_profileCreateInput = {
    id: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotCreateNestedManyWithoutTutor_profileInput
    booking?: bookingCreateNestedManyWithoutTutor_profileInput
    user: userCreateNestedOneWithoutTutor_profileInput
    tutor_subject?: tutor_subjectCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileUncheckedCreateInput = {
    id: string
    userId: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput
    booking?: bookingUncheckedCreateNestedManyWithoutTutor_profileInput
    tutor_subject?: tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUpdateManyWithoutTutor_profileNestedInput
    booking?: bookingUpdateManyWithoutTutor_profileNestedInput
    user?: userUpdateOneRequiredWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUpdateManyWithoutTutor_profileNestedInput
  }

  export type tutor_profileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput
    booking?: bookingUncheckedUpdateManyWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput
  }

  export type tutor_profileCreateManyInput = {
    id: string
    userId: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tutor_profileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_profileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_subjectCreateInput = {
    id: string
    subject: subjectCreateNestedOneWithoutTutor_subjectInput
    tutor_profile: tutor_profileCreateNestedOneWithoutTutor_subjectInput
  }

  export type tutor_subjectUncheckedCreateInput = {
    id: string
    tutorProfileId: string
    subjectId: string
  }

  export type tutor_subjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: subjectUpdateOneRequiredWithoutTutor_subjectNestedInput
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutTutor_subjectNestedInput
  }

  export type tutor_subjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type tutor_subjectCreateManyInput = {
    id: string
    tutorProfileId: string
    subjectId: string
  }

  export type tutor_subjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type tutor_subjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_baseCreateInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type knowledge_baseUncheckedCreateInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type knowledge_baseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_baseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_baseCreateManyInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type knowledge_baseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_baseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Tutor_profileScalarRelationFilter = {
    is?: tutor_profileWhereInput
    isNot?: tutor_profileWhereInput
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type availability_slotCountOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    specificDate?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availability_slotAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type availability_slotMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    specificDate?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availability_slotMinOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    specificDate?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availability_slotSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Availability_slotNullableScalarRelationFilter = {
    is?: availability_slotWhereInput | null
    isNot?: availability_slotWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: reviewWhereInput | null
    isNot?: reviewWhereInput | null
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    notes?: SortOrder
    meetingLink?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingAvgOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    notes?: SortOrder
    meetingLink?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    notes?: SortOrder
    meetingLink?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingSumOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCategoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusFilter<$PrismaModel> | $Enums.CategoryStatus
  }

  export type SubjectListRelationFilter = {
    every?: subjectWhereInput
    some?: subjectWhereInput
    none?: subjectWhereInput
  }

  export type subjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CategoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryStatusFilter<$PrismaModel>
    _max?: NestedEnumCategoryStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: bookingWhereInput
    isNot?: bookingWhereInput
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type sessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type Tutor_subjectListRelationFilter = {
    every?: tutor_subjectWhereInput
    some?: tutor_subjectWhereInput
    none?: tutor_subjectWhereInput
  }

  export type tutor_subjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subjectNameCategoryIdCompoundUniqueInput = {
    name: string
    categoryId: string
  }

  export type subjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Availability_slotListRelationFilter = {
    every?: availability_slotWhereInput
    some?: availability_slotWhereInput
    none?: availability_slotWhereInput
  }

  export type availability_slotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tutor_profileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    headline?: SortOrder
    hourlyRate?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    isAvailable?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    isFeatured?: SortOrder
    banner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tutor_profileAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
    experience?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
  }

  export type tutor_profileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    headline?: SortOrder
    hourlyRate?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    isAvailable?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    isFeatured?: SortOrder
    banner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tutor_profileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    headline?: SortOrder
    hourlyRate?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    isAvailable?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    isFeatured?: SortOrder
    banner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tutor_profileSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
    experience?: SortOrder
    averageRating?: SortOrder
    totalReviews?: SortOrder
    totalSessions?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: subjectWhereInput
    isNot?: subjectWhereInput
  }

  export type tutor_subjectTutorProfileIdSubjectIdCompoundUniqueInput = {
    tutorProfileId: string
    subjectId: string
  }

  export type tutor_subjectCountOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    subjectId?: SortOrder
  }

  export type tutor_subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    subjectId?: SortOrder
  }

  export type tutor_subjectMinOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    subjectId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type AccountListRelationFilter = {
    every?: accountWhereInput
    some?: accountWhereInput
    none?: accountWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type SessionListRelationFilter = {
    every?: sessionWhereInput
    some?: sessionWhereInput
    none?: sessionWhereInput
  }

  export type Tutor_profileNullableScalarRelationFilter = {
    is?: tutor_profileWhereInput | null
    isNot?: tutor_profileWhereInput | null
  }

  export type accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    address?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    role?: SortOrder
    status?: SortOrder
    banReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    address?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    role?: SortOrder
    status?: SortOrder
    banReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    address?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    role?: SortOrder
    status?: SortOrder
    banReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type verificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type knowledge_baseCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type knowledge_baseMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type knowledge_baseMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutAccountInput = {
    create?: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
    connectOrCreate?: userCreateOrConnectWithoutAccountInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
    connectOrCreate?: userCreateOrConnectWithoutAccountInput
    upsert?: userUpsertWithoutAccountInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAccountInput, userUpdateWithoutAccountInput>, userUncheckedUpdateWithoutAccountInput>
  }

  export type tutor_profileCreateNestedOneWithoutAvailability_slotInput = {
    create?: XOR<tutor_profileCreateWithoutAvailability_slotInput, tutor_profileUncheckedCreateWithoutAvailability_slotInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutAvailability_slotInput
    connect?: tutor_profileWhereUniqueInput
  }

  export type bookingCreateNestedManyWithoutAvailability_slotInput = {
    create?: XOR<bookingCreateWithoutAvailability_slotInput, bookingUncheckedCreateWithoutAvailability_slotInput> | bookingCreateWithoutAvailability_slotInput[] | bookingUncheckedCreateWithoutAvailability_slotInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutAvailability_slotInput | bookingCreateOrConnectWithoutAvailability_slotInput[]
    createMany?: bookingCreateManyAvailability_slotInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutAvailability_slotInput = {
    create?: XOR<bookingCreateWithoutAvailability_slotInput, bookingUncheckedCreateWithoutAvailability_slotInput> | bookingCreateWithoutAvailability_slotInput[] | bookingUncheckedCreateWithoutAvailability_slotInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutAvailability_slotInput | bookingCreateOrConnectWithoutAvailability_slotInput[]
    createMany?: bookingCreateManyAvailability_slotInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type tutor_profileUpdateOneRequiredWithoutAvailability_slotNestedInput = {
    create?: XOR<tutor_profileCreateWithoutAvailability_slotInput, tutor_profileUncheckedCreateWithoutAvailability_slotInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutAvailability_slotInput
    upsert?: tutor_profileUpsertWithoutAvailability_slotInput
    connect?: tutor_profileWhereUniqueInput
    update?: XOR<XOR<tutor_profileUpdateToOneWithWhereWithoutAvailability_slotInput, tutor_profileUpdateWithoutAvailability_slotInput>, tutor_profileUncheckedUpdateWithoutAvailability_slotInput>
  }

  export type bookingUpdateManyWithoutAvailability_slotNestedInput = {
    create?: XOR<bookingCreateWithoutAvailability_slotInput, bookingUncheckedCreateWithoutAvailability_slotInput> | bookingCreateWithoutAvailability_slotInput[] | bookingUncheckedCreateWithoutAvailability_slotInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutAvailability_slotInput | bookingCreateOrConnectWithoutAvailability_slotInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutAvailability_slotInput | bookingUpsertWithWhereUniqueWithoutAvailability_slotInput[]
    createMany?: bookingCreateManyAvailability_slotInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutAvailability_slotInput | bookingUpdateWithWhereUniqueWithoutAvailability_slotInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutAvailability_slotInput | bookingUpdateManyWithWhereWithoutAvailability_slotInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutAvailability_slotNestedInput = {
    create?: XOR<bookingCreateWithoutAvailability_slotInput, bookingUncheckedCreateWithoutAvailability_slotInput> | bookingCreateWithoutAvailability_slotInput[] | bookingUncheckedCreateWithoutAvailability_slotInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutAvailability_slotInput | bookingCreateOrConnectWithoutAvailability_slotInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutAvailability_slotInput | bookingUpsertWithWhereUniqueWithoutAvailability_slotInput[]
    createMany?: bookingCreateManyAvailability_slotInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutAvailability_slotInput | bookingUpdateWithWhereUniqueWithoutAvailability_slotInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutAvailability_slotInput | bookingUpdateManyWithWhereWithoutAvailability_slotInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingInput
    connect?: userWhereUniqueInput
  }

  export type tutor_profileCreateNestedOneWithoutBookingInput = {
    create?: XOR<tutor_profileCreateWithoutBookingInput, tutor_profileUncheckedCreateWithoutBookingInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutBookingInput
    connect?: tutor_profileWhereUniqueInput
  }

  export type availability_slotCreateNestedOneWithoutBookingInput = {
    create?: XOR<availability_slotCreateWithoutBookingInput, availability_slotUncheckedCreateWithoutBookingInput>
    connectOrCreate?: availability_slotCreateOrConnectWithoutBookingInput
    connect?: availability_slotWhereUniqueInput
  }

  export type reviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput
    connect?: reviewWhereUniqueInput
  }

  export type reviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput
    connect?: reviewWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingInput
    upsert?: userUpsertWithoutBookingInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>, userUncheckedUpdateWithoutBookingInput>
  }

  export type tutor_profileUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<tutor_profileCreateWithoutBookingInput, tutor_profileUncheckedCreateWithoutBookingInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutBookingInput
    upsert?: tutor_profileUpsertWithoutBookingInput
    connect?: tutor_profileWhereUniqueInput
    update?: XOR<XOR<tutor_profileUpdateToOneWithWhereWithoutBookingInput, tutor_profileUpdateWithoutBookingInput>, tutor_profileUncheckedUpdateWithoutBookingInput>
  }

  export type availability_slotUpdateOneWithoutBookingNestedInput = {
    create?: XOR<availability_slotCreateWithoutBookingInput, availability_slotUncheckedCreateWithoutBookingInput>
    connectOrCreate?: availability_slotCreateOrConnectWithoutBookingInput
    upsert?: availability_slotUpsertWithoutBookingInput
    disconnect?: availability_slotWhereInput | boolean
    delete?: availability_slotWhereInput | boolean
    connect?: availability_slotWhereUniqueInput
    update?: XOR<XOR<availability_slotUpdateToOneWithWhereWithoutBookingInput, availability_slotUpdateWithoutBookingInput>, availability_slotUncheckedUpdateWithoutBookingInput>
  }

  export type reviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput
    upsert?: reviewUpsertWithoutBookingInput
    disconnect?: reviewWhereInput | boolean
    delete?: reviewWhereInput | boolean
    connect?: reviewWhereUniqueInput
    update?: XOR<XOR<reviewUpdateToOneWithWhereWithoutBookingInput, reviewUpdateWithoutBookingInput>, reviewUncheckedUpdateWithoutBookingInput>
  }

  export type reviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput
    upsert?: reviewUpsertWithoutBookingInput
    disconnect?: reviewWhereInput | boolean
    delete?: reviewWhereInput | boolean
    connect?: reviewWhereUniqueInput
    update?: XOR<XOR<reviewUpdateToOneWithWhereWithoutBookingInput, reviewUpdateWithoutBookingInput>, reviewUncheckedUpdateWithoutBookingInput>
  }

  export type subjectCreateNestedManyWithoutCategoryInput = {
    create?: XOR<subjectCreateWithoutCategoryInput, subjectUncheckedCreateWithoutCategoryInput> | subjectCreateWithoutCategoryInput[] | subjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCategoryInput | subjectCreateOrConnectWithoutCategoryInput[]
    createMany?: subjectCreateManyCategoryInputEnvelope
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
  }

  export type subjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<subjectCreateWithoutCategoryInput, subjectUncheckedCreateWithoutCategoryInput> | subjectCreateWithoutCategoryInput[] | subjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCategoryInput | subjectCreateOrConnectWithoutCategoryInput[]
    createMany?: subjectCreateManyCategoryInputEnvelope
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
  }

  export type EnumCategoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.CategoryStatus
  }

  export type subjectUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<subjectCreateWithoutCategoryInput, subjectUncheckedCreateWithoutCategoryInput> | subjectCreateWithoutCategoryInput[] | subjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCategoryInput | subjectCreateOrConnectWithoutCategoryInput[]
    upsert?: subjectUpsertWithWhereUniqueWithoutCategoryInput | subjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: subjectCreateManyCategoryInputEnvelope
    set?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    disconnect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    delete?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    update?: subjectUpdateWithWhereUniqueWithoutCategoryInput | subjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: subjectUpdateManyWithWhereWithoutCategoryInput | subjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: subjectScalarWhereInput | subjectScalarWhereInput[]
  }

  export type subjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<subjectCreateWithoutCategoryInput, subjectUncheckedCreateWithoutCategoryInput> | subjectCreateWithoutCategoryInput[] | subjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCategoryInput | subjectCreateOrConnectWithoutCategoryInput[]
    upsert?: subjectUpsertWithWhereUniqueWithoutCategoryInput | subjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: subjectCreateManyCategoryInputEnvelope
    set?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    disconnect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    delete?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    update?: subjectUpdateWithWhereUniqueWithoutCategoryInput | subjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: subjectUpdateManyWithWhereWithoutCategoryInput | subjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: subjectScalarWhereInput | subjectScalarWhereInput[]
  }

  export type bookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookingCreateOrConnectWithoutReviewInput
    connect?: bookingWhereUniqueInput
  }

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    connect?: userWhereUniqueInput
  }

  export type bookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookingCreateOrConnectWithoutReviewInput
    upsert?: bookingUpsertWithoutReviewInput
    connect?: bookingWhereUniqueInput
    update?: XOR<XOR<bookingUpdateToOneWithWhereWithoutReviewInput, bookingUpdateWithoutReviewInput>, bookingUncheckedUpdateWithoutReviewInput>
  }

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    upsert?: userUpsertWithoutReviewInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>, userUncheckedUpdateWithoutReviewInput>
  }

  export type userCreateNestedOneWithoutSessionInput = {
    create?: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
    connectOrCreate?: userCreateOrConnectWithoutSessionInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
    connectOrCreate?: userCreateOrConnectWithoutSessionInput
    upsert?: userUpsertWithoutSessionInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSessionInput, userUpdateWithoutSessionInput>, userUncheckedUpdateWithoutSessionInput>
  }

  export type categoryCreateNestedOneWithoutSubjectInput = {
    create?: XOR<categoryCreateWithoutSubjectInput, categoryUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: categoryCreateOrConnectWithoutSubjectInput
    connect?: categoryWhereUniqueInput
  }

  export type tutor_subjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<tutor_subjectCreateWithoutSubjectInput, tutor_subjectUncheckedCreateWithoutSubjectInput> | tutor_subjectCreateWithoutSubjectInput[] | tutor_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutSubjectInput | tutor_subjectCreateOrConnectWithoutSubjectInput[]
    createMany?: tutor_subjectCreateManySubjectInputEnvelope
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
  }

  export type tutor_subjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<tutor_subjectCreateWithoutSubjectInput, tutor_subjectUncheckedCreateWithoutSubjectInput> | tutor_subjectCreateWithoutSubjectInput[] | tutor_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutSubjectInput | tutor_subjectCreateOrConnectWithoutSubjectInput[]
    createMany?: tutor_subjectCreateManySubjectInputEnvelope
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
  }

  export type categoryUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<categoryCreateWithoutSubjectInput, categoryUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: categoryCreateOrConnectWithoutSubjectInput
    upsert?: categoryUpsertWithoutSubjectInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutSubjectInput, categoryUpdateWithoutSubjectInput>, categoryUncheckedUpdateWithoutSubjectInput>
  }

  export type tutor_subjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<tutor_subjectCreateWithoutSubjectInput, tutor_subjectUncheckedCreateWithoutSubjectInput> | tutor_subjectCreateWithoutSubjectInput[] | tutor_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutSubjectInput | tutor_subjectCreateOrConnectWithoutSubjectInput[]
    upsert?: tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput | tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: tutor_subjectCreateManySubjectInputEnvelope
    set?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    disconnect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    delete?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    update?: tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput | tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: tutor_subjectUpdateManyWithWhereWithoutSubjectInput | tutor_subjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: tutor_subjectScalarWhereInput | tutor_subjectScalarWhereInput[]
  }

  export type tutor_subjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<tutor_subjectCreateWithoutSubjectInput, tutor_subjectUncheckedCreateWithoutSubjectInput> | tutor_subjectCreateWithoutSubjectInput[] | tutor_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutSubjectInput | tutor_subjectCreateOrConnectWithoutSubjectInput[]
    upsert?: tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput | tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: tutor_subjectCreateManySubjectInputEnvelope
    set?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    disconnect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    delete?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    update?: tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput | tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: tutor_subjectUpdateManyWithWhereWithoutSubjectInput | tutor_subjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: tutor_subjectScalarWhereInput | tutor_subjectScalarWhereInput[]
  }

  export type availability_slotCreateNestedManyWithoutTutor_profileInput = {
    create?: XOR<availability_slotCreateWithoutTutor_profileInput, availability_slotUncheckedCreateWithoutTutor_profileInput> | availability_slotCreateWithoutTutor_profileInput[] | availability_slotUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: availability_slotCreateOrConnectWithoutTutor_profileInput | availability_slotCreateOrConnectWithoutTutor_profileInput[]
    createMany?: availability_slotCreateManyTutor_profileInputEnvelope
    connect?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
  }

  export type bookingCreateNestedManyWithoutTutor_profileInput = {
    create?: XOR<bookingCreateWithoutTutor_profileInput, bookingUncheckedCreateWithoutTutor_profileInput> | bookingCreateWithoutTutor_profileInput[] | bookingUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutTutor_profileInput | bookingCreateOrConnectWithoutTutor_profileInput[]
    createMany?: bookingCreateManyTutor_profileInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutTutor_profileInput = {
    create?: XOR<userCreateWithoutTutor_profileInput, userUncheckedCreateWithoutTutor_profileInput>
    connectOrCreate?: userCreateOrConnectWithoutTutor_profileInput
    connect?: userWhereUniqueInput
  }

  export type tutor_subjectCreateNestedManyWithoutTutor_profileInput = {
    create?: XOR<tutor_subjectCreateWithoutTutor_profileInput, tutor_subjectUncheckedCreateWithoutTutor_profileInput> | tutor_subjectCreateWithoutTutor_profileInput[] | tutor_subjectUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutTutor_profileInput | tutor_subjectCreateOrConnectWithoutTutor_profileInput[]
    createMany?: tutor_subjectCreateManyTutor_profileInputEnvelope
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
  }

  export type availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput = {
    create?: XOR<availability_slotCreateWithoutTutor_profileInput, availability_slotUncheckedCreateWithoutTutor_profileInput> | availability_slotCreateWithoutTutor_profileInput[] | availability_slotUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: availability_slotCreateOrConnectWithoutTutor_profileInput | availability_slotCreateOrConnectWithoutTutor_profileInput[]
    createMany?: availability_slotCreateManyTutor_profileInputEnvelope
    connect?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutTutor_profileInput = {
    create?: XOR<bookingCreateWithoutTutor_profileInput, bookingUncheckedCreateWithoutTutor_profileInput> | bookingCreateWithoutTutor_profileInput[] | bookingUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutTutor_profileInput | bookingCreateOrConnectWithoutTutor_profileInput[]
    createMany?: bookingCreateManyTutor_profileInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput = {
    create?: XOR<tutor_subjectCreateWithoutTutor_profileInput, tutor_subjectUncheckedCreateWithoutTutor_profileInput> | tutor_subjectCreateWithoutTutor_profileInput[] | tutor_subjectUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutTutor_profileInput | tutor_subjectCreateOrConnectWithoutTutor_profileInput[]
    createMany?: tutor_subjectCreateManyTutor_profileInputEnvelope
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
  }

  export type availability_slotUpdateManyWithoutTutor_profileNestedInput = {
    create?: XOR<availability_slotCreateWithoutTutor_profileInput, availability_slotUncheckedCreateWithoutTutor_profileInput> | availability_slotCreateWithoutTutor_profileInput[] | availability_slotUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: availability_slotCreateOrConnectWithoutTutor_profileInput | availability_slotCreateOrConnectWithoutTutor_profileInput[]
    upsert?: availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput | availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput[]
    createMany?: availability_slotCreateManyTutor_profileInputEnvelope
    set?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    disconnect?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    delete?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    connect?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    update?: availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput | availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput[]
    updateMany?: availability_slotUpdateManyWithWhereWithoutTutor_profileInput | availability_slotUpdateManyWithWhereWithoutTutor_profileInput[]
    deleteMany?: availability_slotScalarWhereInput | availability_slotScalarWhereInput[]
  }

  export type bookingUpdateManyWithoutTutor_profileNestedInput = {
    create?: XOR<bookingCreateWithoutTutor_profileInput, bookingUncheckedCreateWithoutTutor_profileInput> | bookingCreateWithoutTutor_profileInput[] | bookingUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutTutor_profileInput | bookingCreateOrConnectWithoutTutor_profileInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutTutor_profileInput | bookingUpsertWithWhereUniqueWithoutTutor_profileInput[]
    createMany?: bookingCreateManyTutor_profileInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutTutor_profileInput | bookingUpdateWithWhereUniqueWithoutTutor_profileInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutTutor_profileInput | bookingUpdateManyWithWhereWithoutTutor_profileInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutTutor_profileNestedInput = {
    create?: XOR<userCreateWithoutTutor_profileInput, userUncheckedCreateWithoutTutor_profileInput>
    connectOrCreate?: userCreateOrConnectWithoutTutor_profileInput
    upsert?: userUpsertWithoutTutor_profileInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTutor_profileInput, userUpdateWithoutTutor_profileInput>, userUncheckedUpdateWithoutTutor_profileInput>
  }

  export type tutor_subjectUpdateManyWithoutTutor_profileNestedInput = {
    create?: XOR<tutor_subjectCreateWithoutTutor_profileInput, tutor_subjectUncheckedCreateWithoutTutor_profileInput> | tutor_subjectCreateWithoutTutor_profileInput[] | tutor_subjectUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutTutor_profileInput | tutor_subjectCreateOrConnectWithoutTutor_profileInput[]
    upsert?: tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput | tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput[]
    createMany?: tutor_subjectCreateManyTutor_profileInputEnvelope
    set?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    disconnect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    delete?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    update?: tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput | tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput[]
    updateMany?: tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput | tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput[]
    deleteMany?: tutor_subjectScalarWhereInput | tutor_subjectScalarWhereInput[]
  }

  export type availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput = {
    create?: XOR<availability_slotCreateWithoutTutor_profileInput, availability_slotUncheckedCreateWithoutTutor_profileInput> | availability_slotCreateWithoutTutor_profileInput[] | availability_slotUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: availability_slotCreateOrConnectWithoutTutor_profileInput | availability_slotCreateOrConnectWithoutTutor_profileInput[]
    upsert?: availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput | availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput[]
    createMany?: availability_slotCreateManyTutor_profileInputEnvelope
    set?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    disconnect?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    delete?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    connect?: availability_slotWhereUniqueInput | availability_slotWhereUniqueInput[]
    update?: availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput | availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput[]
    updateMany?: availability_slotUpdateManyWithWhereWithoutTutor_profileInput | availability_slotUpdateManyWithWhereWithoutTutor_profileInput[]
    deleteMany?: availability_slotScalarWhereInput | availability_slotScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutTutor_profileNestedInput = {
    create?: XOR<bookingCreateWithoutTutor_profileInput, bookingUncheckedCreateWithoutTutor_profileInput> | bookingCreateWithoutTutor_profileInput[] | bookingUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutTutor_profileInput | bookingCreateOrConnectWithoutTutor_profileInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutTutor_profileInput | bookingUpsertWithWhereUniqueWithoutTutor_profileInput[]
    createMany?: bookingCreateManyTutor_profileInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutTutor_profileInput | bookingUpdateWithWhereUniqueWithoutTutor_profileInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutTutor_profileInput | bookingUpdateManyWithWhereWithoutTutor_profileInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput = {
    create?: XOR<tutor_subjectCreateWithoutTutor_profileInput, tutor_subjectUncheckedCreateWithoutTutor_profileInput> | tutor_subjectCreateWithoutTutor_profileInput[] | tutor_subjectUncheckedCreateWithoutTutor_profileInput[]
    connectOrCreate?: tutor_subjectCreateOrConnectWithoutTutor_profileInput | tutor_subjectCreateOrConnectWithoutTutor_profileInput[]
    upsert?: tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput | tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput[]
    createMany?: tutor_subjectCreateManyTutor_profileInputEnvelope
    set?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    disconnect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    delete?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    connect?: tutor_subjectWhereUniqueInput | tutor_subjectWhereUniqueInput[]
    update?: tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput | tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput[]
    updateMany?: tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput | tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput[]
    deleteMany?: tutor_subjectScalarWhereInput | tutor_subjectScalarWhereInput[]
  }

  export type subjectCreateNestedOneWithoutTutor_subjectInput = {
    create?: XOR<subjectCreateWithoutTutor_subjectInput, subjectUncheckedCreateWithoutTutor_subjectInput>
    connectOrCreate?: subjectCreateOrConnectWithoutTutor_subjectInput
    connect?: subjectWhereUniqueInput
  }

  export type tutor_profileCreateNestedOneWithoutTutor_subjectInput = {
    create?: XOR<tutor_profileCreateWithoutTutor_subjectInput, tutor_profileUncheckedCreateWithoutTutor_subjectInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutTutor_subjectInput
    connect?: tutor_profileWhereUniqueInput
  }

  export type subjectUpdateOneRequiredWithoutTutor_subjectNestedInput = {
    create?: XOR<subjectCreateWithoutTutor_subjectInput, subjectUncheckedCreateWithoutTutor_subjectInput>
    connectOrCreate?: subjectCreateOrConnectWithoutTutor_subjectInput
    upsert?: subjectUpsertWithoutTutor_subjectInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutTutor_subjectInput, subjectUpdateWithoutTutor_subjectInput>, subjectUncheckedUpdateWithoutTutor_subjectInput>
  }

  export type tutor_profileUpdateOneRequiredWithoutTutor_subjectNestedInput = {
    create?: XOR<tutor_profileCreateWithoutTutor_subjectInput, tutor_profileUncheckedCreateWithoutTutor_subjectInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutTutor_subjectInput
    upsert?: tutor_profileUpsertWithoutTutor_subjectInput
    connect?: tutor_profileWhereUniqueInput
    update?: XOR<XOR<tutor_profileUpdateToOneWithWhereWithoutTutor_subjectInput, tutor_profileUpdateWithoutTutor_subjectInput>, tutor_profileUncheckedUpdateWithoutTutor_subjectInput>
  }

  export type accountCreateNestedManyWithoutUserInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type bookingCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type sessionCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type tutor_profileCreateNestedOneWithoutUserInput = {
    create?: XOR<tutor_profileCreateWithoutUserInput, tutor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutUserInput
    connect?: tutor_profileWhereUniqueInput
  }

  export type accountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type sessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type tutor_profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<tutor_profileCreateWithoutUserInput, tutor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutUserInput
    connect?: tutor_profileWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type accountUpdateManyWithoutUserNestedInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutUserInput | accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutUserInput | accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: accountUpdateManyWithWhereWithoutUserInput | accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type sessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutUserInput | sessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutUserInput | sessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutUserInput | sessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type tutor_profileUpdateOneWithoutUserNestedInput = {
    create?: XOR<tutor_profileCreateWithoutUserInput, tutor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutUserInput
    upsert?: tutor_profileUpsertWithoutUserInput
    disconnect?: tutor_profileWhereInput | boolean
    delete?: tutor_profileWhereInput | boolean
    connect?: tutor_profileWhereUniqueInput
    update?: XOR<XOR<tutor_profileUpdateToOneWithWhereWithoutUserInput, tutor_profileUpdateWithoutUserInput>, tutor_profileUncheckedUpdateWithoutUserInput>
  }

  export type accountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutUserInput | accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutUserInput | accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: accountUpdateManyWithWhereWithoutUserInput | accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type sessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutUserInput | sessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutUserInput | sessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutUserInput | sessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type tutor_profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<tutor_profileCreateWithoutUserInput, tutor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: tutor_profileCreateOrConnectWithoutUserInput
    upsert?: tutor_profileUpsertWithoutUserInput
    disconnect?: tutor_profileWhereInput | boolean
    delete?: tutor_profileWhereInput | boolean
    connect?: tutor_profileWhereUniqueInput
    update?: XOR<XOR<tutor_profileUpdateToOneWithWhereWithoutUserInput, tutor_profileUpdateWithoutUserInput>, tutor_profileUncheckedUpdateWithoutUserInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCategoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusFilter<$PrismaModel> | $Enums.CategoryStatus
  }

  export type NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CategoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryStatusFilter<$PrismaModel>
    _max?: NestedEnumCategoryStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type userCreateWithoutAccountInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutAccountInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutAccountInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
  }

  export type userUpsertWithoutAccountInput = {
    update: XOR<userUpdateWithoutAccountInput, userUncheckedUpdateWithoutAccountInput>
    create: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAccountInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAccountInput, userUncheckedUpdateWithoutAccountInput>
  }

  export type userUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type tutor_profileCreateWithoutAvailability_slotInput = {
    id: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingCreateNestedManyWithoutTutor_profileInput
    user: userCreateNestedOneWithoutTutor_profileInput
    tutor_subject?: tutor_subjectCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileUncheckedCreateWithoutAvailability_slotInput = {
    id: string
    userId: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutTutor_profileInput
    tutor_subject?: tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileCreateOrConnectWithoutAvailability_slotInput = {
    where: tutor_profileWhereUniqueInput
    create: XOR<tutor_profileCreateWithoutAvailability_slotInput, tutor_profileUncheckedCreateWithoutAvailability_slotInput>
  }

  export type bookingCreateWithoutAvailability_slotInput = {
    id: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutBookingInput
    tutor_profile: tutor_profileCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutAvailability_slotInput = {
    id: string
    studentId: string
    tutorProfileId: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutAvailability_slotInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutAvailability_slotInput, bookingUncheckedCreateWithoutAvailability_slotInput>
  }

  export type bookingCreateManyAvailability_slotInputEnvelope = {
    data: bookingCreateManyAvailability_slotInput | bookingCreateManyAvailability_slotInput[]
    skipDuplicates?: boolean
  }

  export type tutor_profileUpsertWithoutAvailability_slotInput = {
    update: XOR<tutor_profileUpdateWithoutAvailability_slotInput, tutor_profileUncheckedUpdateWithoutAvailability_slotInput>
    create: XOR<tutor_profileCreateWithoutAvailability_slotInput, tutor_profileUncheckedCreateWithoutAvailability_slotInput>
    where?: tutor_profileWhereInput
  }

  export type tutor_profileUpdateToOneWithWhereWithoutAvailability_slotInput = {
    where?: tutor_profileWhereInput
    data: XOR<tutor_profileUpdateWithoutAvailability_slotInput, tutor_profileUncheckedUpdateWithoutAvailability_slotInput>
  }

  export type tutor_profileUpdateWithoutAvailability_slotInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutTutor_profileNestedInput
    user?: userUpdateOneRequiredWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUpdateManyWithoutTutor_profileNestedInput
  }

  export type tutor_profileUncheckedUpdateWithoutAvailability_slotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput
  }

  export type bookingUpsertWithWhereUniqueWithoutAvailability_slotInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutAvailability_slotInput, bookingUncheckedUpdateWithoutAvailability_slotInput>
    create: XOR<bookingCreateWithoutAvailability_slotInput, bookingUncheckedCreateWithoutAvailability_slotInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutAvailability_slotInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutAvailability_slotInput, bookingUncheckedUpdateWithoutAvailability_slotInput>
  }

  export type bookingUpdateManyWithWhereWithoutAvailability_slotInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutAvailability_slotInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    id?: StringFilter<"booking"> | string
    studentId?: StringFilter<"booking"> | string
    tutorProfileId?: StringFilter<"booking"> | string
    availabilitySlotId?: StringNullableFilter<"booking"> | string | null
    scheduledAt?: DateTimeFilter<"booking"> | Date | string
    duration?: IntFilter<"booking"> | number
    status?: EnumBookingStatusFilter<"booking"> | $Enums.BookingStatus
    subject?: StringNullableFilter<"booking"> | string | null
    notes?: StringNullableFilter<"booking"> | string | null
    meetingLink?: StringNullableFilter<"booking"> | string | null
    price?: FloatFilter<"booking"> | number
    createdAt?: DateTimeFilter<"booking"> | Date | string
    updatedAt?: DateTimeFilter<"booking"> | Date | string
  }

  export type userCreateWithoutBookingInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutBookingInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
  }

  export type tutor_profileCreateWithoutBookingInput = {
    id: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotCreateNestedManyWithoutTutor_profileInput
    user: userCreateNestedOneWithoutTutor_profileInput
    tutor_subject?: tutor_subjectCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileUncheckedCreateWithoutBookingInput = {
    id: string
    userId: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput
    tutor_subject?: tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileCreateOrConnectWithoutBookingInput = {
    where: tutor_profileWhereUniqueInput
    create: XOR<tutor_profileCreateWithoutBookingInput, tutor_profileUncheckedCreateWithoutBookingInput>
  }

  export type availability_slotCreateWithoutBookingInput = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor_profile: tutor_profileCreateNestedOneWithoutAvailability_slotInput
  }

  export type availability_slotUncheckedCreateWithoutBookingInput = {
    id: string
    tutorProfileId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availability_slotCreateOrConnectWithoutBookingInput = {
    where: availability_slotWhereUniqueInput
    create: XOR<availability_slotCreateWithoutBookingInput, availability_slotUncheckedCreateWithoutBookingInput>
  }

  export type reviewCreateWithoutBookingInput = {
    id: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutBookingInput = {
    id: string
    studentId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutBookingInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
  }

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>
  }

  export type userUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type tutor_profileUpsertWithoutBookingInput = {
    update: XOR<tutor_profileUpdateWithoutBookingInput, tutor_profileUncheckedUpdateWithoutBookingInput>
    create: XOR<tutor_profileCreateWithoutBookingInput, tutor_profileUncheckedCreateWithoutBookingInput>
    where?: tutor_profileWhereInput
  }

  export type tutor_profileUpdateToOneWithWhereWithoutBookingInput = {
    where?: tutor_profileWhereInput
    data: XOR<tutor_profileUpdateWithoutBookingInput, tutor_profileUncheckedUpdateWithoutBookingInput>
  }

  export type tutor_profileUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUpdateManyWithoutTutor_profileNestedInput
    user?: userUpdateOneRequiredWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUpdateManyWithoutTutor_profileNestedInput
  }

  export type tutor_profileUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput
  }

  export type availability_slotUpsertWithoutBookingInput = {
    update: XOR<availability_slotUpdateWithoutBookingInput, availability_slotUncheckedUpdateWithoutBookingInput>
    create: XOR<availability_slotCreateWithoutBookingInput, availability_slotUncheckedCreateWithoutBookingInput>
    where?: availability_slotWhereInput
  }

  export type availability_slotUpdateToOneWithWhereWithoutBookingInput = {
    where?: availability_slotWhereInput
    data: XOR<availability_slotUpdateWithoutBookingInput, availability_slotUncheckedUpdateWithoutBookingInput>
  }

  export type availability_slotUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutAvailability_slotNestedInput
  }

  export type availability_slotUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUpsertWithoutBookingInput = {
    update: XOR<reviewUpdateWithoutBookingInput, reviewUncheckedUpdateWithoutBookingInput>
    create: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
    where?: reviewWhereInput
  }

  export type reviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: reviewWhereInput
    data: XOR<reviewUpdateWithoutBookingInput, reviewUncheckedUpdateWithoutBookingInput>
  }

  export type reviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectCreateWithoutCategoryInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor_subject?: tutor_subjectCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutCategoryInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor_subject?: tutor_subjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutCategoryInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutCategoryInput, subjectUncheckedCreateWithoutCategoryInput>
  }

  export type subjectCreateManyCategoryInputEnvelope = {
    data: subjectCreateManyCategoryInput | subjectCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type subjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: subjectWhereUniqueInput
    update: XOR<subjectUpdateWithoutCategoryInput, subjectUncheckedUpdateWithoutCategoryInput>
    create: XOR<subjectCreateWithoutCategoryInput, subjectUncheckedCreateWithoutCategoryInput>
  }

  export type subjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: subjectWhereUniqueInput
    data: XOR<subjectUpdateWithoutCategoryInput, subjectUncheckedUpdateWithoutCategoryInput>
  }

  export type subjectUpdateManyWithWhereWithoutCategoryInput = {
    where: subjectScalarWhereInput
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyWithoutCategoryInput>
  }

  export type subjectScalarWhereInput = {
    AND?: subjectScalarWhereInput | subjectScalarWhereInput[]
    OR?: subjectScalarWhereInput[]
    NOT?: subjectScalarWhereInput | subjectScalarWhereInput[]
    id?: StringFilter<"subject"> | string
    name?: StringFilter<"subject"> | string
    categoryId?: StringFilter<"subject"> | string
    createdAt?: DateTimeFilter<"subject"> | Date | string
    updatedAt?: DateTimeFilter<"subject"> | Date | string
  }

  export type bookingCreateWithoutReviewInput = {
    id: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutBookingInput
    tutor_profile: tutor_profileCreateNestedOneWithoutBookingInput
    availability_slot?: availability_slotCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutReviewInput = {
    id: string
    studentId: string
    tutorProfileId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingCreateOrConnectWithoutReviewInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
  }

  export type userCreateWithoutReviewInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutReviewInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
  }

  export type bookingUpsertWithoutReviewInput = {
    update: XOR<bookingUpdateWithoutReviewInput, bookingUncheckedUpdateWithoutReviewInput>
    create: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
    where?: bookingWhereInput
  }

  export type bookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: bookingWhereInput
    data: XOR<bookingUpdateWithoutReviewInput, bookingUncheckedUpdateWithoutReviewInput>
  }

  export type bookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingNestedInput
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutBookingNestedInput
    availability_slot?: availability_slotUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
  }

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutSessionInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutSessionInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    tutor_profile?: tutor_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutSessionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
  }

  export type userUpsertWithoutSessionInput = {
    update: XOR<userUpdateWithoutSessionInput, userUncheckedUpdateWithoutSessionInput>
    create: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSessionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSessionInput, userUncheckedUpdateWithoutSessionInput>
  }

  export type userUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    tutor_profile?: tutor_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type categoryCreateWithoutSubjectInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUncheckedCreateWithoutSubjectInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryCreateOrConnectWithoutSubjectInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutSubjectInput, categoryUncheckedCreateWithoutSubjectInput>
  }

  export type tutor_subjectCreateWithoutSubjectInput = {
    id: string
    tutor_profile: tutor_profileCreateNestedOneWithoutTutor_subjectInput
  }

  export type tutor_subjectUncheckedCreateWithoutSubjectInput = {
    id: string
    tutorProfileId: string
  }

  export type tutor_subjectCreateOrConnectWithoutSubjectInput = {
    where: tutor_subjectWhereUniqueInput
    create: XOR<tutor_subjectCreateWithoutSubjectInput, tutor_subjectUncheckedCreateWithoutSubjectInput>
  }

  export type tutor_subjectCreateManySubjectInputEnvelope = {
    data: tutor_subjectCreateManySubjectInput | tutor_subjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutSubjectInput = {
    update: XOR<categoryUpdateWithoutSubjectInput, categoryUncheckedUpdateWithoutSubjectInput>
    create: XOR<categoryCreateWithoutSubjectInput, categoryUncheckedCreateWithoutSubjectInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutSubjectInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutSubjectInput, categoryUncheckedUpdateWithoutSubjectInput>
  }

  export type categoryUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: tutor_subjectWhereUniqueInput
    update: XOR<tutor_subjectUpdateWithoutSubjectInput, tutor_subjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<tutor_subjectCreateWithoutSubjectInput, tutor_subjectUncheckedCreateWithoutSubjectInput>
  }

  export type tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: tutor_subjectWhereUniqueInput
    data: XOR<tutor_subjectUpdateWithoutSubjectInput, tutor_subjectUncheckedUpdateWithoutSubjectInput>
  }

  export type tutor_subjectUpdateManyWithWhereWithoutSubjectInput = {
    where: tutor_subjectScalarWhereInput
    data: XOR<tutor_subjectUpdateManyMutationInput, tutor_subjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type tutor_subjectScalarWhereInput = {
    AND?: tutor_subjectScalarWhereInput | tutor_subjectScalarWhereInput[]
    OR?: tutor_subjectScalarWhereInput[]
    NOT?: tutor_subjectScalarWhereInput | tutor_subjectScalarWhereInput[]
    id?: StringFilter<"tutor_subject"> | string
    tutorProfileId?: StringFilter<"tutor_subject"> | string
    subjectId?: StringFilter<"tutor_subject"> | string
  }

  export type availability_slotCreateWithoutTutor_profileInput = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingCreateNestedManyWithoutAvailability_slotInput
  }

  export type availability_slotUncheckedCreateWithoutTutor_profileInput = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutAvailability_slotInput
  }

  export type availability_slotCreateOrConnectWithoutTutor_profileInput = {
    where: availability_slotWhereUniqueInput
    create: XOR<availability_slotCreateWithoutTutor_profileInput, availability_slotUncheckedCreateWithoutTutor_profileInput>
  }

  export type availability_slotCreateManyTutor_profileInputEnvelope = {
    data: availability_slotCreateManyTutor_profileInput | availability_slotCreateManyTutor_profileInput[]
    skipDuplicates?: boolean
  }

  export type bookingCreateWithoutTutor_profileInput = {
    id: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutBookingInput
    availability_slot?: availability_slotCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutTutor_profileInput = {
    id: string
    studentId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutTutor_profileInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutTutor_profileInput, bookingUncheckedCreateWithoutTutor_profileInput>
  }

  export type bookingCreateManyTutor_profileInputEnvelope = {
    data: bookingCreateManyTutor_profileInput | bookingCreateManyTutor_profileInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutTutor_profileInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTutor_profileInput = {
    id: string
    name?: string
    phone?: string
    email: string
    emailVerified?: boolean
    address?: string | null
    image?: string | null
    coverImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    banReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTutor_profileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTutor_profileInput, userUncheckedCreateWithoutTutor_profileInput>
  }

  export type tutor_subjectCreateWithoutTutor_profileInput = {
    id: string
    subject: subjectCreateNestedOneWithoutTutor_subjectInput
  }

  export type tutor_subjectUncheckedCreateWithoutTutor_profileInput = {
    id: string
    subjectId: string
  }

  export type tutor_subjectCreateOrConnectWithoutTutor_profileInput = {
    where: tutor_subjectWhereUniqueInput
    create: XOR<tutor_subjectCreateWithoutTutor_profileInput, tutor_subjectUncheckedCreateWithoutTutor_profileInput>
  }

  export type tutor_subjectCreateManyTutor_profileInputEnvelope = {
    data: tutor_subjectCreateManyTutor_profileInput | tutor_subjectCreateManyTutor_profileInput[]
    skipDuplicates?: boolean
  }

  export type availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput = {
    where: availability_slotWhereUniqueInput
    update: XOR<availability_slotUpdateWithoutTutor_profileInput, availability_slotUncheckedUpdateWithoutTutor_profileInput>
    create: XOR<availability_slotCreateWithoutTutor_profileInput, availability_slotUncheckedCreateWithoutTutor_profileInput>
  }

  export type availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput = {
    where: availability_slotWhereUniqueInput
    data: XOR<availability_slotUpdateWithoutTutor_profileInput, availability_slotUncheckedUpdateWithoutTutor_profileInput>
  }

  export type availability_slotUpdateManyWithWhereWithoutTutor_profileInput = {
    where: availability_slotScalarWhereInput
    data: XOR<availability_slotUpdateManyMutationInput, availability_slotUncheckedUpdateManyWithoutTutor_profileInput>
  }

  export type availability_slotScalarWhereInput = {
    AND?: availability_slotScalarWhereInput | availability_slotScalarWhereInput[]
    OR?: availability_slotScalarWhereInput[]
    NOT?: availability_slotScalarWhereInput | availability_slotScalarWhereInput[]
    id?: StringFilter<"availability_slot"> | string
    tutorProfileId?: StringFilter<"availability_slot"> | string
    dayOfWeek?: IntFilter<"availability_slot"> | number
    startTime?: StringFilter<"availability_slot"> | string
    endTime?: StringFilter<"availability_slot"> | string
    isRecurring?: BoolFilter<"availability_slot"> | boolean
    specificDate?: DateTimeNullableFilter<"availability_slot"> | Date | string | null
    isBooked?: BoolFilter<"availability_slot"> | boolean
    createdAt?: DateTimeFilter<"availability_slot"> | Date | string
    updatedAt?: DateTimeFilter<"availability_slot"> | Date | string
  }

  export type bookingUpsertWithWhereUniqueWithoutTutor_profileInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutTutor_profileInput, bookingUncheckedUpdateWithoutTutor_profileInput>
    create: XOR<bookingCreateWithoutTutor_profileInput, bookingUncheckedCreateWithoutTutor_profileInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutTutor_profileInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutTutor_profileInput, bookingUncheckedUpdateWithoutTutor_profileInput>
  }

  export type bookingUpdateManyWithWhereWithoutTutor_profileInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutTutor_profileInput>
  }

  export type userUpsertWithoutTutor_profileInput = {
    update: XOR<userUpdateWithoutTutor_profileInput, userUncheckedUpdateWithoutTutor_profileInput>
    create: XOR<userCreateWithoutTutor_profileInput, userUncheckedCreateWithoutTutor_profileInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTutor_profileInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTutor_profileInput, userUncheckedUpdateWithoutTutor_profileInput>
  }

  export type userUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput = {
    where: tutor_subjectWhereUniqueInput
    update: XOR<tutor_subjectUpdateWithoutTutor_profileInput, tutor_subjectUncheckedUpdateWithoutTutor_profileInput>
    create: XOR<tutor_subjectCreateWithoutTutor_profileInput, tutor_subjectUncheckedCreateWithoutTutor_profileInput>
  }

  export type tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput = {
    where: tutor_subjectWhereUniqueInput
    data: XOR<tutor_subjectUpdateWithoutTutor_profileInput, tutor_subjectUncheckedUpdateWithoutTutor_profileInput>
  }

  export type tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput = {
    where: tutor_subjectScalarWhereInput
    data: XOR<tutor_subjectUpdateManyMutationInput, tutor_subjectUncheckedUpdateManyWithoutTutor_profileInput>
  }

  export type subjectCreateWithoutTutor_subjectInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: categoryCreateNestedOneWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutTutor_subjectInput = {
    id: string
    name: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type subjectCreateOrConnectWithoutTutor_subjectInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutTutor_subjectInput, subjectUncheckedCreateWithoutTutor_subjectInput>
  }

  export type tutor_profileCreateWithoutTutor_subjectInput = {
    id: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotCreateNestedManyWithoutTutor_profileInput
    booking?: bookingCreateNestedManyWithoutTutor_profileInput
    user: userCreateNestedOneWithoutTutor_profileInput
  }

  export type tutor_profileUncheckedCreateWithoutTutor_subjectInput = {
    id: string
    userId: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput
    booking?: bookingUncheckedCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileCreateOrConnectWithoutTutor_subjectInput = {
    where: tutor_profileWhereUniqueInput
    create: XOR<tutor_profileCreateWithoutTutor_subjectInput, tutor_profileUncheckedCreateWithoutTutor_subjectInput>
  }

  export type subjectUpsertWithoutTutor_subjectInput = {
    update: XOR<subjectUpdateWithoutTutor_subjectInput, subjectUncheckedUpdateWithoutTutor_subjectInput>
    create: XOR<subjectCreateWithoutTutor_subjectInput, subjectUncheckedCreateWithoutTutor_subjectInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutTutor_subjectInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutTutor_subjectInput, subjectUncheckedUpdateWithoutTutor_subjectInput>
  }

  export type subjectUpdateWithoutTutor_subjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutTutor_subjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_profileUpsertWithoutTutor_subjectInput = {
    update: XOR<tutor_profileUpdateWithoutTutor_subjectInput, tutor_profileUncheckedUpdateWithoutTutor_subjectInput>
    create: XOR<tutor_profileCreateWithoutTutor_subjectInput, tutor_profileUncheckedCreateWithoutTutor_subjectInput>
    where?: tutor_profileWhereInput
  }

  export type tutor_profileUpdateToOneWithWhereWithoutTutor_subjectInput = {
    where?: tutor_profileWhereInput
    data: XOR<tutor_profileUpdateWithoutTutor_subjectInput, tutor_profileUncheckedUpdateWithoutTutor_subjectInput>
  }

  export type tutor_profileUpdateWithoutTutor_subjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUpdateManyWithoutTutor_profileNestedInput
    booking?: bookingUpdateManyWithoutTutor_profileNestedInput
    user?: userUpdateOneRequiredWithoutTutor_profileNestedInput
  }

  export type tutor_profileUncheckedUpdateWithoutTutor_subjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput
    booking?: bookingUncheckedUpdateManyWithoutTutor_profileNestedInput
  }

  export type accountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountCreateOrConnectWithoutUserInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput>
  }

  export type accountCreateManyUserInputEnvelope = {
    data: accountCreateManyUserInput | accountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bookingCreateWithoutUserInput = {
    id: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor_profile: tutor_profileCreateNestedOneWithoutBookingInput
    availability_slot?: availability_slotCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutUserInput = {
    id: string
    tutorProfileId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUserInput = {
    id: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: bookingCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    id: string
    bookingId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionCreateOrConnectWithoutUserInput = {
    where: sessionWhereUniqueInput
    create: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput>
  }

  export type sessionCreateManyUserInputEnvelope = {
    data: sessionCreateManyUserInput | sessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tutor_profileCreateWithoutUserInput = {
    id: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotCreateNestedManyWithoutTutor_profileInput
    booking?: bookingCreateNestedManyWithoutTutor_profileInput
    tutor_subject?: tutor_subjectCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileUncheckedCreateWithoutUserInput = {
    id: string
    bio?: string | null
    headline?: string | null
    hourlyRate: number
    address?: string | null
    experience?: number
    education?: string | null
    isAvailable?: boolean
    averageRating?: number
    totalReviews?: number
    totalSessions?: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    isFeatured?: boolean
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availability_slot?: availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput
    booking?: bookingUncheckedCreateNestedManyWithoutTutor_profileInput
    tutor_subject?: tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput
  }

  export type tutor_profileCreateOrConnectWithoutUserInput = {
    where: tutor_profileWhereUniqueInput
    create: XOR<tutor_profileCreateWithoutUserInput, tutor_profileUncheckedCreateWithoutUserInput>
  }

  export type accountUpsertWithWhereUniqueWithoutUserInput = {
    where: accountWhereUniqueInput
    update: XOR<accountUpdateWithoutUserInput, accountUncheckedUpdateWithoutUserInput>
    create: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput>
  }

  export type accountUpdateWithWhereUniqueWithoutUserInput = {
    where: accountWhereUniqueInput
    data: XOR<accountUpdateWithoutUserInput, accountUncheckedUpdateWithoutUserInput>
  }

  export type accountUpdateManyWithWhereWithoutUserInput = {
    where: accountScalarWhereInput
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyWithoutUserInput>
  }

  export type accountScalarWhereInput = {
    AND?: accountScalarWhereInput | accountScalarWhereInput[]
    OR?: accountScalarWhereInput[]
    NOT?: accountScalarWhereInput | accountScalarWhereInput[]
    id?: StringFilter<"account"> | string
    accountId?: StringFilter<"account"> | string
    providerId?: StringFilter<"account"> | string
    userId?: StringFilter<"account"> | string
    accessToken?: StringNullableFilter<"account"> | string | null
    refreshToken?: StringNullableFilter<"account"> | string | null
    idToken?: StringNullableFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    scope?: StringNullableFilter<"account"> | string | null
    password?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
  }

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
  }

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: StringFilter<"review"> | string
    bookingId?: StringFilter<"review"> | string
    studentId?: StringFilter<"review"> | string
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    createdAt?: DateTimeFilter<"review"> | Date | string
    updatedAt?: DateTimeFilter<"review"> | Date | string
  }

  export type sessionUpsertWithWhereUniqueWithoutUserInput = {
    where: sessionWhereUniqueInput
    update: XOR<sessionUpdateWithoutUserInput, sessionUncheckedUpdateWithoutUserInput>
    create: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput>
  }

  export type sessionUpdateWithWhereUniqueWithoutUserInput = {
    where: sessionWhereUniqueInput
    data: XOR<sessionUpdateWithoutUserInput, sessionUncheckedUpdateWithoutUserInput>
  }

  export type sessionUpdateManyWithWhereWithoutUserInput = {
    where: sessionScalarWhereInput
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyWithoutUserInput>
  }

  export type sessionScalarWhereInput = {
    AND?: sessionScalarWhereInput | sessionScalarWhereInput[]
    OR?: sessionScalarWhereInput[]
    NOT?: sessionScalarWhereInput | sessionScalarWhereInput[]
    id?: StringFilter<"session"> | string
    expiresAt?: DateTimeFilter<"session"> | Date | string
    token?: StringFilter<"session"> | string
    ipAddress?: StringNullableFilter<"session"> | string | null
    userAgent?: StringNullableFilter<"session"> | string | null
    userId?: StringFilter<"session"> | string
    createdAt?: DateTimeFilter<"session"> | Date | string
    updatedAt?: DateTimeFilter<"session"> | Date | string
  }

  export type tutor_profileUpsertWithoutUserInput = {
    update: XOR<tutor_profileUpdateWithoutUserInput, tutor_profileUncheckedUpdateWithoutUserInput>
    create: XOR<tutor_profileCreateWithoutUserInput, tutor_profileUncheckedCreateWithoutUserInput>
    where?: tutor_profileWhereInput
  }

  export type tutor_profileUpdateToOneWithWhereWithoutUserInput = {
    where?: tutor_profileWhereInput
    data: XOR<tutor_profileUpdateWithoutUserInput, tutor_profileUncheckedUpdateWithoutUserInput>
  }

  export type tutor_profileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUpdateManyWithoutTutor_profileNestedInput
    booking?: bookingUpdateManyWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUpdateManyWithoutTutor_profileNestedInput
  }

  export type tutor_profileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability_slot?: availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput
    booking?: bookingUncheckedUpdateManyWithoutTutor_profileNestedInput
    tutor_subject?: tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput
  }

  export type bookingCreateManyAvailability_slotInput = {
    id: string
    studentId: string
    tutorProfileId: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingUpdateWithoutAvailability_slotInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingNestedInput
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutBookingNestedInput
    review?: reviewUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutAvailability_slotInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutAvailability_slotInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectCreateManyCategoryInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type subjectUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor_subject?: tutor_subjectUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor_subject?: tutor_subjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_subjectCreateManySubjectInput = {
    id: string
    tutorProfileId: string
  }

  export type tutor_subjectUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutTutor_subjectNestedInput
  }

  export type tutor_subjectUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type tutor_subjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type availability_slotCreateManyTutor_profileInput = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isRecurring?: boolean
    specificDate?: Date | string | null
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingCreateManyTutor_profileInput = {
    id: string
    studentId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tutor_subjectCreateManyTutor_profileInput = {
    id: string
    subjectId: string
  }

  export type availability_slotUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutAvailability_slotNestedInput
  }

  export type availability_slotUncheckedUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutAvailability_slotNestedInput
  }

  export type availability_slotUncheckedUpdateManyWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingNestedInput
    availability_slot?: availability_slotUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutor_subjectUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: subjectUpdateOneRequiredWithoutTutor_subjectNestedInput
  }

  export type tutor_subjectUncheckedUpdateWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type tutor_subjectUncheckedUpdateManyWithoutTutor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type accountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingCreateManyUserInput = {
    id: string
    tutorProfileId: string
    availabilitySlotId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.BookingStatus
    subject?: string | null
    notes?: string | null
    meetingLink?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reviewCreateManyUserInput = {
    id: string
    bookingId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor_profile?: tutor_profileUpdateOneRequiredWithoutBookingNestedInput
    availability_slot?: availability_slotUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}