import React, { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Header: FC<T.IHeader> = (props) => {
    return (
        <S.Wrapper>
            <S.Logo />

            {!!props.buttonName && (
                <S.ButtonStyled size="small" onClick={props.onClick}>
                    {props.buttonName}
                </S.ButtonStyled>
            )}
        </S.Wrapper>
    );
};
