import React, { lazy, Suspense } from 'react';
import Fallback, { type PageProps } from 'keycloakify/login';

import { useI18n } from './i18n';
import type { KcContext } from './kcContext';
import Template from './Template';

// import './KcApp.css';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const LoginResetPassword = lazy(() => import('./pages/LoginResetPassword'));
const LoginUpdatePassword = lazy(() => import('./pages/LoginUpdatePassword'));
const LoginVerifyEmail = lazy(() => import('./pages/LoginVerifyEmail'));
const LoginPageExpired = lazy(() => import('./pages/LoginPageExpired'));
const Info = lazy(() => import('./pages/Info'));
const Error = lazy(() => import('./pages/Error'));
// const Info = lazy(() => import('keycloakify/login/pages/Info'));

// This is like adding classes to theme.properties
// https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
const classes = {
    // NOTE: The classes are defined in ./KcApp.css
    // kcHtmlClass: 'my-root-class',
    // kcHeaderWrapperClass: 'my-color my-font',
} satisfies PageProps['classes'];

export default function KcApp(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const i18n = useI18n({ kcContext });

    if (i18n === null) {
        // NOTE: Text resources for the current language are still being downloaded, we can't display anything yet.
        // We could display a loading progress but it's usually a matter of milliseconds.
        return null;
    }

    /*
     * Examples assuming i18n.currentLanguageTag === "en":
     * i18n.msg("access-denied") === <span>Access denied</span>
     * i18n.msg("foo") === <span>foo in English</span>
     */

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case 'login.ftl':
                        return (
                            <Login
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    case 'register.ftl':
                        return (
                            <Register
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    case 'login-reset-password.ftl':
                        return (
                            <LoginResetPassword
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    case 'login-update-password.ftl':
                        return (
                            <LoginUpdatePassword
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    case 'login-verify-email.ftl':
                        return (
                            <LoginVerifyEmail
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    case 'login-page-expired.ftl':
                        return (
                            <LoginPageExpired
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    case 'error.ftl':
                        return (
                            <Error
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                    // We choose to use the default Template for the Info page and to download the theme resources.
                    // This is just an example to show you what is possible. You likely don't want to keep this as is.
                    case 'info.ftl':
                        return (
                            <Info
                                {...{ kcContext, i18n, Template, classes }}
                                // Template={lazy(() => import('keycloakify/login/Template'))}
                                doUseDefaultCss={true}
                            />
                        );
                    default:
                        return (
                            <Fallback
                                {...{ kcContext, i18n, Template, classes }}
                                doUseDefaultCss={true}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}
