import React, { FC } from 'react';

import { Loader } from 'components/core';

import * as T from './types';
import * as S from './units';

export const Button: FC<T.IButton> = (props) => {
    return (
        <S.Button size={props.size || 'medium'} {...props}>
            {props.isLoading ? (
                <Loader size={props.loaderSize || (props.styleScheme === 'square' ? 16 : 20)} />
            ) : (
                <>
                    {props.iconName && (
                        <S.IconStyled
                            iconName={props.iconName}
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
                props.iconName && (
                    <S.IconStyled
                        iconName={props.iconName}
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
