import React, { type FormEventHandler, useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';
import { useConstCallback } from 'keycloakify/tools/useConstCallback';

import { Form } from 'components/containers';
import { Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

const my_custom_param = new URL(window.location.href).searchParams.get('my_custom_param');

if (my_custom_param !== null) {
    console.log('my_custom_param:', my_custom_param);
}

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
    // @ts-ignore
    const { kcContext, i18n, doUseDefaultCss, classes } = props;

    // @ts-ignore
    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, message } =
        kcContext;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const [isLoginError, setLoginError] = useState<boolean>(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // @ts-ignore
        if (!!message?.error) {
            setLoginError(true);
        } else {
            setLoginError(false);
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
                buttonName="Become a Merchant"
                onClick={() =>
                    (window.location = url.registrationUrl as Location | (string & Location))
                }
            />

            <STYLE.PageContent>
                <Form
                    padding="64px 76px 42px"
                    maxWidth="550px"
                    onSubmit={onSubmit}
                    action={url.loginAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper>
                        <STYLE.Title>Log In</STYLE.Title>

                        <STYLE.FlexAlignCenterWrapper gap={12}>
                            <STYLE.TextGray>Don’t have an account?</STYLE.TextGray>

                            <STYLE.Link href={url.registrationUrl}>Become a Merchant</STYLE.Link>
                        </STYLE.FlexAlignCenterWrapper>
                    </STYLE.ColumnWrapper>

                    <STYLE.InputsWrapper>
                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>E-mail</STYLE.InputTitle>

                            <Input
                                value={email}
                                setValue={setEmail}
                                inputProps={{
                                    name: 'email',
                                    defaultValue: login.username ?? '',
                                    header: 'E-mail',
                                }}
                                type="text"
                                placeholder="E-mail"
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

                    {isLoginError && (
                        <STYLE.ErrorText>Invalid username or password</STYLE.ErrorText>
                    )}

                    <LoginS.ButtonsWrapper>
                        <Button
                            styleScheme="secondary"
                            isLoading={isLoginButtonDisabled}
                            disabled={!email || !password || isLoginButtonDisabled}
                        >
                            Continue
                        </Button>

                        <STYLE.Link href="/">Forgot your password?</STYLE.Link>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>
        </STYLE.PageWrapper>
    );
}
