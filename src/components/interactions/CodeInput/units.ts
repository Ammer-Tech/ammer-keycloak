import styled from '@emotion/styled';

import { theme } from 'styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;

export const Input = styled.input`
    width: 50px;
    height: 60px;

    font-size: 30px;
    font-weight: 700;
    line-height: 158%;

    text-align: center;

    background-color: ${theme.colors.background};

    border-radius: 10px;

    &:focus {
        border-color: #000;

        outline: none;
    }
`;
