import React from 'react';
import '../../style.css';
/** Types */
declare type colorType = 'muted' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined;
declare type backgroundType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined;
declare type sizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    /** Content of heading */
    children?: React.ReactNode;
    /** Text color */
    color?: colorType;
    /** Background color */
    backgroundColor?: backgroundType;
    /** Is text highlighted */
    mark?: boolean;
    /** Is text code styled */
    code?: boolean;
    /** Is text keyboard styled */
    keyboard?: boolean;
    /** Is text crossed out. Use to indicate text was deleted. */
    deleted?: boolean;
    /** Is text crossed out. Use to indicate text that is no longer relevant. */
    strikethrough?: boolean;
    /** Is text emphasized out */
    strong?: boolean;
    /** Is text italic out */
    italic?: boolean;
    /** Size styling of text */
    size?: sizeType;
    /** Set text as <small> */
    small?: boolean;
    /** use lead styling */
    lead?: boolean;
    /** Additional custom classNames */
    className?: string;
}
declare const Text: ({ children, strong, italic, deleted, strikethrough, mark, code, keyboard, color, backgroundColor, size, small, lead, className, ...rest }: TextProps) => JSX.Element;
export default Text;
