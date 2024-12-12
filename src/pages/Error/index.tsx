import React from 'react';

import { Form, NotificationRoot } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import wrongIcon from 'images/wrong.svg';

export const Error = () => {
    const { isMobile } = useDeviceType();

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
                    <STYLE.WrongIcon src={wrongIcon} />

                    <STYLE.Title isCenter>Something Went Wrong</STYLE.Title>

                    <STYLE.InputsWrapper gap={80} marginTop={24}>
                        <STYLE.Text isCenter>
                            We apologize for the inconvenience. Please try again later or contact
                            support if the issue persists. Thank you for your patience.
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
