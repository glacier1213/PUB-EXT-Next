import React from 'react';
/** Types */
declare type sizeType = 'lg' | 'sm' | 'default' | undefined;
declare type asType = 'input' | 'textarea' | undefined;
declare type typeType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | undefined;
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement;
export interface FormControlProps extends React.HTMLAttributes<FormControlElement> {
    /** Placeholder content */
    placeholder?: string;
    /** Placeholder content */
    defaultValue?: string | string[] | number;
    /** The value attribute of underlying input */
    value?: string | string[] | number;
    /** The underlying HTML element to use when rendering the FormControl. */
    as?: asType;
    /** The HTML input type, which is only relevant if as is 'input' (the default). */
    type?: typeType;
    /** Make the control disabled. */
    isDisabled?: boolean;
    /** Make the control readonly. */
    isReadOnly?: boolean;
    /** Add "aria-invalid="true" to input */
    isInvalid?: boolean;
    /** Add "aria-required="true" to input */
    isRequired?: boolean;
    /** The size attribute of the underlying HTML element. Specifies the visible width in characters if as is 'input'. */
    htmlSize?: number;
    /** Input size variants: 'default', 'sm', 'lg' */
    size?: sizeType;
    /** A callback fired when the value prop changes */
    onChange?: React.ChangeEventHandler<FormControlElement>;
    /** Uses controlId from <FormGroup> if not explicitly specified. */
    id?: string;
    /** Additional custom classNames */
    className?: string;
}
declare const FormControl: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLTextAreaElement>>;
export default FormControl;
