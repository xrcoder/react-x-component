import React from 'react';
import {Dropdown} from 'react-overlays';

function MenuContainer({children, show}) {
    return (
        <div className="x-toggle-menucontainer" style={{display: show ? 'flex' : 'none'}}>
            {children}
        </div>
    )
}

function Menu() {
    return (
        <Dropdown.Menu flip>
            {({show, onClose, props}) => (
                <MenuContainer {...props} show={show}>
                    <button type="button" onClick={onClose} style={{textAlign: 'left'}}>
                        Item 1
                    </button>
                    <button type="button" onClick={onClose} style={{textAlign: 'left'}}>
                        Item 2
                    </button>
                </MenuContainer>
            )}
        </Dropdown.Menu>
    )
}

function Toggle({children}) {
    return (
        <Dropdown.Toggle>
            {({toggle, props}) => {
                return (
                    <button {...props} onClick={toggle}>{children}</button>
                )
            }}
        </Dropdown.Toggle>
    )
}

function DropdownButton({show, onToggle, drop, alignEnd, title, role}) {
    return (
        <Dropdown show={show} onToggle={onToggle} drop={drop} alignEnd={alignEnd}>
            {
                ({props}) => {
                    return (
                        <div {...props} className="position-relative">
                            <Toggle>{title}</Toggle>
                            <Menu role={role}/>
                        </div>
                    )
                }
            }
        </Dropdown>
    )
}

export default function () {
    return (
        <DropdownButton alignEnd title="测试"/>
    )
}
