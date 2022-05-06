import React from 'react';
import '../../style.css';
export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
    /** Hidden label describing the badge */
    badgeLabel?: string;
    /** Hidden label describing the badge */
    visible?: boolean;
    /** Contents of badge */
    children?: React.ReactNode;
    /** Additional custom classNames */
    className?: string;
}
declare const Badge: ({ badgeLabel, visible, children, className, }: BadgeProps) => JSX.Element | null;
export default Badge;
