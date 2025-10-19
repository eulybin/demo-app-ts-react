import type { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...props }: FormProps) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // auto passes all inputs inside the form that have a 'name' attribute to the new FormData object
        const formData = new FormData(e.currentTarget);

        // make it more accessible, now you can use dot notation, e.g. data.age
        const data = Object.fromEntries(formData);
        onSave(data);
    };

    return (
        <form onSubmit={handleSubmit} {...props}>
            {children}
        </form>
    );
}
