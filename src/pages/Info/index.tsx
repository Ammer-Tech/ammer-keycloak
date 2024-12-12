import React from 'react';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import infoIcon from 'images/info.svg';

export const Info = () => {
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
                <Form padding={isMobile ? '40px 24px' : '60px 80px'} maxWidth="518px">
                    <STYLE.WrongIcon src={infoIcon} />

                    <STYLE.Title isCenter>Information</STYLE.Title>

                    <STYLE.InputsWrapper gap={80} marginTop={24}>
                        <STYLE.Text isCenter>
                            This is an informational message. No action is needed at the moment. If
                            you have any questions, please feel free to contact support.
                        </STYLE.Text>

                        <STYLE.Link href="https://merchants.ammer.io/" isButton>
                            Back to Application
                        </STYLE.Link>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            <NotificationRoot />
        </STYLE.PageWrapper>
    );
};
