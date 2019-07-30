import React from 'react';

export default function (props) {
    return (
        <tr {...props}>{props.children}</tr>
    )
}
