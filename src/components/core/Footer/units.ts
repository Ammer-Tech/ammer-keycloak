import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as LogoSVG } from './images/logo.svg';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    width: 100%;
    height: 62px;
    padding: 0 40px;
    margin-top: auto;

    background-color: ${theme.colors.white};
`;

export const Logo = styled(LogoSVG)`
    width: 185px;
    height: 16px;
    min-width: 185px;
    min-height: 16px;
`;
