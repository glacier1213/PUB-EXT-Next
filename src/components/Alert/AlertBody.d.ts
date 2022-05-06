import React from 'react';
export interface AlertBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content of alert body */
    children?: React.ReactNode;
    /** Additional custom classNames */
    className?: string;
}
declare const AlertBody: {
    ({ children, className, ...rest }: AlertBodyProps): JSX.Element;
    displayName: string;
};
export default AlertBody;
