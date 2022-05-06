import React from 'react';
export interface FormTextProps extends React.HTMLAttributes<HTMLElement> {
    /** Content of button */
    children?: React.ReactNode;
    /** A convenience prop for add the text-muted class, since it's so commonly used here. */
    isMuted?: boolean;
    /** Hides the label visually while still allowing it to be read by assistive technologies */
    visuallyHidden?: boolean;
    /** Additional custom classNames */
    className?: string;
}
declare const FormText: {
    ({ children, isMuted, className, ...rest }: FormTextProps): JSX.Element;
    displayName: string;
};
export default FormText;
