import styled from '@emotion/styled';

import { theme } from 'styles/const';

export const QRCodeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 220px;
    height: 220px;
    min-width: 220px;
    min-height: 220px;

    background-color: ${theme.colors.background};

    border-radius: 16px;

    canvas {
        width: 100% !important;
        height: 100% !important;
    }
`;
