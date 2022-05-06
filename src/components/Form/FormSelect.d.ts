import React from 'react';
/** Types */
declare type sizeType = 'lg' | 'sm' | 'default' | undefined;
export interface FormSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    /** Content of button */
    children?: React.ReactNode;
    /** Placeholder content */
    placeholder?: string;
    /** Make the control disabled. */
    isDisabled?: boolean;
    /** Add "aria-invalid="true" to input */
    isInvalid?: boolean;
    /** Add "aria-required="true" to input */
    isRequired?: boolean;
    /** The size attribute of the underlying HTML element. Specifies the number of visible options. */
    htmlSize?: number;
    /** Input size variants: 'default', 'sm', 'lg' */
    size?: sizeType;
    /** A callback fired when the value prop changes */
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    /** Uses controlId from <Form.Group> if not explicitly specified. */
    id?: string;
    /** Additional custom classNames */
    className?: string;
}
declare const FormSelect: React.ForwardRefExoticComponent<FormSelectProps & React.RefAttributes<HTMLSelectElement>>;
export default FormSelect;
