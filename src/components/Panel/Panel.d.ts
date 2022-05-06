import React from 'react';
import '../../style.css';
/** Types */
declare type variantType = 'success' | 'warning' | 'danger' | 'info' | undefined;
declare type headingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
    /** The styling variant that you would like to use */
    variant?: variantType;
    /** The content of panel header */
    headerContent?: React.ReactNode;
    /** The heading level of panel header */
    headerLevel?: headingLevelType;
    /** The content of panel footer */
    footerContent?: React.ReactNode;
    /** Show panel */
    isVisible?: boolean;
    /** Content of panel */
    children?: React.ReactNode;
    /** Additional custom classNames */
    className?: string;
}
declare const Panel: {
    ({ variant, isVisible, className, headerContent, headerLevel, footerContent, children, ...rest }: PanelProps): JSX.Element | null;
    displayName: string;
};
export default Panel;
