import React, { useEffect } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

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
                <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                    <STYLE.Title>Email verification</STYLE.Title>

                    <STYLE.InputsWrapper>
                        <STYLE.ColumnWrapper>
                            <STYLE.TextGray>
                                An email with instructions to verify your email address has been
                                sent to your address:
                            </STYLE.TextGray>

                            <STYLE.Text>{user?.email}.</STYLE.Text>
                        </STYLE.ColumnWrapper>

                        <STYLE.ColumnWrapper>
                            <STYLE.TextGray>
                                Haven`t received a verification code in your email ?
                            </STYLE.TextGray>

                            <STYLE.Link href={url.loginAction}>
                                Click here to re-send the email
                            </STYLE.Link>
                        </STYLE.ColumnWrapper>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
