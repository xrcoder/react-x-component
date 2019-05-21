import React from 'react';

export default props => {
    const {type, height} = props;
    return (
        <div className={`${type}-loading x-loading`} style={{height: `${height}`}}>
            <div className="loading-box">
                <span className="dot dot-1"/>
                <span className="dot dot-2"/>
                <span className="dot dot-3"/>
                <span className="dot dot-4"/>
            </div>
        </div>
    );
};