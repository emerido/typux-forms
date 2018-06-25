import {Component, ComponentState, ReactNode, StaticLifecycle} from "react";
import {Constructable, reflect} from "typux";
import {ValidationRule} from "./rules";

export interface FormProps<M> {

    model? : M;

    onChange? : (model : M) => any;

    onSubmit? : (model : M) => any;

}

export interface FormClass<P, S, M> extends StaticLifecycle<P & FormProps<M>, S> {

    new (props: P, context?: any): FormInstance<P, S, M>

}

export interface FormInstance<P, S, M> extends Component<P & FormProps<M>, ComponentState> {
    field(name : keyof M) : ReactNode;
}


/**
 * Base form component
 */
export abstract class FormComponentBase<P, S, M>
    extends Component<P & FormProps<M>, S>
    implements FormInstance<P, S, M>
{

    protected schema : any;

    public field(name : keyof M) : ReactNode
    {
        return null;
    }

}

export function FormComponent<M>(model : Constructable<M>) : FormClass<{}, {}, M>;
export function FormComponent<P, M>(model : Constructable<M>) : FormClass<P, {}, M>;
export function FormComponent<P, S, M>(model : Constructable<M>) : FormClass<P, S, M>;

export function FormComponent<P, S, M>(model : Constructable<M>) : FormClass<P, S, M> {

    const info = reflect.getClassInfo(model);

    console.log(info.getProperties().map(x => x.getAttributes(ValidationRule)));

    class Temp extends FormComponentBase<P, S, M>
    {
        protected schema : any = {}
    }

    return Temp;
}