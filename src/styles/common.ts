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

export const ColumnWrapper = styled.div<{ gap?: number; fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const FlexAlignCenterWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const FlexBetweenWrapper = styled.div<{ gap?: number; fullWidth?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const EmailText = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 158%;

    color: ${theme.colors.blackText};
`;

export const Text = styled.p<{ isCenter?: boolean }>`
    width: fit-content;

    font-size: 16px;
    font-weight: 500;
    line-height: 158%;

    text-align: ${({ isCenter = true }) => isCenter && 'center'};
`;

export const TextGray = styled(Text)`
    color: ${theme.colors.gray};
`;

export const Link = styled.a<{ isButton?: boolean }>`
    width: fit-content;

    font-size: 16px;
    font-weight: 700;
    line-height: 21.6px;

    color: ${theme.colors.blackText};

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
    line-height: 158%;

    text-align: ${({ isCenter }) => isCenter && 'center'};

    ${toEnd('mobile')} {
        font-size: 26px;
        line-height: 158%;
    }
`;

export const InputTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 18.9px;

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
