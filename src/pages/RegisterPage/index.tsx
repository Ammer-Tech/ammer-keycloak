import React, { useState } from 'react';

import { Form } from 'components/containers';
import { Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    // const isPasswordsMatch = password === confirmPassword;

    const conditionForButtonDisabled =
        !firstName || !lastName || !email || !password || !confirmPassword;

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                // onClick={() =>
                //     (window.location = url.loginUrl as Location | (string & Location))
                // }
            />

            <STYLE.PageContent>
                <Form
                    padding="64px 76px 42px"
                    maxWidth="550px"
                    id="kc-register-form"
                    // action={url.registrationAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper>
                        <STYLE.Title>Sign Up</STYLE.Title>

                        <STYLE.FlexAlignCenterWrapper gap={12}>
                            <STYLE.TextGray>Already have an account?</STYLE.TextGray>

                            <STYLE.Link href="/">Log In</STYLE.Link>
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
                                    // defaultValue: register.formData.firstName ?? '',
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
                                    // defaultValue: register.formData.lastName ?? '',
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
                                setValue={(value) => {
                                    setEmailValid(true);

                                    setEmail(value);
                                }}
                                inputProps={{
                                    name: 'email',
                                    header: 'E-mail',
                                    // defaultValue: register.formData.email ?? '',
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
                                setValue={setConfirmPassword}
                                inputProps={{
                                    id: 'password-confirm',
                                    name: 'password-confirm',
                                    header: 'Confirm Password',
                                }}
                                type="password"
                                placeholder="Confirm Password"
                                isRequired
                            />
                        </STYLE.ColumnWrapper>
                    </STYLE.InputsWrapper>

                    {false && <STYLE.ErrorText>Invalid username or password</STYLE.ErrorText>}

                    <LoginS.ButtonsWrapper>
                        <Button styleScheme="secondary" disabled={conditionForButtonDisabled}>
                            Sign Up
                        </Button>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>
        </STYLE.PageWrapper>
    );
};
