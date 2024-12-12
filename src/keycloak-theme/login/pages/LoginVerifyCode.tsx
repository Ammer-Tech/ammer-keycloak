import React, { useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function LoginVerifyCode(
    props: PageProps<Extract<KcContext, { pageId: 'login-verify-email-code.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { url, message } = kcContext;

    const [code, setCode] = useState('');

    console.log('kcContext', kcContext);
    console.log('message', message);

    const appLink =
        kcContext.realm.displayName === 'AmmerCapitalMerchants'
            ? 'https://eu.merchants.ammer.capital'
            : kcContext.realm.displayName === 'AmmerCapitalCH'
            ? 'https://ch.merchants.ammer.capital'
            : 'https://merchants.ammer.io/';

    const { isMobile } = useDeviceType();

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                onClick={() => (window.location = appLink as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form
                    padding={isMobile ? '40px 32px' : '60px 80px 40px'}
                    maxWidth="558px"
                    id="kc-verify-email-code-form"
                    action={url.loginAction}
                    method="post"
                >
                    <STYLE.Title>Enter code from your email</STYLE.Title>

                    <Input
                        value={code}
                        setValue={setCode}
                        inputProps={{
                            id: 'email_code',
                            name: 'email_code',
                        }}
                        type="text"
                        placeholder="Code"
                        isRequired
                    />

                    <Button type="submit" disabled={!code}>
                        Send code
                    </Button>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
