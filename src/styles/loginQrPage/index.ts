import styled from '@emotion/styled';

import { Input } from 'components/interactions';

import { theme } from 'styles/const';

export const InputStyled = styled(Input)`
    display: none;
`;

export const QRCodeImage = styled.img`
    width: 220px;
    height: 220px;
    min-width: 220px;
    min-height: 220px;

    background-color: ${theme.colors.background};

    border-radius: 16px;
`;
