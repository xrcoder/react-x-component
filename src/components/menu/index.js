import React from 'react';
import PropTypes from 'prop-types';
// import './index.scss';

const XMenu = (props) => {
    const {type,menuList} = props
    return (
        <div className="x-menu">
            {
                type === 'horizontal' ?
                    <ul className="x-menu-horizontal">
                        {
                            menuList.map((item, index) => {
                                return <li key={item.id}
                                    className={location.pathname.indexOf(item.codeName) > -1 ? 'active' : null}
                                    onClick={() => {
                                        props.onClick(item)
                                    }}>{item.name}</li>;
                            })
                        }
                    </ul> : null
            }
        </div>
    )
}
export default XMenu;

XMenu.propTypes = {
    menuList: PropTypes.array,
    type: PropTypes.oneOf(['horizontal', 'vertical']),
    onClick: PropTypes.func
};

XMenu.defaultProps = {
    menuList: [],
    type: 'vertical',
    onClick: () => {
    }
};