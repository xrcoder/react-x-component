import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function Portal({children}) {

    const container = document.createElement('div');
    container.className = 'x-tooltip-portal';
    document.body.appendChild(container);

    useEffect(() => {
        return () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        }
    });

    return ReactDOM.createPortal(children, container);
}

Portal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Portal;