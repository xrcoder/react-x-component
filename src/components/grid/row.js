import React from 'react';

export default function grid({children}) {

    return (
        <div className={`x-grid-row x-row`}>
            {children}
        </div>
    );

}
