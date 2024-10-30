import React, { useEffect } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function LoginPageExpired(
    props: PageProps<Extract<KcContext, { pageId: 'login-page-expired.ftl' }>, I18n>,
) {
    const { kcContext } = props;
    const { message } = kcContext;

    const { isMobile } = useDeviceType();

    const appLink =
        kcContext.realm.displayName === 'AmmerCapitalMerchants'
            ? 'https://eu.merchants.ammer.capital'
            : kcContext.realm.displayName === 'AmmerCapitalCH'
            ? 'https://ch.merchants.ammer.capital'
            : 'https://merchants.ammer.io/';

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
                buttonName="Log In"
                onClick={() => (window.location = appLink as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                    <STYLE.Title>Something went wrong</STYLE.Title>

                    <STYLE.InputsWrapper>
                        <STYLE.TextGray>
                            Please press the button below to go to the app
                        </STYLE.TextGray>

                        <STYLE.Link href={appLink}>{'<< Back to Application'}</STYLE.Link>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
