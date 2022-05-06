import React from 'react';
import '../../style.css';
export interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
    /** the language to highlight code in. (pass text to just render plain monospaced text) */
    language?: string;
    /** prop that will be combined with the top level style on the `pre` tag, styles here will overwrite earlier styles. */
    customStyle?: string;
    /** if this is enabled line numbers will be shown next to the code block. */
    showLineNumbers?: boolean;
    /** if `showLineNumbers` is enabled the line numbering will start from here. */
    startingLineNumber?: number;
    /** a boolean value that determines whether or not each line of code should be wrapped in a parent element. */
    wrapLines?: boolean;
    /** Contents of CodeBlock */
    children?: string;
}
declare const CodeBlock: ({ language, customStyle, showLineNumbers, startingLineNumber, wrapLines, children, ...rest }: CodeBlockProps) => JSX.Element;
export default CodeBlock;
