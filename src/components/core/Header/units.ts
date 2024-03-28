import styled from '@emotion/styled';

import { Button } from 'components/interactions';

import { theme } from 'styles';

import { ReactComponent as LogoSVG } from './images/logo.svg';

export const Wrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    width: 100%;
    height: 100px;
    padding: 0 40px 0 66px;

    background-color: ${theme.colors.white};
`;

export const Logo = styled(LogoSVG)`
    width: 162px;
    height: 34px;
    min-width: 162px;
    min-height: 34px;
`;

export const ButtonStyled = styled(Button)`
    max-width: 208px;
`;
