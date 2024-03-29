import React, { useState } from 'react';

import { Form } from 'components/containers';
import { Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Become a Merchant"
                // onClick={() =>
                //     (window.location = url.registrationUrl as Location | (string & Location))
                // }
            />

            <STYLE.PageContent>
                <Form padding="64px 76px 42px" maxWidth="550px">
                    <STYLE.ColumnWrapper>
                        <STYLE.Title>Log In</STYLE.Title>

                        <STYLE.FlexAlignCenterWrapper gap={12}>
                            <STYLE.TextGray>Don’t have an account?</STYLE.TextGray>

                            <STYLE.Link href="/">Become a Merchant</STYLE.Link>
                        </STYLE.FlexAlignCenterWrapper>
                    </STYLE.ColumnWrapper>

                    <STYLE.InputsWrapper>
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
                                    // defaultValue: login.username ?? '',
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
                                    name: 'password',
                                    header: 'Password',
                                }}
                                type="password"
                                placeholder="Password"
                                isRequired
                            />
                        </STYLE.ColumnWrapper>
                    </STYLE.InputsWrapper>

                    {false && <STYLE.ErrorText>Invalid username or password</STYLE.ErrorText>}

                    <LoginS.ButtonsWrapper>
                        <Button styleScheme="secondary" disabled={!email || !password}>
                            Continue
                        </Button>

                        <STYLE.Link href="/">Forgot your password?</STYLE.Link>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>
        </STYLE.PageWrapper>
    );
};
