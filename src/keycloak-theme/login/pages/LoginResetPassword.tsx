import React, { useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form } from 'components/containers';
import { Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import * as STYLE from 'styles';
import * as LoginS from 'styles/loginPage';
import { validateEmail } from 'utils';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function LoginResetPassword(
    props: PageProps<Extract<KcContext, { pageId: 'login-reset-password.ftl' }>, I18n>,
) {
    // @ts-ignore
    const { kcContext, i18n } = props;
    const { url, message } = kcContext;

    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(true);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        // @ts-ignore
        if (message?.error) {
            setErrorText(message.summary);
        } else {
            setErrorText('');
        }
    }, [message]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        // Logic to handle password reset request
    };

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
                    onSubmit={onSubmit}
                    action={url.loginResetCredentialsUrl}
                    method="post"
                >
                    <STYLE.ColumnWrapper>
                        <STYLE.Title>Reset Password</STYLE.Title>
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
                    </STYLE.InputsWrapper>

                    {!!errorText && <STYLE.ErrorText>{errorText}</STYLE.ErrorText>}

                    <LoginS.ButtonsWrapper>
                        <Button styleScheme="secondary" disabled={!email || !isEmailValid}>
                            Reset Password
                        </Button>
                    </LoginS.ButtonsWrapper>
                </Form>
            </STYLE.PageContent>
        </STYLE.PageWrapper>
    );
}
