import styled from '@emotion/styled';

import { Button } from 'components/interactions';

import { theme, toEnd } from 'styles';

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

    ${toEnd('mobile')} {
        padding: 0 32px;
    }
`;

export const Logo = styled(LogoSVG)`
    width: 100%;
    min-width: 162px;

    ${toEnd('mobile')} {
        min-width: 140px;
    }
`;

export const ButtonStyled = styled(Button)`
    max-width: 208px;
`;
