import React from 'react';
/** Types */
declare type typeType = 'checkbox' | 'radio' | 'switch' | undefined;
export interface FormCheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** title attribute */
    title?: string;
    /** label attribute */
    label?: React.ReactNode;
    /** The HTML input type, which is only relevant if as is 'input' (the default). */
    type?: typeType;
    /** Make the control disabled. */
    isDisabled?: boolean;
    /** Groups controls horizontally with other <Form.Checks>. */
    isInline?: boolean;
    /** Add "aria-invalid="true" to input */
    isInvalid?: boolean;
    /** Add "aria-required="true" to input */
    isRequired?: boolean;
    /** Uses controlId from <FormGroup> if not explicitly specified. */
    id?: string;
    /** Additional custom classNames */
    className?: string;
}
declare const FormCheck: React.ForwardRefExoticComponent<FormCheckProps & React.RefAttributes<HTMLInputElement>>;
export default FormCheck;
