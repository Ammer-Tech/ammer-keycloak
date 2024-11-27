import React, { useState } from 'react';

import { Form } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';
import { PlatformLabel } from 'components/other';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail, validatePassword } from 'utils';

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isEmailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [isPasswordsMatch, setPasswordsMatch] = useState(true);

    const { isMobile } = useDeviceType();

    const isAmmerCapitalEU = true;
    // const isAmmerCapitalEU =
    //     kcContext.realm.displayName === 'AmmerCapitalMerchants' ||
    //     kcContext.realm.displayName === 'MerchantCustodyDev';
    const isAmmerCapitalCH = false;
    //  const isAmmerCapitalCH = kcContext.realm.displayName === 'AmmerCapitalCH'

    const conditionForButtonDisabled =
        !firstName ||
        !lastName ||
        !companyName ||
        !email ||
        !password ||
        !confirmPassword ||
        !validateEmail(email) ||
        !validatePassword(password) ||
        !(password === confirmPassword);

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
                    padding={isMobile ? '40px 32px' : '60px 80px 40px'}
                    maxWidth="558px"
                    id="kc-register-form"
                    // action={url.registrationAction}
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
                            <STYLE.InputTitle>First Name</STYLE.InputTitle>

                            <Input
                                value={firstName}
                                setValue={setFirstName}
                                inputProps={{
                                    id: 'firstName',
                                    name: 'firstName',
                                    header: 'First Name',
                                    defaultValue: '',
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
                                    defaultValue: '',
                                    // defaultValue: register.formData.lastName ?? '',
                                }}
                                type="text"
                                placeholder="Last Name"
                                isRequired
                            />
                        </STYLE.ColumnWrapper>

                        {(isAmmerCapitalEU || isAmmerCapitalCH) && (
                            <STYLE.ColumnWrapper>
                                <STYLE.InputTitle>Company Name</STYLE.InputTitle>

                                <Input
                                    value={companyName}
                                    setValue={setCompanyName}
                                    inputProps={{
                                        id: 'companyName',
                                        name: 'companyName',
                                        header: 'Company Name',
                                        defaultValue: '',
                                    }}
                                    type="text"
                                    placeholder="Company Name"
                                    isRequired
                                />
                            </STYLE.ColumnWrapper>
                        )}

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
                                helpFuncForOnChange={() => setPasswordValid(true)}
                                inputProps={{
                                    id: 'password',
                                    name: 'password',
                                    header: 'Password',
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

                    <LoginS.ButtonsWrapper style={{ marginTop: '80px' }}>
                        <Button disabled={conditionForButtonDisabled}>Sign Up</Button>

                        {!isMobile && (
                            <LoginS.SignUpWrapper>
                                <STYLE.TextGray>Already have an account?</STYLE.TextGray>

                                <STYLE.Link
                                    href="/"
                                    // href={url.loginUrl}
                                >
                                    Log In
                                </STYLE.Link>
                            </LoginS.SignUpWrapper>
                        )}
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            {/* <NotificationRoot /> */}
        </STYLE.PageWrapper>
    );
};
