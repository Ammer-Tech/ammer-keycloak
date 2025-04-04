import { ButtonHTMLAttributes, ReactElement } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    size?: 'medium' | 'small';
    styleScheme?: 'primary' | 'secondary' | 'square';
    maxWidth?: string;
    icon?: ReactElement;
    iconColor?: string;
    iconSize?: number;
    loaderSize?: number;
    marginTop?: number;
}

export interface ITextButton extends Omit<IButton, 'size' | 'styleScheme' | 'maxWidth'> {
    text: string;
}

export interface ICircleButton extends IButton {}
