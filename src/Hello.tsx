import * as React from 'react';

export interface Props {
    content: string;
}

export default function MyComponent(props: Props) {
    return <div>{props.content}</div>
}