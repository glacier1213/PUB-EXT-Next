import React, { ReactNode } from 'react';
import '../../style.css';
declare type detailData = {
    key: string;
    title: string;
    children: ReactNode;
    className?: string;
};
export interface DetailItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
    /** data used to create the detail item */
    dataItem: detailData;
}
export interface DetailsProps extends React.HTMLAttributes<HTMLDetailsElement> {
    /** An array of data used to create the details */
    data: detailData[];
    /** Additional custom classNames */
    className?: string;
}
declare const Details: {
    ({ className, data, ...rest }: DetailsProps): JSX.Element;
    displayName: string;
};
export default Details;
