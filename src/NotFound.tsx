import * as React from 'react';

export interface Props {
    content: string;
}

export default class MyComponent extends React.Component<Props, {}> {
    render() {
        return <h2>not found</h2>
    }
}
