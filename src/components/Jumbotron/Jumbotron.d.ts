import React from 'react';
import '../../style.css';
export interface JumbotronProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The content of the jumbotron */
    children?: React.ReactNode;
    /** Determines if the jumbotron takes up the full width on the container with no rounded corners */
    fluid?: boolean;
}
declare const Jumbotron: ({ children, fluid, ...rest }: JumbotronProps) => JSX.Element;
export default Jumbotron;
