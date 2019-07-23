import React from 'react';
import classnames from 'classnames';
import Single from './single';

function ClearIndicator(props) {
    const {getStyles, innerProps: {ref, ...restInnerProps}} = props;
    return (
        <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
            <div>clear</div>
        </div>
    );
}

function SelectSearch(props) {
    return (
        <Single
            {...props}
            className={classnames('x-select-search', props.className)}
            isSearchable
            isClearable={true}
        />
    )
}

export default SelectSearch;
