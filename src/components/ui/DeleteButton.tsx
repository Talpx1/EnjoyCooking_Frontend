import Form from "../form/Form";
import Button from "./Button";

export default function DeleteButton({confirmText, entityId, children}: {confirmText: string, entityId: number, children: any}) {
    return (
        <Form action={`${entityId}/destroy`} method="post" onSubmit={(event)=>{
            const confirmDelete = confirm(confirmText);
            if(!confirmDelete) event.preventDefault();
        }}>
            <Button type='submit'>{children}</Button>
        </Form>
    );
};
