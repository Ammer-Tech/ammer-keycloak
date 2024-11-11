import React from 'react';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

export const Error = () => {
    const { isMobile } = useDeviceType();

    // useEffect(() => {
    //     if (message?.type === 'error') {
    //         notification.error(message.summary);
    //     } else if (message?.type === 'success') {
    //         setMessageSuccess(true);
    //     }
    //     // else if (message?.type === 'warning') {
    //     //     notification.warn(message.summary);
    //     // }
    // }, [message]);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Log In"
                onClick={() =>
                    (window.location = 'https://merchants.ammer.io' as
                        | Location
                        | (string & Location))
                }
            />

            <STYLE.PageContent>
                <Form padding={isMobile ? '40px 32px' : '60px 80px 40px'} maxWidth="558px">
                    <STYLE.Title>Something went wrong</STYLE.Title>

                    <STYLE.InputsWrapper>
                        <STYLE.TextGray>
                            Please press the button below to go to the app
                        </STYLE.TextGray>

                        <STYLE.Link href="https://merchants.ammer.io/">
                            {'<< Go to Application'}
                        </STYLE.Link>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
};
