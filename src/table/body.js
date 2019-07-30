import React from 'react';

export default function (props) {
    return (
        <tbody {...props}>{props.children}</tbody>
    )
}
