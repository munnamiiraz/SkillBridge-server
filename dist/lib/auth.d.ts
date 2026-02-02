export declare const auth: import("better-auth").Auth<{
    emailAndPassword: {
        enabled: true;
        autoSignIn: false;
        requireEmailVerification: true;
    };
    emailVerification: {
        sendOnSignUp: true;
        autoSignInAfterVerification: true;
        sendVerificationEmail: ({ user, url, token }: {
            user: import("better-auth").User;
            url: string;
            token: string;
        }, request: Request | undefined) => Promise<void>;
    };
    socialProviders: {
        google: {
            prompt: "select_account consent";
            accessType: "offline";
            clientId: string;
            clientSecret: string;
        };
    };
    trustedOrigins: string[];
    user: {
        additionalFields: {
            role: {
                type: "string";
                default: string;
                required: true;
            };
            phone: {
                type: "string";
                required: true;
            };
            status: {
                type: "string";
                default: string;
                required: false;
            };
        };
    };
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
}>;
//# sourceMappingURL=auth.d.ts.map