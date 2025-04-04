import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from './const';
import { toEnd } from './media';

export const PageWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    overflow: hidden;
`;

export const PageContent = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: ${theme.maxContentWidth};
    margin: auto 0;
    padding: 32px 0;

    overflow: hidden;

    ${toEnd('mobile')} {
        padding: 32px 16px;
    }
`;

export const ColumnWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    marginTop?: number;
    isCenter?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter }) => isCenter && 'center'};
    flex-direction: column;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

export const FlexAlignCenterWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
    isJustifyCenter?: boolean;
    marginTop?: number;
    withWrap?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    justify-content: ${({ isJustifyCenter = false }) => isJustifyCenter && 'center'};
    flex-wrap: ${({ withWrap }) => withWrap && 'wrap'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

export const FlexBetweenWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
    withWrap?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    justify-content: space-between;
    flex-wrap: ${({ withWrap }) => withWrap && 'wrap'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const EmailText = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 135%;

    color: ${theme.colors.blackText};
`;

export const Text = styled.p<{ isCenter?: boolean; isSmall?: boolean }>`
    width: fit-content;

    font-size: ${({ isSmall }) => (isSmall ? '14px' : '16px')};
    font-weight: 500;
    line-height: 135%;

    text-align: ${({ isCenter = true }) => isCenter && 'center'};
`;

export const TextGray = styled(Text)`
    color: ${theme.colors.gray};
`;

export const Link = styled.a<{ isButton?: boolean; color?: string; isSmall?: boolean }>`
    width: fit-content;

    font-size: ${({ isSmall }) => (isSmall ? '14px' : '16px')};
    font-weight: ${({ isSmall }) => (isSmall ? '500' : '700')};
    line-height: 135%;

    color: ${({ color }) => color || theme.colors.blackText};

    white-space: nowrap;

    cursor: pointer;

    ${({ isButton }) =>
        isButton &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 58px;

            color: ${theme.colors.white};

            background-color: ${theme.colors.blackText};

            border-radius: 40px;
        `}
`;

export const Title = styled.h1<{ isCenter?: boolean }>`
    font-size: 30px;
    font-weight: 700;
    line-height: 135%;

    text-align: ${({ isCenter }) => isCenter && 'center'};

    ${toEnd('mobile')} {
        font-size: 26px;
    }
`;

export const InputTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 135%;

    color: ${theme.colors.blackText};
`;

export const InputsWrapper = styled(ColumnWrapper)<{ marginTop?: number }>`
    gap: ${({ gap = 26 }) => `${gap}px`};
    margin-top: ${({ marginTop = 40 }) => `${marginTop}px`};
`;

export const EmailIcon = styled.img`
    width: 105px;
    height: 111px;
    min-width: 105px;
    min-height: 111px;
    margin: 14px auto 40px;
`;

export const WrongIcon = styled.img`
    width: 96px;
    height: 78px;
    margin: 0 auto 20px;
`;

export const CodeIcon = styled.img`
    width: 65px;
    height: 65px;
    margin: 0 auto 32px;
`;

export const ResendCode = styled(Text)`
    margin: 24px auto 0;

    cursor: pointer;
`;
