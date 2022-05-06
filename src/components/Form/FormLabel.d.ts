import React from 'react';
export interface FormLabelProps extends React.HTMLAttributes<HTMLElement> {
    /** Content of button */
    children?: React.ReactNode;
    /** Uses controlId from <FormGroup> if not explicitly specified. */
    htmlFor?: string;
    /** Hides the label visually while still allowing it to be read by assistive technologies */
    isVisuallyHidden?: boolean;
    /** Applies 'require' styling to form label */
    isRequired?: boolean;
    /** Allows for the customization of "required" label. It is helpful for translations. Default: "required" */
    requiredText?: string;
    /** Additional custom classNames */
    className?: string;
}
declare const FormLabel: {
    ({ children, htmlFor, isVisuallyHidden, isRequired, requiredText, className, ...rest }: FormLabelProps): JSX.Element;
    displayName: string;
};
export default FormLabel;
