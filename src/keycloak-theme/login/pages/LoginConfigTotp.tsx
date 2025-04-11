import React, { useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as QrS from 'styles/loginQrPage';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function LoginConfigTotp(
    props: PageProps<Extract<KcContext, { pageId: 'login-config-totp.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { url, totp } = kcContext;

    const [code, setCode] = useState<string>('');

    const isEU = kcContext.realm.displayName === 'AmmerCapitalMerchants';
    const isCH = kcContext.realm.displayName === 'AmmerCapitalCH';

    const appLink = isEU
        ? 'https://eu.merchants.ammer.capital'
        : isCH
        ? 'https://ch.merchants.ammer.capital'
        : 'https://merchants.ammer.io/';

    const { isMobile } = useDeviceType();

    const appName = kcContext.realm.displayName;

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                onClick={() => (window.location = appLink as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form
                    padding={isMobile ? '40px 24px' : '60px 80px 40px'}
                    maxWidth="570px"
                    id="kc-totp-settings-form"
                    action={url.loginAction}
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

                            <STYLE.ColumnWrapper style={{ margin: '12px 0 -20px' }} isCenter>
                                <QrS.QRCodeImage
                                    id="kc-totp-secret-qr-code"
                                    src={`data:image/png;base64, ${totp.totpSecretQrCode}`}
                                    alt="Figure: Barcode"
                                />
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
                                    inputProps={{
                                        id: 'totp',
                                        name: 'totp',
                                    }}
                                />

                                <QrS.InputStyled
                                    value={appName || ''}
                                    inputProps={{
                                        id: 'userLabel',
                                        name: 'userLabel',
                                    }}
                                />

                                <QrS.InputStyled
                                    value={totp.totpSecret || ''}
                                    inputProps={{
                                        id: 'totpSecret',
                                        name: 'totpSecret',
                                    }}
                                />
                            </STYLE.ColumnWrapper>
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
}
