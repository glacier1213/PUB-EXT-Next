import React from 'react';
import '../../style.css';
/** Types */
declare type variantType = 'warning' | 'danger' | 'info' | 'success' | undefined;
export interface ListGroupItemProps {
    /** Sets contextual classes for list item */
    variant?: variantType;
    /** Sets a link for the item */
    href?: string;
    /** Sets list item as active */
    active?: boolean;
    /** The content for the item in the list */
    children: React.ReactNode;
    /** Sets list item state as disabled */
    disabled?: boolean;
    /** Marks a ListGroupItem as actionable, applying
     * additional hover, active and disabled styles for links and buttons. */
    action?: boolean;
}
declare const ListGroupItem: {
    ({ active, href, disabled, action, variant, children, ...rest }: ListGroupItemProps): JSX.Element;
    displayName: string;
};
export default ListGroupItem;
