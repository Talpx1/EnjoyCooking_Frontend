import { ButtonHTMLAttributes } from "react";
import Form from "../form/Form";
import Button from "./Button";

type DeleteButton = ButtonHTMLAttributes<HTMLButtonElement> & {confirmText: string} & {entityId: number}

export default function DeleteButton(props: DeleteButton) {

    const {confirmText, entityId, type, ...rest} = props;

    return (
        <Form action={`${entityId}/destroy`} method="post" onSubmit={(event)=>{
            const confirmDelete = confirm(confirmText);
            if(!confirmDelete) event.preventDefault();
        }}>
            <Button type='submit' {...rest}>{props.children}</Button>
        </Form>
    );
};
