import React from 'react';
import '../../style.css';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Show label that represents visual percentage. EG. 60% */
    label?: React.ReactNode;
    /** Hide's the label visually. */
    isLabelHidden?: boolean;
    /** Maximum value progress can reach */
    max?: number;
    /** Minimum value progress can begin from */
    min?: number;
    /** Current value of progress */
    now?: number;
    /** Additional custom classNames */
    className?: string;
}
declare const ProgressBar: ({ label, isLabelHidden, max, min, now, className, ...rest }: ProgressBarProps) => JSX.Element;
export default ProgressBar;
