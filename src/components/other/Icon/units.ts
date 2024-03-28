import styled from '@emotion/styled';

import * as T from './types';

export const IconWrapper = styled.span<Omit<T.IIcon, 'iconName'>>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ size = 14 }) => `${size}px`};
    height: ${({ size = 14 }) => `${size}px`};

    & > svg {
        width: ${({ size = 14 }) => `${size}px`};
        height: ${({ size = 14 }) => `${size}px`};

        path {
            fill: ${({ color }) => color};
            stroke: ${({ color, isStroke }) => isStroke && color};

            transition: all 0.15s ease-in-out;
        }
    }

    &:hover > svg path {
        fill: ${({ hoverColor }) => hoverColor};
        stroke: ${({ hoverColor, isStroke }) => isStroke && hoverColor};
    }
`;
