import React from 'react';
import '../../style.css';
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    /** Content of Form */
    children?: React.ReactNode | React.ReactNode[];
    /** Additional custom classNames */
    className?: string;
}
declare const Form: ({ children, className, ...rest }: FormProps) => JSX.Element;
export default Form;
