import styled from '@emotion/styled';

import { theme } from 'styles';

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const InputWrapper = styled.div<{
    isError: boolean;
    isFocused: boolean;
    isDisabled: boolean;
}>`
    position: relative;

    display: flex;
    align-items: center;
    gap: 12px;

    width: 100%;
    height: 48px;
    padding: 0 16px;

    background-color: ${({ isError }) => (isError ? theme.colors.red15 : theme.colors.background)};

    border: 2px solid transparent;
    border-radius: ${theme.borderRadiusSecondary};

    &:focus-within {
        border-color: ${({ isError }) => (isError ? theme.colors.red : theme.colors.black)};
    }

    transition: all 0.15s ease-in-out;

    cursor: text;

    /* @media (hover: hover) {
        &:hover {
            background-color: ${({ isFocused, isError, isDisabled }) =>
        !isFocused && !isDisabled && (isError ? theme.colors.red25 : theme.colors.box13)};
        }
    } */
`;

export const Input = styled.input<{ withPadding: boolean }>`
    width: 100%;
    padding: 0;
    padding-top: ${({ withPadding }) => withPadding && '15px'};

    font-weight: ${({ withPadding }) =>
        !withPadding ? theme.text.normal.fontWeight : theme.text.normal.fontWeight};
    font-size: ${({ withPadding }) =>
        !withPadding ? theme.text.tiny.fontSize : theme.text.tiny.fontSize};
    line-height: 135%;

    color: black;

    background-color: transparent;

    text-overflow: ellipsis;

    &::placeholder {
        color: ${theme.colors.gray};
    }

    &:disabled {
        color: ${theme.colors.gray};

        cursor: not-allowed;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: 0 0 0 30px ${theme.colors.background} inset !important;
        transition: all 0s linear !important;
    }
`;

export const Label = styled.p<{ isError: boolean; isTop: boolean }>`
    position: absolute;
    top: ${({ isTop }) => (isTop ? '3px' : '11px')};
    left: 16px;

    width: max-content;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${({ isTop }) =>
        isTop ? theme.text.superTiny.fontSize : theme.text.normal.fontSize};

    color: ${({ isError }) => (isError ? theme.colors.red : theme.colors.gray)};

    user-select: none;

    transition: all 0.15s ease-in-out;
`;

export const RightLabel = styled.p<{ isError: boolean; isClearable?: boolean }>`
    width: max-content;

    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.tiny.fontSize};
    line-height: 135%;

    color: ${({ isError, isClearable }) =>
        isClearable ? theme.colors.blackText : isError ? theme.colors.red : theme.colors.gray};

    user-select: none;

    cursor: ${({ isClearable }) => isClearable && 'pointer'};
`;

export const ErrorText = styled.p`
    width: 100%;
    padding-top: 4px;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${theme.colors.red};

    user-select: none;
`;

export const ErrorWrapper = styled.div`
    position: absolute;
    top: 48px;
    left: 16px;
`;
