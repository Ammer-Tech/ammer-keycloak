import React, { useState } from 'react';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';
import { Button, Input } from 'components/interactions';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

export const LoginVerifyCode = () => {
    const [code, setCode] = useState('');

    const { isMobile } = useDeviceType();

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                onClick={() => (window.location = '#' as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form
                    padding={isMobile ? '40px 32px' : '60px 80px 40px'}
                    maxWidth="558px"
                    id="kc-verify-email-code-form"
                    // action={url.loginAction}
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
};
