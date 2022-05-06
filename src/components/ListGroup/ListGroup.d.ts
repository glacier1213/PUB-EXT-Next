import React from 'react';
import '../../style.css';
export interface ListGroupProps {
    /** Change the underlying component CSS base class name and modifier classnames prefix. This is an escape hatch for working with heavily customized bootstrap css. */
    bsPrefix?: string;
    /** Content of the list */
    children?: React.ReactNode;
}
declare const ListGroup: {
    ({ children, ...rest }: ListGroupProps): JSX.Element;
    displayName: string;
};
export default ListGroup;
