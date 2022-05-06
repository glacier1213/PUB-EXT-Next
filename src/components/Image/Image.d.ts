import React from 'react';
import '../../style.css';
export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    /** Sets image shape as rounded. */
    rounded?: boolean;
    /** Sets image shape as circle. */
    roundedCircle?: boolean;
    /** Sets image shape as thumbnail. */
    thumbnail?: boolean;
    /** Use to make larger images scale properly, and never exceed the width of the parent container */
    responsive?: boolean;
    /** Use to stretch a smaller image to the width of the container. */
    fullWidth?: boolean;
    /** Use to add any kind of content like headings, paragraphs, or buttons into a thumbnail, to create a thumbnail tile effect */
    thumbnailContent?: boolean;
    /** Use to layer text and images for media content like blog comments, tweets, and so forth. */
    mediaObject?: boolean;
    /** Sets the source of the image */
    src: string;
    /** Sets the alternate text for the image */
    alt: string;
}
declare const Image: ({ rounded, roundedCircle, thumbnail, responsive, fullWidth, thumbnailContent, mediaObject, src, alt, ...rest }: ImageProps) => JSX.Element;
export default Image;
