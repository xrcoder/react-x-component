import React from "react";
import classnames from 'classnames';

interface DemoProps {
    name: string
}

export function Demo(props: DemoProps) {
    return (
        <div>hello world {props.name}</div>
    )
}
