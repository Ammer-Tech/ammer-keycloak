import React, { useEffect } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';
import * as EmailS from 'styles/LoginVerifyEmail';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

import email from 'images/email.png';

export default function LoginVerifyEmail(
    props: PageProps<Extract<KcContext, { pageId: 'login-verify-email.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { url, message, user } = kcContext;

    const { isMobile } = useDeviceType();

    useEffect(() => {
        if (message?.type === 'error') {
            notification.error(message.summary);
        }
        // else if (message?.type === 'success') {
        //     notification.success(message.summary);
        // } else if (message?.type === 'warning') {
        //     notification.warn(message.summary);
        // }
    }, [message]);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Back to Login"
                onClick={() =>
                    (window.location = url.loginRestartFlowUrl as Location | (string & Location))
                }
            />

            <STYLE.PageContent>
                <Form padding={isMobile ? '40px 32px' : '60px 75px'} maxWidth="558px">
                    <STYLE.Title isCenter>Email verification</STYLE.Title>

                    <EmailS.Content>
                        <STYLE.TextGray>
                            An email to verify your email address has been sent to your address:{' '}
                            <STYLE.EmailText>{user?.email}</STYLE.EmailText>
                        </STYLE.TextGray>

                        <STYLE.EmailIcon src={email} />

                        <STYLE.TextGray>
                            {'Haven’t received a verification email?'}
                            &nbsp; &nbsp;
                            <STYLE.Link href={url.loginAction}>Click to resend</STYLE.Link>
                        </STYLE.TextGray>
                    </EmailS.Content>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
