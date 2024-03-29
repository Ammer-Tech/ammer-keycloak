import React from 'react';
import { Id, toast, ToastContent, ToastOptions, Zoom } from 'react-toastify';

import * as S from './units';

import 'react-toastify/dist/ReactToastify.css';

export const NotificationRoot = () => {
    return (
        <S.ToastContainerStyled
            position="top-right"
            autoClose={15000}
            // animation type: Zoom, Bounce, Slime, Flip
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            draggable
            rtl={false}
            closeButton={<S.CrossStyled />}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            limit={3}
        />
    );
};

const NotificationWrapper = (title: string, content: any) => (
    <>
        <S.TitleStyled>{title}</S.TitleStyled>

        <S.ContentWrapper>{content}</S.ContentWrapper>
    </>
);

export const notification = {
    success: (
        content: ToastContent<any>,
        options?: ToastOptions<Record<string, any>> | undefined,
    ): Id =>
        toast.success(NotificationWrapper('Success', content), {
            ...options,
        }),
    warn: (
        content: ToastContent<any>,
        options?: ToastOptions<Record<string, any>> | undefined,
    ): Id =>
        toast.warn(NotificationWrapper('Warning', content), {
            ...options,
        }),
    error: (
        content: ToastContent<any>,
        options?: ToastOptions<Record<string, any>> | undefined,
    ): Id =>
        toast.error(NotificationWrapper('Something went wrong', content), {
            ...options,
        }),
};
