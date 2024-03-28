import React, { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Loader: FC<T.ILoader> = ({ size = 24, ...props }) => {
    return (
        <S.Loader
            isabsolute={props.isAbsolute ? 'true' : ''}
            iswhite={props.isWhite ? 'true' : ''}
            className={props.className}
            {...{ size }}
        />
    );
};
