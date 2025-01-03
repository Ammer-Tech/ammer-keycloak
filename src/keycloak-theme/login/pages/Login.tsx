import React, { type FormEventHandler, useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';
import { useConstCallback } from 'keycloakify/tools/useConstCallback';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';
import { PlatformLabel } from 'components/other';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

import apple from 'images/apple.png';
import google from 'images/google.png';

const my_custom_param = new URL(window.location.href).searchParams.get('my_custom_param');

if (my_custom_param !== null) {
    console.log('my_custom_param:', my_custom_param);
}

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
    const { kcContext } = props;

    const { social, realm, url, login, message } = kcContext;

    // to make the true here, then make a build for the payment page and return the false
    const isPaymentPage = false;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    const { isMobile } = useDeviceType();

    const isAmmerCapitalEU =
        kcContext.realm.displayName === 'AmmerCapitalMerchants' ||
        kcContext.realm.displayName === 'MerchantCustodyDev';
    const isAmmerCapitalCH = kcContext.realm.displayName === 'AmmerCapitalCH';

    useEffect(() => {
        if (message?.type === 'error') {
            notification.error('Invalid username or password');
        } else if (message?.type === 'success') {
            notification.success(message.summary);
        } else if (message?.type === 'warning') {
            notification.warn(message.summary);
        }
    }, [message]);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>((e) => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        // NOTE: Even if we login with email Keycloak expect username and password in
        // the POST request.
        formElement.querySelector("input[name='email']")?.setAttribute('name', 'username');

        formElement.submit();
    });

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Sign Up"
                onClick={() =>
                    (window.location = url.registrationUrl as Location | (string & Location))
                }
            />

            <STYLE.PageContent>
                {isPaymentPage ? (
                    <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                        <STYLE.Title>Log In</STYLE.Title>

                        <STYLE.InputsWrapper>
                            {social?.providers?.map((item) => (
                                <LoginS.SocialLink
                                    key={item.providerId}
                                    id={`social-${item.alias}`}
                                    href={item.loginUrl}
                                    type="button"
                                >
                                    {item.providerId === 'google' ? (
                                        <LoginS.SocialIconWrapper>
                                            <LoginS.SocialIcon src={google} />
                                        </LoginS.SocialIconWrapper>
                                    ) : (
                                        item.providerId === 'apple' && (
                                            <LoginS.SocialIconWrapper>
                                                <LoginS.SocialIcon src={apple} />
                                            </LoginS.SocialIconWrapper>
                                        )
                                    )}

                                    {item.displayName}
                                </LoginS.SocialLink>
                            ))}
                        </STYLE.InputsWrapper>
                    </Form>
                ) : (
                    <Form
                        padding={isMobile ? '40px 32px' : '60px 80px 40px'}
                        maxWidth="558px"
                        id="kc-form-login"
                        onSubmit={onSubmit}
                        action={url.loginAction}
                        method="post"
                    >
                        <STYLE.ColumnWrapper gap={isMobile ? 12 : 0}>
                            <PlatformLabel
                                type={isAmmerCapitalEU ? 'eu' : isAmmerCapitalCH ? 'ch' : 'global'}
                            />

                            <STYLE.Title>{`Log In | ${
                                isAmmerCapitalEU || isAmmerCapitalCH
                                    ? 'Custodial Platform'
                                    : 'Non-Custodial Platform'
                            }`}</STYLE.Title>
                        </STYLE.ColumnWrapper>

                        <STYLE.InputsWrapper>
                            <STYLE.ColumnWrapper>
                                <STYLE.InputTitle>E-mail</STYLE.InputTitle>

                                <Input
                                    value={email}
                                    setValue={setEmail}
                                    helpFuncForOnChange={() => setEmailValid(true)}
                                    inputProps={{
                                        name: 'email',
                                        header: 'E-mail',
                                        defaultValue: login.username ?? '',
                                    }}
                                    type="text"
                                    placeholder="E-mail"
                                    isError={!isEmailValid}
                                    errorText="Email not valid"
                                    blurHandler={() =>
                                        !!email && email !== 'admin'
                                            ? setEmailValid(validateEmail(email))
                                            : setEmailValid(true)
                                    }
                                />
                            </STYLE.ColumnWrapper>

                            <STYLE.ColumnWrapper>
                                <STYLE.InputTitle>Password</STYLE.InputTitle>

                                <Input
                                    value={password}
                                    setValue={setPassword}
                                    inputProps={{
                                        name: 'password',
                                        header: 'Password',
                                    }}
                                    type="password"
                                    placeholder="Password"
                                />

                                {realm.resetPasswordAllowed && (
                                    <LoginS.LinkStyled href={url.loginResetCredentialsUrl}>
                                        Forgot your password?
                                    </LoginS.LinkStyled>
                                )}
                            </STYLE.ColumnWrapper>
                        </STYLE.InputsWrapper>

                        <LoginS.ButtonsWrapper>
                            <Button
                                isLoading={isLoginButtonDisabled}
                                disabled={
                                    !email || !password || isLoginButtonDisabled || !isEmailValid
                                }
                            >
                                Continue
                            </Button>

                            {!isMobile && (
                                <LoginS.SignUpWrapper>
                                    <LoginS.TextGrayStyled>
                                        Don’t have an account?
                                    </LoginS.TextGrayStyled>

                                    <LoginS.LinkStyled href={url.registrationUrl}>
                                        Become a Merchant
                                    </LoginS.LinkStyled>
                                </LoginS.SignUpWrapper>
                            )}
                        </LoginS.ButtonsWrapper>
                    </Form>
                )}
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
