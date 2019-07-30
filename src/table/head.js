import React from 'react';

export default function (props) {
    return (
        <thead  {...props}>
            <tr>{props.children}</tr>
        </thead>
    )
}
