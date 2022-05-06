import OriginAlert from './Alert';
import AlertHeader from './AlertHeader';
import AlertBody from './AlertBody';
import AlertLink from './AlertLink';
export declare type AlertProps = typeof OriginAlert & {
    Header: typeof AlertHeader;
    Body: typeof AlertBody;
    Link: typeof AlertLink;
};
declare const Alert: AlertProps;
export default Alert;
