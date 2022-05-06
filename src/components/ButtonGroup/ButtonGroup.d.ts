import React from 'react';
import '../../style.css';
/** Types */
declare type sizingType = 'lg' | 'sm' | undefined;
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLElement> {
    /** The custom 'non-default' size of button group */
    size?: sizingType;
    /** Orientation of button group */
    isVertical?: boolean;
    /** Buttons to group */
    children?: React.ReactNode;
    /** Additional custom classNames */
    className?: string;
}
declare const ButtonGroup: ({ size, isVertical, children, ...rest }: ButtonGroupProps) => JSX.Element;
export default ButtonGroup;
