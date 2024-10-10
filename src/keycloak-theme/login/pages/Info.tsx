import React, { useEffect, useState } from 'react';
import type { PageProps } from 'keycloakify/login/pages/PageProps';

import { Form, notification, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function Info(props: PageProps<Extract<KcContext, { pageId: 'info.ftl' }>, I18n>) {
    const { kcContext } = props;
    const { message } = kcContext;

    const appLink =
        kcContext.realm.displayName === 'AmmerCapitalMerchants'
            ? 'https://merchant.ammer.group/'
            : kcContext.realm.displayName === 'AmmerCapitalCH'
            ? 'https://merchants.ammer.capital'
            : 'https://merchants.ammer.io/';

    const [isMessageSuccess, setMessageSuccess] = useState(false);

    const { isMobile } = useDeviceType();

    useEffect(() => {
        if (message?.type === 'error') {
            notification.error(message.summary);
        } else if (message?.type === 'success') {
            setMessageSuccess(true);
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
                <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                    <STYLE.Title>
                        {isMessageSuccess ? 'Success' : 'Something went wrong'}
                    </STYLE.Title>

                    <STYLE.InputsWrapper>
                        <STYLE.TextGray>
                            {isMessageSuccess
                                ? message?.summary
                                : 'Please press the button below to go to the app'}
                        </STYLE.TextGray>

                        <STYLE.Link href={appLink}>{'<< Go to Application'}</STYLE.Link>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
}
