import React, { useState } from 'react';

import { Form } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    const { isMobile } = useDeviceType();

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Sign Up"
                // onClick={() =>
                //     (window.location = url.registrationUrl as Location | (string & Location))
                // }
            />

            <STYLE.PageContent>
                <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                    <STYLE.ColumnWrapper gap={isMobile ? 12 : 0}>
                        <STYLE.Title>Log In</STYLE.Title>

                        {!isMobile && (
                            <LoginS.SignUpWrapper>
                                <STYLE.TextGray>Don’t have an account?</STYLE.TextGray>

                                <STYLE.Link href="/">Become a Merchant</STYLE.Link>
                            </LoginS.SignUpWrapper>
                        )}
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
                                    // defaultValue: login.username ?? '',
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
                            maxWidth={isMobile ? '100%' : '158px'}
                            disabled={!email || !password || !isEmailValid}
                        >
                            Continue
                        </Button>

                        <STYLE.Link href="/">Forgot your password?</STYLE.Link>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />
        </STYLE.PageWrapper>
    );
};
