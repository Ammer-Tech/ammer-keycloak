import React, { useEffect } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

import wrongIcon from 'images/wrong.svg';

export default function Error(props: PageProps<Extract<KcContext, { pageId: 'error.ftl' }>, I18n>) {
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
    }, [message]);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                onClick={() => (window.location = appLink as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form padding={isMobile ? '40px 24px' : '60px 80px'} maxWidth="518px">
                    <STYLE.WrongIcon src={wrongIcon} />

                    <STYLE.Title isCenter>Something Went Wrong</STYLE.Title>

                    <STYLE.InputsWrapper gap={80} marginTop={24}>
                        <STYLE.Text isCenter>
                            We apologize for the inconvenience. Please try again later or contact
                            support if the issue persists. Thank you for your patience.
                        </STYLE.Text>

                        <STYLE.Link href={appLink} isButton>
                            Back to Application
                        </STYLE.Link>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
