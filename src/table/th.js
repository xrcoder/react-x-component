import React from 'react';

export default function (props) {
    return (
        <th {...props} style={{textAlign: props.align}}>{props.children}</th>
    )
}
