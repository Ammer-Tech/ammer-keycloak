import React, { useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validatePassword } from 'utils';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function LoginUpdatePassword(
    props: PageProps<Extract<KcContext, { pageId: 'login-update-password.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { url, message } = kcContext;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isPasswordValid, setPasswordValid] = useState(true);
    const [isPasswordsMatch, setPasswordsMatch] = useState(true);

    const { isMobile } = useDeviceType();

    const conditionForButtonDisabled =
        !password || !confirmPassword || !isPasswordValid || !isPasswordsMatch;

    useEffect(() => {
        if (message?.type === 'error') {
            notification.error(message.summary);
        }
        // else if (message?.type === 'success') {
        //     notification.success(message.summary);
        // } else if (message?.type === 'warning') {
        //     notification.warn(message.summary);
        // }
    }, [message]);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Back to Login"
                onClick={() => (window.location = url.loginUrl as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form
                    padding="64px 76px 42px"
                    maxWidth="550px"
                    id="kc-passwd-update-form"
                    action={url.loginAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper gap={isMobile ? 12 : 0}>
                        <STYLE.Title>Update Password</STYLE.Title>
                    </STYLE.ColumnWrapper>

                    <STYLE.InputsWrapper>
                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>Password</STYLE.InputTitle>

                            <Input
                                value={password}
                                setValue={setPassword}
                                helpFuncForOnChange={() => setPasswordValid(true)}
                                inputProps={{
                                    id: 'password-new',
                                    name: 'password-new',
                                    autocomplete: 'new-password',
                                }}
                                type="password"
                                placeholder="Password"
                                isError={!isPasswordValid}
                                errorText="Password not valid: min 8, a-z, A-Z, 0-9 and one special symbol"
                                blurHandler={() =>
                                    !!password
                                        ? setPasswordValid(validatePassword(password))
                                        : setPasswordValid(true)
                                }
                                isRequired
                            />
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>Confirm Password</STYLE.InputTitle>

                            <Input
                                value={confirmPassword}
                                setValue={(value) => {
                                    setConfirmPassword(value);

                                    confirmPassword.length >= password.length - 1 &&
                                        setPasswordsMatch(password === value);
                                }}
                                focusHandler={() => setPasswordsMatch(true)}
                                blurHandler={() => setPasswordsMatch(password === confirmPassword)}
                                inputProps={{
                                    id: 'password-confirm',
                                    name: 'password-confirm',
                                    autocomplete: 'new-password',
                                }}
                                type="password"
                                placeholder="Confirm Password"
                                isRequired
                                isError={!isPasswordsMatch}
                                errorText="Passwords don't match"
                            />
                        </STYLE.ColumnWrapper>
                    </STYLE.InputsWrapper>

                    <LoginS.ButtonsWrapper>
                        <Button
                            type="submit"
                            styleScheme="secondary"
                            disabled={conditionForButtonDisabled}
                        >
                            Update Password
                        </Button>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
