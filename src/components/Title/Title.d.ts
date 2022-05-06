import React from 'react';
import '../../style.css';
/** Types */
declare type levelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
    /** Content of heading */
    children?: React.ReactNode;
    /** Heading level */
    level: levelType;
    /** Additional custom classNames */
    className?: string;
}
declare const Title: ({ children, level, ...rest }: TitleProps) => JSX.Element;
export default Title;
