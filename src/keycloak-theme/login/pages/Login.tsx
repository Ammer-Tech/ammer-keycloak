import React, { type FormEventHandler, useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';
import { useConstCallback } from 'keycloakify/tools/useConstCallback';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

const my_custom_param = new URL(window.location.href).searchParams.get('my_custom_param');

if (my_custom_param !== null) {
    console.log('my_custom_param:', my_custom_param);
}

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
    // @ts-ignore
    const { kcContext, i18n } = props;

    // @ts-ignore
    const { realm, url, login, message } = kcContext;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    const { isMobile } = useDeviceType();

    useEffect(() => {
        // @ts-ignore
        if (!!message?.error) {
            notification.error('Invalid username or password');
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
                <Form
                    padding={isMobile ? '40px 32px' : '60px 80px 40px'}
                    maxWidth="558px"
                    onSubmit={onSubmit}
                    action={url.loginAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper gap={isMobile ? 12 : 0}>
                        <STYLE.Title>Log In</STYLE.Title>

                        {!isMobile && (
                            <LoginS.SignUpWrapper>
                                <STYLE.TextGray>Don’t have an account?</STYLE.TextGray>

                                <STYLE.Link href={url.registrationUrl}>
                                    Become a Merchant
                                </STYLE.Link>
                            </LoginS.SignUpWrapper>
                        )}
                    </STYLE.ColumnWrapper>

                    <STYLE.InputsWrapper>
                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>E-mail</STYLE.InputTitle>

                            <Input
                                value={email}
                                setValue={setEmail}
                                onChangeHelpFunc={() => setEmailValid(true)}
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
                        </STYLE.ColumnWrapper>
                    </STYLE.InputsWrapper>

                    <LoginS.ButtonsWrapper>
                        <Button
                            isLoading={isLoginButtonDisabled}
                            disabled={!email || !password || isLoginButtonDisabled || !isEmailValid}
                        >
                            Continue
                        </Button>

                        {/* {realm.resetPasswordAllowed && (
                            <STYLE.Link href={url.loginResetCredentialsUrl}>
                                Forgot your password?
                            </STYLE.Link>
                        )} */}
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
