import React from 'react';

import { Form } from 'components/containers';
import { Footer, Header } from 'components/core';

import { useDeviceType } from 'hooks';
import * as STYLE from 'styles';

import email from 'images/email.png';

export const LoginVerifyEmail = () => {
    const { isMobile } = useDeviceType();

    // useEffect(() => {
    //     if (message?.type === 'error') {
    //         notification.error(message.summary);
    //     }
    //     // else if (message?.type === 'success') {
    //     //     notification.success(message.summary);
    //     // } else if (message?.type === 'warning') {
    //     //     notification.warn(message.summary);
    //     // }
    // }, [message]);

    return (
        <STYLE.PageWrapper>
            <Header
                buttonName="Back to Login"
                // onClick={() => (window.location = url.loginRestartFlowUrl as Location | (string & Location))}
            />

            <STYLE.PageContent>
                <Form padding={isMobile ? '40px 32px' : '60px 75px'} maxWidth="558px">
                    <STYLE.Title>Email verification</STYLE.Title>

                    <STYLE.InputsWrapper>
                        <STYLE.TextGray>
                            An email to verify your email address has been sent to your address:{' '}
                            <STYLE.EmailText>test@test.com</STYLE.EmailText>
                        </STYLE.TextGray>

                        <STYLE.EmailIcon src={email} />

                        <STYLE.TextGray>
                            {'Haven’t received a verification email?'}
                            &nbsp; &nbsp;
                            <STYLE.Link
                                href="/"
                                // href={url.loginAction}
                            >
                                Click to resend
                            </STYLE.Link>
                        </STYLE.TextGray>
                    </STYLE.InputsWrapper>
                </Form>
            </STYLE.PageContent>

            <Footer />

            {/* <NotificationRoot /> */}
        </STYLE.PageWrapper>
    );
};
