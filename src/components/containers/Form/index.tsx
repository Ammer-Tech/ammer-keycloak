import React, { FC } from 'react';

import { IForm } from './types';
import * as S from './units';

export const Form: FC<IForm> = ({ children, ...props }) => {
    return <S.Paper {...props}>{children}</S.Paper>;
};
