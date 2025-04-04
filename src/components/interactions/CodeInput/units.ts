import styled from '@emotion/styled';

import { additionalBreakpoint, theme } from 'styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    margin: 0 auto;

    ${additionalBreakpoint(450)} {
        gap: 8px;
    }
`;

export const Input = styled.input`
    width: 50px;
    height: 60px;

    font-size: 30px;
    font-weight: 700;
    line-height: 135%;

    text-align: center;

    background-color: ${theme.colors.background};

    border-radius: 10px;

    &:focus {
        border-color: #000;

        outline: none;
    }

    ${additionalBreakpoint(450)} {
        width: 40px;
        height: 50px;
    }
`;
