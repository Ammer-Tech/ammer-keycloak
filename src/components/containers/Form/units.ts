import styled from '@emotion/styled';

import { theme } from 'styles';

import { IForm } from './types';

export const Paper = styled.form<IForm>`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${({ gap = 0 }) => `${gap}px`};

    width: 100%;
    max-width: ${({ maxWidth = '100%' }) => `${maxWidth}`};
    padding: ${({ padding = '24px' }) => `${padding}`};

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadiusPrimary};
`;
