import React, { useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, CodeInput } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

import codeIcon from 'images/code.svg';

export default function LoginVerifyCode(
    props: PageProps<Extract<KcContext, { pageId: 'login-verify-email-code.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { url } = kcContext;

    const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

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
                    maxWidth="520px"
                    id="kc-verify-email-code-form"
                    action={url.loginAction}
                    method="post"
                >
                    <STYLE.CodeIcon src={codeIcon} />

                    <STYLE.ColumnWrapper gap={24}>
                        <STYLE.Title isCenter>Enter Verification Code</STYLE.Title>

                        <STYLE.Text>
                            Please enter the 6 digit verification we sent to your email.
                        </STYLE.Text>
                    </STYLE.ColumnWrapper>

                    <STYLE.InputsWrapper gap={80} marginTop={40}>
                        <CodeInput values={code} setValues={setCode} />

                        <input
                            style={{ display: 'none' }}
                            value={code.join('')}
                            id="email_code"
                            name="email_code"
                        />

                        <Button type="submit" disabled={code.some((item) => !item)}>
                            Continue
                        </Button>
                    </STYLE.InputsWrapper>

                    <STYLE.ResendCode>
                        <a href="">Click here to resend the code</a>
                    </STYLE.ResendCode>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
