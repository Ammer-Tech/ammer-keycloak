import React, { useState } from 'react';

import { Form } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';
import { PlatformLabel } from 'components/other';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

import apple from 'images/apple.png';
import google from 'images/google.png';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);

    const { isMobile } = useDeviceType();

    const isPaymentPage = false;
    const isAmmerCapitalEU = false;
    // const isAmmerCapitalEU =
    //     kcContext.realm.displayName === 'AmmerCapitalMerchants' ||
    //     kcContext.realm.displayName === 'MerchantCustodyDev';
    const isAmmerCapitalCH = false;
    //  const isAmmerCapitalCH = kcContext.realm.displayName === 'AmmerCapitalCH'

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Sign Up"
                // onClick={() =>
                //     (window.location = url.registrationUrl as Location | (string & Location))
                // }
            />

            <STYLE.PageContent>
                {isPaymentPage ? (
                    <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                        <STYLE.Title>Log In</STYLE.Title>

                        <STYLE.InputsWrapper>
                            <LoginS.SocialLink
                                // key={item.providerId}
                                // id={`social-${item.alias}`}
                                href={'https://www.google.pl'}
                                type="button"
                            >
                                <LoginS.SocialIconWrapper>
                                    <LoginS.SocialIcon src={google} />
                                </LoginS.SocialIconWrapper>

                                {'Google'}
                            </LoginS.SocialLink>

                            <LoginS.SocialLink
                                // key={item.providerId}
                                // id={`social-${item.alias}`}
                                href={'https://www.google.pl'}
                                type="button"
                            >
                                <LoginS.SocialIconWrapper>
                                    <LoginS.SocialIcon src={apple} />
                                </LoginS.SocialIconWrapper>

                                {'Apple'}
                            </LoginS.SocialLink>
                        </STYLE.InputsWrapper>
                    </Form>
                ) : (
                    <Form
                        padding={isMobile ? '40px 32px' : '60px 80px 40px'}
                        maxWidth="558px"
                        id="kc-form-login"
                        // onSubmit={onSubmit}
                        // action={url.loginAction}
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
                                        defaultValue: '',
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

                                {/* {realm.resetPasswordAllowed && ( */}
                                <LoginS.LinkStyled
                                    href="/"
                                    // href={url.loginResetCredentialsUrl}
                                >
                                    Forgot your password?
                                </LoginS.LinkStyled>
                                {/* )} */}
                            </STYLE.ColumnWrapper>
                        </STYLE.InputsWrapper>

                        <LoginS.ButtonsWrapper>
                            <Button
                            // isLoading={isLoginButtonDisabled}
                            // disabled={!email || !password || isLoginButtonDisabled || !isEmailValid}
                            >
                                Continue
                            </Button>

                            {!isMobile && (
                                <LoginS.SignUpWrapper>
                                    <LoginS.TextGrayStyled>
                                        Don’t have an account?
                                    </LoginS.TextGrayStyled>

                                    <LoginS.LinkStyled
                                        href="/"
                                        // href={url.registrationUrl}
                                    >
                                        Become a Merchant
                                    </LoginS.LinkStyled>
                                </LoginS.SignUpWrapper>
                            )}
                        </LoginS.ButtonsWrapper>
                    </Form>
                )}
            </STYLE.PageContent>

            <Footer />

            {/* <NotificationRoot /> */}
        </STYLE.PageWrapper>
    );
};
