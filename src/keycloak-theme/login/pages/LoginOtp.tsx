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

export default function LoginOtp(
    props: PageProps<Extract<KcContext, { pageId: 'login-otp.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { url, otpLogin } = kcContext;

    const [code, setCode] = useState<string>('');

    const isEU = kcContext.realm.displayName === 'AmmerCapitalMerchants';
    const isCH = kcContext.realm.displayName === 'AmmerCapitalCH';

    const appLink = isEU
        ? 'https://eu.merchants.ammer.capital'
        : isCH
        ? 'https://ch.merchants.ammer.capital'
        : 'https://merchants.ammer.io/';

    const { isMobile } = useDeviceType();

    const realmName = kcContext.realm.displayName;

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
                    id="kc-otp-login-form"
                    action={url.loginAction}
                    method="post"
                >
                    <STYLE.ColumnWrapper gap={48}>
                        <STYLE.Title isCenter>Mobile Authenticator</STYLE.Title>

                        <STYLE.ColumnWrapper fullWidth>
                            <STYLE.Text isSmall>One-time code ({realmName}) *</STYLE.Text>

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
                                // @ts-ignore
                                value={otpLogin.selectedCredentialId}
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
}
