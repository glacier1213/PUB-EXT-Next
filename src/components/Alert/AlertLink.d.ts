import React from 'react';
export interface AlertLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    /** Content of alert Link */
    children?: React.ReactNode;
    /** The target of hyperlink */
    href: string;
    /** Additional custom classNames */
    className?: string;
}
declare const AlertLink: {
    ({ children, className, ...rest }: AlertLinkProps): JSX.Element;
    displayName: string;
};
export default AlertLink;
