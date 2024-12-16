import React, { ChangeEvent, ClipboardEvent, FC, KeyboardEvent, useRef } from 'react';

import * as T from './types';
import * as S from './units';

export const CodeInput: FC<T.ICodeInput> = (props) => {
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (/^[0-9]$/.test(value) || value === '') {
            const newValues = [...props.values];

            newValues[index] = value;

            props.setValues(newValues);

            if (value !== '' && index < 5) {
                setTimeout(() => {
                    inputsRef.current[index + 1]?.focus();
                }, 10);
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && props.values[index] === '' && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        const pasteData = e.clipboardData.getData('Text');

        if (/^\d+$/.test(pasteData)) {
            const newValues = [...props.values];

            for (let i = 0; i < pasteData.length && i < newValues.length; i++) {
                newValues[i] = pasteData[i];
            }

            props.setValues(newValues);

            const nextIndex =
                pasteData.length >= newValues.length ? newValues.length - 1 : pasteData.length;

            setTimeout(() => {
                inputsRef.current[nextIndex]?.focus();
            }, 10);

            e.preventDefault();
        }
    };

    const onFocus = (index: number) => {
        let currentIndex = index;

        while (currentIndex > 0 && props.values[currentIndex - 1] === '') {
            currentIndex = currentIndex - 1;
        }

        if (currentIndex !== index) {
            inputsRef.current[currentIndex]?.focus();
        }
    };

    return (
        <S.Container>
            {props.values.map((value, index) => (
                <S.Input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    onFocus={() => onFocus(index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                />
            ))}
        </S.Container>
    );
};
