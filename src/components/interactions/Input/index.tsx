import React, { FocusEvent, forwardRef, RefObject, useEffect, useRef, useState } from 'react';

import { Expand } from 'components/other';

import * as T from './types';
import * as S from './units';

export const Input = forwardRef<HTMLInputElement, T.IInput>((props, ref) => {
    const [isFocused, setFocused] = useState(false);
    const [isError, setError] = useState(false);

    const inputRef = (ref as RefObject<HTMLInputElement>) || useRef<HTMLInputElement>(null);

    useEffect(() => {
        setError(false);
    }, [props.value]);

    const clickInputFocusHandler = () => {
        !!inputRef.current && inputRef.current.focus();
    };

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false);

        if (props.isRequired && props.value === '') {
            setError(true);
        }

        !!props.blurHandler && props.blurHandler(e);

        // it is needed to remove spaces at the start and end of the string and not to send extra symbols to the backend
        !!props.setValue && props.setValue(props.value.trim());
    };

    const onFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true);

        setError(false);

        !!props.focusHandler && props.focusHandler(e);
    };

    return (
        <S.Wrapper {...props}>
            <S.InputWrapper
                isError={!!props.isError || isError}
                isDisabled={!!props.disabled}
                onClick={clickInputFocusHandler}
                {...{ isFocused }}
            >
                <S.Input
                    ref={inputRef}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => {
                        !!props.onChangeHelpFunc && props.onChangeHelpFunc();

                        !!props.onChange
                            ? props.onChange(e)
                            : !!props.setValue && props.setValue(e.target.value);
                    }}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    withPadding={!props.isLabelRight && !!props.label}
                    {...props.inputProps}
                    {...{ onFocus, onBlur }}
                />

                {(!!props.label || props.isClearable) &&
                    (!!props.isLabelRight || props.isClearable ? (
                        <S.RightLabel
                            isError={!!props.isError || isError}
                            isClearable={props.isClearable}
                            onClick={() =>
                                props.isClearable && !!props.setValue && props.setValue('')
                            }
                        >
                            {props.isClearable && !!props.value ? 'Clear' : props.label}
                        </S.RightLabel>
                    ) : (
                        <S.Label
                            isError={!!props.isError || isError}
                            isTop={isFocused || !!props.value}
                        >
                            {props.label}
                        </S.Label>
                    ))}
            </S.InputWrapper>

            <S.ErrorWrapper>
                <Expand isOpen={!!props.isError || isError} transition={0.15}>
                    <S.ErrorText>
                        {props.isError ? props.errorText || 'Required field' : 'Required field'}
                    </S.ErrorText>
                </Expand>
            </S.ErrorWrapper>
        </S.Wrapper>
    );
});
