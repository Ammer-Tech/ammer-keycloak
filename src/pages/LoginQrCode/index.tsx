import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as QrS from 'styles/loginQrPage';

export const LoginQrCode = () => {
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
                    id="kc-verify-email-code-form"
                    // action={url.loginAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper gap={48}>
                        <STYLE.Title isCenter>Mobile Authenticator Setup</STYLE.Title>

                        <STYLE.ColumnWrapper gap={16}>
                            <STYLE.EmailText>1. Install an authenticator app</STYLE.EmailText>

                            <STYLE.FlexAlignCenterWrapper gap={4} withWrap>
                                <STYLE.Text isSmall>Microsoft Authenticator</STYLE.Text>

                                <STYLE.TextGray isSmall>or</STYLE.TextGray>

                                <STYLE.Text isSmall>Google Authenticator</STYLE.Text>

                                <STYLE.TextGray isSmall>or</STYLE.TextGray>

                                <STYLE.Text isSmall>FreeOTP</STYLE.Text>
                            </STYLE.FlexAlignCenterWrapper>
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper gap={16}>
                            <STYLE.EmailText>
                                2. Open the application and scan the barcode:
                            </STYLE.EmailText>

                            <STYLE.ColumnWrapper>
                                {/*
                                for mobile:

                                onClick={() => window.location.assign('https://reactjs.org/')}
                                */}

                                <QrS.QRCodeWrapper>
                                    <QRCode
                                        value="https://reactjs.org/"
                                        bgColor="transparent"
                                        ecLevel="L"
                                        eyeRadius={8}
                                    />
                                </QrS.QRCodeWrapper>

                                <STYLE.Link color="#3F69FE" isSmall>
                                    Unable to Scan ?
                                </STYLE.Link>
                            </STYLE.ColumnWrapper>
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper gap={24}>
                            <STYLE.ColumnWrapper>
                                <STYLE.EmailText>
                                    3. Enter the one-time code provided by the application and click
                                    Submit to finish the setup
                                </STYLE.EmailText>

                                <STYLE.TextGray isCenter={false} isSmall>
                                    Provide a Device Name to help you manage your OTP device
                                </STYLE.TextGray>
                            </STYLE.ColumnWrapper>

                            <STYLE.ColumnWrapper fullWidth>
                                <STYLE.Text isSmall>One-time code *</STYLE.Text>

                                <Input
                                    value={code}
                                    setValue={setCode}
                                    placeholder="One-time code"
                                />
                            </STYLE.ColumnWrapper>
                        </STYLE.ColumnWrapper>

                        <Button marginTop={12} disabled>
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
