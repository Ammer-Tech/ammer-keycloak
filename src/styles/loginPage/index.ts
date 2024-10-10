import styled from '@emotion/styled';

import { ColumnWrapper, FlexAlignCenterWrapper, Link, theme, toEnd } from 'styles';

export const ButtonsWrapper = styled(ColumnWrapper)`
    align-items: center;
    gap: 12px;

    width: 100%;
    margin-top: 60px;
`;

export const SignUpWrapper = styled(FlexAlignCenterWrapper)`
    gap: 12px;

    ${toEnd('mobile')} {
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
    }
`;

export const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: 58px;

    color: ${theme.colors.white};

    background-color: ${theme.colors.blackText};

    border: none;
    border-radius: 40px;

    transition: all 0.15s ease-in-out;

    @media (hover: hover) {
        &:hover {
            background-color: #353535;
        }
    }

    ${toEnd('mobile')} {
        height: 40px;
    }
`;

export const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    min-width: 32px;
    height: 32px;
    min-height: 32px;

    border-radius: 50%;

    background-color: ${theme.colors.white};

    overflow: hidden;

    ${toEnd('mobile')} {
        width: 24px;
        min-width: 24px;
        height: 24px;
        min-height: 24px;
    }
`;

export const SocialIcon = styled.img`
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;

    ${toEnd('mobile')} {
        width: 18px;
        min-width: 18px;
        height: 18px;
        min-height: 18px;
    }
`;

export const LinkStyled = styled(Link)`
    font-size: 12px;
    font-weight: 500;
    line-height: 16.2px;
`;
