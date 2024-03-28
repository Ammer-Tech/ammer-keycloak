import { DetailedHTMLProps } from 'react';

export interface IForm
    extends DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    gap?: number;
    maxWidth?: string;
    padding?: string;
}
