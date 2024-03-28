import React, { FC } from 'react';

import * as T from './types';
import * as S from './units';

const ImportedIcon: FC<T.IImportedIcon> = ({ iconName }) => {
    const importedIcon = require(`./icons/${iconName}.svg`);

    const IconComponent = importedIcon?.ReactComponent;

    return <IconComponent />;
};

export const Icon: FC<T.IIcon> = (props) => {
    return (
        <S.IconWrapper {...props}>
            <ImportedIcon iconName={props.iconName} />
        </S.IconWrapper>
    );
};

export { IconNames } from './types';
