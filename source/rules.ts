import {Attribute, Dictionary} from "typux";

export class ValidationRule
{

    validate(field : string, value : any, context : ValidationContext) : void
    {

    }

}

export class ValidationContext
{

    public readonly values : Dictionary<any>;

    public isValid(field : string)
    {

    }

    public setValidity(field : string, valid : boolean, message? : string)
    {

    }

}


class EmailValidator extends ValidationRule
{

    static Name = 'email';

    validate(field: string, value: any, context: ValidationContext): void {
        super.validate(field, value, context);
    }
}

class RequiredValidator extends ValidationRule
{

    static Name = 'required';

    validate(field: string, value: any, context: ValidationContext): void {
        if (value === null || value === "" || value === undefined || value === false)
            context.setValidity(field, false, "Field is required");
    }
}


export const Email = Attribute(new EmailValidator()) as PropertyDecorator;
export const Required = Attribute(new RequiredValidator()) as PropertyDecorator;
