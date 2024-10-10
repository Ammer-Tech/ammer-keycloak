import React, { FC } from 'react';

import CHImg from './images/ch.svg';
import EUImg from './images/eu.svg';
import globalImg from './images/global.svg';

import * as T from './types';
import * as S from './units';

export const PlatformLabel: FC<T.IPlatformLabel> = (props) => {
    const isCH = props.type === 'ch';
    const isEU = props.type === 'eu';

    return (
        <S.Wrapper>
            <S.Icon src={isCH ? CHImg : isEU ? EUImg : globalImg} />

            <S.Text>{isCH ? 'Switzerland' : isEU ? 'Europe' : 'Global'}</S.Text>
        </S.Wrapper>
    );
};
