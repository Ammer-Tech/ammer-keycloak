import React, { FC } from 'react';

import { Icon } from '../Icon';

import { ReactComponent as CrossSVG } from './images/icon-cross-modal.svg';

import * as T from './types';
import * as S from './units';

export const Cross: FC<T.ICross> = (props) => {
    return (
        <S.IconWrapper {...props}>
            <Icon
                icon={<CrossSVG />}
                color="#9191a2"
                size={props.size === 'small' ? 16 : 24}
                isStroke
            />
        </S.IconWrapper>
    );
};
