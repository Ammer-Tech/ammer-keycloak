import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as loaderSVG } from './images/loader.svg';

const loaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled(loaderSVG)<{
    size?: number;
    isabsolute?: string;
    iswhite?: string;
}>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};

    animation: ${loaderAnimation} 1s linear infinite;

    ${({ isabsolute }) =>
        !!isabsolute &&
        css`
            position: absolute;
            top: 50%;
            left: 50%;
        `}

    & > g > line {
        stroke: ${({ iswhite }) => !!iswhite && theme.colors.white};
    }
`;
