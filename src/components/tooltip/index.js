// import './index.scss';

import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Portal, {isBrowser} from './portal';
import {getTipsPos} from './position';

const defaultColor = '#fff';
const defaultBg = '#333';

const resizeThrottle = 100; //节流
const resizeThreshold = 5; //防抖

function useTipsPos(initialValue = {}) {
    const [pos, setPos] = useState(initialValue);

    let updateFn = (res) => {
        setPos(res);
    };

    return {pos, updateFn};
}

function Tooltip(props) {

    const {children, tagName: TagName, tipClassName, content} = props;
    const oTipsBox = useRef();
    const oTipsTxt = useRef();
    const tipStyle = useTipsPos({left: 0, top: 0});

    let oTipsTarget = null;

    useEffect(() => {
        oTipsTarget = oTipsBox.current.childNodes[0];
        const {tipLeft, tipTop} = getTipsPos(oTipsTarget, oTipsTxt.current);
        tipStyle.updateFn({left: tipLeft, top: tipTop});

        window.addEventListener('scroll', () => {
            console.log(1);
        });

    }, []);

    return (
        <TagName ref={oTipsBox}>
            {children}
            <Portal>
                <div ref={oTipsTxt} style={tipStyle.pos} className={classnames('x-tooltip', tipClassName)}>
                    {content}
                    <span className="x-tooltip-arrow"></span>
                </div>
            </Portal>
        </TagName>
    )
}

Tooltip.propTypes = {
    className: PropTypes.string,
    tipClassName: PropTypes.string,
    style: PropTypes.object,
    tagName: PropTypes.string
}

Tooltip.defaultProps = {
    className: '',
    tipClassName: '',
    style: null,
    tagName: 'div'
}


export default Tooltip;