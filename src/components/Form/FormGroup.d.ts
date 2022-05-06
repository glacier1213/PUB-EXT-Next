import React from 'react';
export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
    /** Content of group */
    children?: React.ReactNode;
    /** Unique Id of form group elements */
    controlId?: string;
    /** Additional custom classNames */
    className?: string;
    /** Applies 'require' styling to form group */
    isRequired?: boolean;
    /** Sets whether form input is valid */
    isInvalid?: boolean;
}
declare const FormGroup: {
    ({ children, controlId, isRequired, isInvalid, className, ...rest }: FormGroupProps): JSX.Element;
    displayName: string;
};
export default FormGroup;
