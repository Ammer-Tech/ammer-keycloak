import { HTMLAttributes, ReactElement } from 'react';

export interface IIcon extends HTMLAttributes<HTMLDivElement> {
    icon?: ReactElement;
    size?: number;
    color?: string;
    hoverColor?: string;
    // TODO: delete it after all the icons will be changed from stroke to fill
    isStroke?: boolean;
}
