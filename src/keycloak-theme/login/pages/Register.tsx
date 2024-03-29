// ejected using 'npx eject-keycloak-page'
import React, { useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function Register(
    props: PageProps<Extract<KcContext, { pageId: 'register.ftl' }>, I18n>,
) {
    // @ts-ignore
    const { kcContext, i18n } = props;

    const { url, register, message } = kcContext;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    const [isPasswordsMatch, setPasswordsMatch] = useState(true);

    const conditionForButtonDisabled =
        !firstName || !lastName || !email || !password || !confirmPassword || !isEmailValid;

    // const { msg, msgStr } = i18n;

    useEffect(() => {
        // @ts-ignore
        if (!!message?.error) {
            notification.error(message.summary);
        }
    }, [message]);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                onClick={() => (window.location = url.loginUrl as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form
                    padding="64px 76px 42px"
                    maxWidth="550px"
                    id="kc-register-form"
                    action={url.registrationAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper>
                        <STYLE.Title>Sign Up</STYLE.Title>

                        <STYLE.FlexAlignCenterWrapper gap={12}>
                            <STYLE.TextGray>Already have an account?</STYLE.TextGray>

                            <STYLE.Link href={url.loginUrl}>Log In</STYLE.Link>
                        </STYLE.FlexAlignCenterWrapper>
                    </STYLE.ColumnWrapper>

                    <STYLE.InputsWrapper>
                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>First Name</STYLE.InputTitle>

                            <Input
                                value={firstName}
                                setValue={setFirstName}
                                inputProps={{
                                    id: 'firstName',
                                    name: 'firstName',
                                    header: 'First Name',
                                    defaultValue: register.formData.firstName ?? '',
                                }}
                                type="text"
                                placeholder="First Name"
                                isRequired
                            />
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>Last Name</STYLE.InputTitle>

                            <Input
                                value={lastName}
                                setValue={setLastName}
                                inputProps={{
                                    id: 'lastName',
                                    name: 'lastName',
                                    header: 'Last Name',
                                    defaultValue: register.formData.lastName ?? '',
                                }}
                                type="text"
                                placeholder="Last Name"
                                isRequired
                            />
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>E-mail</STYLE.InputTitle>

                            <Input
                                value={email}
                                setValue={setEmail}
                                onChangeHelpFunc={() => setEmailValid(true)}
                                inputProps={{
                                    name: 'email',
                                    header: 'E-mail',
                                    defaultValue: register.formData.email ?? '',
                                }}
                                type="text"
                                placeholder="E-mail"
                                isError={!isEmailValid}
                                errorText="Email not valid"
                                blurHandler={() =>
                                    !!email
                                        ? setEmailValid(validateEmail(email))
                                        : setEmailValid(true)
                                }
                                isRequired
                            />
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper>
                            <STYLE.InputTitle>Password</STYLE.InputTitle>

                            <Input
                                value={password}
                                setValue={setPassword}
                                inputProps={{
                                    id: 'password',
                                    name: 'password',
                                    header: 'Password',
                                }}
                                type="password"
                                placeholder="Password"
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
                                    header: 'Confirm Password',
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
                        <Button styleScheme="secondary" disabled={conditionForButtonDisabled}>
                            Sign Up
                        </Button>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
