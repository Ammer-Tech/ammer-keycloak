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

export const TextGray = styled.p`
    width: fit-content;

    //styleName: Headline/S;
    font-size: 16px;
    font-weight: 700;
    line-height: 158%;

    text-align: center;

    color: ${theme.colors.gray};
`;

export const Link = styled.a`
    width: fit-content;

    font-size: ${theme.text.normal.fontSize};
    font-weight: ${theme.text.extraHuge.fontWeight};
    line-height: 23.2px;

    color: ${theme.colors.blackText};

    white-space: nowrap;

    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    line-height: 158%;

    text-align: center;

    ${toEnd('mobile')} {
        font-size: 26px;
        line-height: 158%;
    }
`;

export const InputTitle = styled.p`
    font-size: ${theme.text.small.fontSize};
    font-weight: ${theme.text.normal.fontWeight};
    line-height: 18.9px;

    color: ${theme.colors.blackText};
`;

export const InputsWrapper = styled(ColumnWrapper)`
    gap: 26px;
    margin-top: 8px;

    ${toEnd('mobile')} {
        margin-top: 40px;
    }
`;

export const EmailIcon = styled.img`
    width: 105px;
    height: 111px;
    min-width: 105px;
    min-height: 111px;
    margin: 14px auto 40px;
`;
