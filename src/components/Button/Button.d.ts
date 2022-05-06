import React from 'react';
import '../../style.css';
/** Types */
declare type variantType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'link' | 'info' | undefined;
declare type sizingType = 'lg' | 'sm' | 'xs' | undefined;
declare type typeType = 'submit' | 'button' | 'reset' | undefined;
declare type asType = 'input';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Content of button */
    children?: React.ReactNode;
    /** The styling variant that you would like to use */
    variant?: variantType;
    /** The custom 'non-default' button size that you would like */
    size?: sizingType;
    /** Is button in Active state */
    active?: boolean;
    /** Option to fit button width to its parent width */
    block?: boolean;
    /** Is button in Disabled state */
    disabled?: boolean;
    /** Link for button. It will render as `<a>` but with button styling */
    href?: string;
    /** Type of button */
    type?: typeType;
    /** Value associated to the button */
    value?: string;
    as?: asType;
    /** Additional custom classNames */
    className?: string;
    /** Onclick action */
    onClick?: React.MouseEventHandler;
}
declare const Button: ({ children, variant, active, disabled, block, size, href, className, ...rest }: ButtonProps) => JSX.Element;
export default Button;
