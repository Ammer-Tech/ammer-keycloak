import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import * as T from './types';

const ButtonBase = styled.button<T.IButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    ${({ size }) =>
        size === 'small'
            ? css`
                  height: 40px;

                  font-weight: ${theme.text.normal.fontWeight};
                  font-size: ${theme.text.small.fontSize};
              `
            : css`
                  height: 58px;

                  font-weight: ${theme.text.extraHuge.fontWeight};
                  font-size: ${theme.text.normal.fontSize};
              `}

    white-space: nowrap;

    width: 100%;
    padding: 0 24px;

    border: none;
    border-radius: 40px;

    transition: all 0.15s ease-in-out;

    user-select: none;

    & * path {
        transition: fill 0.15s ease-in-out;
    }

    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }
`;

const primaryButtonStyle = css`
    color: ${theme.colors.white};

    background-color: ${theme.colors.blackText};

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: #353535;
        }

        &:not(:disabled):active {
            background-color: #353535;
        }
    }

    &:disabled {
        color: ${theme.colors.gray};

        background-color: ${theme.colors.background};
    }
`;

const secondaryButtonStyle = css`
    color: ${theme.colors.blackText};

    background-color: ${theme.colors.background};

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: #ededed;
        }

        &:not(:disabled):active {
            background-color: #ededed;
        }
    }

    &:disabled {
        color: ${theme.colors.gray};
    }
`;

const squareButtonStyle = css`
    width: 48px;
    height: 48px;
    padding: 10px;

    color: ${theme.colors.blackText};

    background-color: ${theme.colors.white};

    border-radius: 14px;

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: ${theme.colors.blackText};

            color: ${theme.colors.white};

            & * path {
                fill: ${theme.colors.white};
            }
        }

        &:not(:disabled):active {
            background-color: ${theme.colors.blackText};

            color: ${theme.colors.white};

            & * path {
                fill: ${theme.colors.white};
            }
        }
    }

    &:disabled {
        color: ${theme.colors.gray};

        & * path {
            fill: ${theme.colors.gray};
        }
    }
`;

export const Button = styled(ButtonBase)<T.IButton>`
    ${({ styleScheme = 'primary' }) =>
        styleScheme === 'secondary'
            ? secondaryButtonStyle
            : styleScheme === 'square'
            ? squareButtonStyle
            : primaryButtonStyle}

    max-width: ${({ maxWidth = '100%' }) => maxWidth};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

export const TextButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 0;

    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${theme.colors.blackText};

    text-decoration: underline;
    text-decoration-color: transparent;

    background-color: transparent;
    border-radius: ${theme.borderRadiusSecondary};

    transition: all 0.15s ease-in-out;

    @media (hover: hover) {
        &:not(:disabled):hover {
            text-decoration-color: ${theme.colors.blackText};
        }
    }
`;
