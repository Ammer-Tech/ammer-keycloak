import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from 'react';

export interface IInput {
    value: string;
    isError?: boolean;
    errorText?: string;
    type?: HTMLInputTypeAttribute;
    label?: string;
    disabled?: boolean;
    inputProps?: Record<string, any>;
    isLabelRight?: boolean;
    placeholder?: string;
    isRequired?: boolean;
    isClearable?: boolean;

    setValue?: (value: string) => void;
    blurHandler?: (value: FocusEvent<HTMLInputElement>) => void;
    focusHandler?: (value: FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    onChangeHelpFunc?: VoidFunction;
}
