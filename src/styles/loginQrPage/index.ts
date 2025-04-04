import styled from '@emotion/styled';

import { theme } from 'styles/const';

export const QRCodeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 180px;
    min-width: 180px;
    min-height: 180px;

    background-color: ${theme.colors.background};

    border-radius: 16px;

    canvas {
        width: 100% !important;
        height: 100% !important;
    }
`;
