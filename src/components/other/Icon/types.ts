import { HTMLAttributes } from 'react';

export interface IImportedIcon {
    iconName: IconNames;
}

export interface IIcon extends HTMLAttributes<HTMLDivElement> {
    iconName: IconNames;
    size?: number;
    color?: string;
    hoverColor?: string;
    // TODO: delete it after all the icons will be changed from stroke to fill
    isStroke?: boolean;
}

// address = 'icon-address',
export enum IconNames {}
