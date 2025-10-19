import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
    // tag: ElementType; // name of a component
    tag?: T;
    children: ReactNode; // jsx code or raw text
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({ tag, children, ...props }: ContainerProps<C>) {
    const Component = tag || 'div';
    return <Component {...props}>{children}</Component>;
}
