import React from 'react';
interface FormGroupContextInterface {
    isInvalidCon: boolean;
    isRequiredCon: boolean;
}
declare const FormGroupContext: React.Context<FormGroupContextInterface>;
export default FormGroupContext;
