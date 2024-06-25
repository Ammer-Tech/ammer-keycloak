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

export const Text = styled.p`
    font-size: ${theme.text.normal.fontSize};
    font-weight: ${theme.text.extraHuge.fontWeight};
    line-height: 23.2px;
`;

export const TextGray = styled.p`
    width: fit-content;

    font-size: ${theme.text.normal.fontSize};
    font-weight: ${theme.text.extraHuge.fontWeight};
    line-height: 23.2px;

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
    font-size: ${theme.text.extraHuge.fontSize};
    font-weight: ${theme.text.extraHuge.fontWeight};
    line-height: 40.5px;

    ${toEnd('mobile')} {
        font-size: ${theme.text.huge.fontSize};
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
    margin-top: 48px;

    ${toEnd('mobile')} {
        margin-top: 40px;
    }
`;
