import { ButtonHTMLAttributes } from 'react';

import { IconNames } from 'components/other';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    size?: 'medium' | 'small';
    styleScheme?: 'primary' | 'secondary' | 'square';
    maxWidth?: string;
    iconName?: IconNames;
    iconColor?: string;
    iconSize?: number;
    loaderSize?: number;
}

export interface ITextButton extends Omit<IButton, 'size' | 'styleScheme' | 'maxWidth'> {
    text: string;
}

export interface ICircleButton extends IButton {}
