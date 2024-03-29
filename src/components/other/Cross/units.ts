import styled from '@emotion/styled';

import { theme } from 'styles';

export const IconWrapper = styled.div<{ size?: 'small' | 'normal' }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    height: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    min-width: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    min-height: ${({ size }) => (size === 'small' ? '20px' : '28px')};

    background-color: rgba(145, 145, 162, 0.17);

    border-radius: 6px;

    transition: background-color 0.15s ease-in-out;

    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            background-color: ${theme.colors.box24};
        }
    }
`;
