import OriginForm from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';
import FormControl from './FormControl';
import FormSelect from './FormSelect';
import FormCheck from './FormCheck';
export declare type FormProps = typeof OriginForm & {
    Group: typeof FormGroup;
    Label: typeof FormLabel;
    Control: typeof FormControl;
    Select: typeof FormSelect;
    Text: typeof FormText;
    Check: typeof FormCheck;
};
declare const Form: FormProps;
export default Form;
