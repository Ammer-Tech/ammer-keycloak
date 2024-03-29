import React, { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Icon: FC<T.IIcon> = (props) => {
    return <S.IconWrapper {...props}>{props.icon}</S.IconWrapper>;
};
