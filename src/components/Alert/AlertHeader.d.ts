import React from 'react';
declare type levelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
export interface AlertHeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** Content of alert heading */
    children?: React.ReactNode;
    /** Header Level */
    level?: levelType;
    /** Additional custom classNames */
    className?: string;
}
declare const AlertHeader: {
    ({ level, className, children, }: AlertHeaderProps): JSX.Element;
    displayName: string;
};
export default AlertHeader;
