import React, { useEffect } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

import infoIcon from 'images/info.svg';

export default function Info(props: PageProps<Extract<KcContext, { pageId: 'info.ftl' }>, I18n>) {
    const { kcContext } = props;
    const { message } = kcContext;

    const appLink =
        kcContext.realm.displayName === 'AmmerCapitalMerchants'
            ? 'https://eu.merchants.ammer.capital'
            : kcContext.realm.displayName === 'AmmerCapitalCH'
            ? 'https://ch.merchants.ammer.capital'
            : 'https://merchants.ammer.io/';

    const { isMobile } = useDeviceType();

    useEffect(() => {
        if (message?.type === 'error') {
            notification.error(message.summary);
        }
        // else if (message?.type === 'warning') {
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
                <Form padding={isMobile ? '40px 24px' : '60px 80px'} maxWidth="518px">
                    <STYLE.WrongIcon src={infoIcon} />

                    <STYLE.Title isCenter>Information</STYLE.Title>

                    <STYLE.InputsWrapper gap={80} marginTop={24}>
                        <STYLE.Text isCenter>
                            {message?.summary ||
                                `This is an informational message. No action is needed at the moment. If
                            you have any questions, please feel free to contact support.`}
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
