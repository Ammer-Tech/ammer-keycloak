import { createGetKcContext } from 'keycloakify/login';

export type KcContextExtension =
    | { pageId: 'login-verify-email-code.ftl' }
    // NOTE: register.ftl is deprecated in favor of register-user-profile.ftl
    // but let's say we use it anyway and have this plugin enabled: https://github.com/micedre/keycloak-mail-whitelisting
    // keycloak-mail-whitelisting define the non standard ftl global authorizedMailDomains, we declare it here.
    | { pageId: 'register-user-profile.ftl'; authorizedMailDomains: string[] };

// NOTE: In most of the cases you do not need to overload the KcContext, you can
// just call createGetKcContext(...) without type arguments.
// You want to overload the KcContext only if:
// - You have custom plugins that add some values to the context (like https://github.com/micedre/keycloak-mail-whitelisting that adds authorizedMailDomains)
// - You want to add support for extra pages that are not yey featured by default, see: https://docs.keycloakify.dev/contributing#adding-support-for-a-new-page
export const { getKcContext } = createGetKcContext<KcContextExtension>({
    mockData: [
        {
            pageId: 'login.ftl',
            locale: {
                // When we test the login page we do it in french
                currentLanguageTag: 'fr',
            },
            // Uncomment the following line for hiding the Alert message
            // "message": undefined
            // Uncomment the following line for showing an Error message
            // message: { type: "error", summary: "This is an error" }
        },
        {
            pageId: 'login-reset-password.ftl',
        },
        {
            pageId: 'login-update-password.ftl',
        },
        {
            pageId: 'login-verify-email.ftl',
        },
        {
            pageId: 'login-page-expired.ftl',
        },
        {
            pageId: 'login-verify-email-code.ftl',
        },
        {
            pageId: 'login-config-totp.ftl',
        },
        {
            pageId: 'login-otp.ftl',
        },
        {
            pageId: 'info.ftl',
        },
        {
            pageId: 'error.ftl',
        },
        // {
        //     pageId: 'register.ftl',
        //     authorizedMailDomains: [
        //         'example.com',
        //         'another-example.com',
        //         '*.yet-another-example.com',
        //         '*.example.com',
        //         'hello-world.com',
        //     ],
        //     // Simulate we got an error with the email field
        //     messagesPerField: {
        //         printIfExists: <T>(fieldName: string, className: T) => {
        //             console.log({ fieldName });
        //             return fieldName === 'email' ? className : undefined;
        //         },
        //         existsError: (fieldName: string) => fieldName === 'email',
        //         get: (fieldName: string) => `Fake error for ${fieldName}`,
        //         exists: (fieldName: string) => fieldName === 'email',
        //     },
        // },
        {
            pageId: 'register-user-profile.ftl',
            locale: {
                currentLanguageTag: 'en',
            },
            profile: {
                attributes: [
                    {
                        displayName: '${companyName}',
                        value: undefined,
                        name: 'companyName',
                    },
                ],
            },
        },
    ],
    // Defined in vite.config.ts
    // See: https://docs.keycloakify.dev/environnement-variables
    mockProperties: {
        MY_ENV_VARIABLE: 'Mocked value',
    },
});

export const { kcContext } = getKcContext({
    // Uncomment to test the login page for development.
    // mockPageId: "login.ftl",
});

export type KcContext = NonNullable<ReturnType<typeof getKcContext>['kcContext']>;
