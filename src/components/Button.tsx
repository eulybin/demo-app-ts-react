import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
    elem: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    elem: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
    if (props.elem === 'anchor') {
        return (
            <a className='button' href='https://google.com' target='_blank' {...props}>
                Anchor
            </a>
        );
    }

    return (
        <button className='button' {...props}>
            {props.children}
        </button>
    );
}
