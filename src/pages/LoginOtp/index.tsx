import React, { useState } from 'react';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as QrS from 'styles/loginQrPage';

export const LoginOtp = () => {
    const [code, setCode] = useState<string>('');

    const { isMobile } = useDeviceType();

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                // onClick={() => (window.location = '#' as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form
                    padding={isMobile ? '40px 24px' : '60px 80px 40px'}
                    maxWidth="570px"
                    id="kc-otp-login-form"
                    // action={url.loginAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper gap={48}>
                        <STYLE.Title isCenter>Mobile Authenticator</STYLE.Title>

                        <STYLE.ColumnWrapper fullWidth>
                            <STYLE.Text isSmall>One-time code (appName) *</STYLE.Text>

                            <Input
                                value={code}
                                setValue={setCode}
                                placeholder="One-time code"
                                inputProps={{
                                    id: 'otp',
                                    name: 'otp',
                                }}
                            />

                            <QrS.InputStyled
                                value={'otpLogin.selectedCredentialId'}
                                inputProps={{
                                    id: 'selectedCredentialId',
                                    name: 'selectedCredentialId',
                                }}
                            />
                        </STYLE.ColumnWrapper>

                        <Button marginTop={12} disabled={!code}>
                            Submit
                        </Button>
                    </STYLE.ColumnWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
};
