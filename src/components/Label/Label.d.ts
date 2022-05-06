import React from 'react';
import '../../style.css';
/** Types */
declare type variantType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | undefined;
export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
    /** Hidden label describing the badge */
    variant?: variantType;
    /** Hidden label describing the badge */
    visible?: boolean;
    /** Contents of label */
    children?: React.ReactNode;
    /** Additional custom classNames */
    className?: string;
}
declare const Label: ({ variant, visible, children, className, }: LabelProps) => JSX.Element | null;
export default Label;
