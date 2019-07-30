import React from 'react';
import classnames from 'classnames';

export default function (props) {
    return (
        <div className={classnames('x-table-container', props.className)}>
            <table className="x-table">{props.children}</table>
        </div>
    )
}
