import React from 'react';
import '../../style.css';
/** Types */
declare type variantType = 'success' | 'warning' | 'danger' | 'info' | undefined;
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The styling variant that you would like to use */
    variant?: variantType;
    /** Show alert */
    isVisible?: boolean;
    /** Content of Alert */
    children?: React.ReactNode;
    /** Additional custom classNames */
    className?: string;
}
declare const Alert: {
    ({ variant, isVisible, className, children, ...rest }: AlertProps): JSX.Element | null;
    displayName: string;
};
export default Alert;
