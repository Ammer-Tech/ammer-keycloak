import React, { FC } from 'react';

import { Loader } from 'components/core';

import { useDeviceType } from 'hooks';

import * as T from './types';
import * as S from './units';

export const Button: FC<T.IButton> = (props) => {
    const { isMobile } = useDeviceType();

    return (
        <S.Button size={isMobile ? 'small' : props.size || 'medium'} {...props}>
            {props.isLoading ? (
                <Loader size={props.loaderSize || (props.styleScheme === 'square' ? 16 : 20)} />
            ) : (
                <>
                    {props.icon && (
                        <S.IconStyled
                            icon={props.icon}
                            color={props.iconColor}
                            size={props.iconSize || 16}
                        />
                    )}

                    {props.children}
                </>
            )}
        </S.Button>
    );
};

export const TextButton: FC<T.ITextButton> = (props) => {
    return (
        <S.TextButton {...props}>
            {props.isLoading ? (
                <Loader size={10} />
            ) : (
                props.icon && (
                    <S.IconStyled
                        icon={props.icon}
                        color={props.iconColor}
                        size={props.iconSize || 12}
                        isInsideTextButton
                    />
                )
            )}

            {props.text}
        </S.TextButton>
    );
};
