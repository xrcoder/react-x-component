import React from 'react';

export default function (props) {
    return (
        <td {...props} style={{textAlign: props.align}}>{props.children}</td>
    )
}
