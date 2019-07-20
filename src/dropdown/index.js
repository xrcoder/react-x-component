import React, {useState} from 'react';
import Select from 'react-select';
import classnames from 'classnames';

function selectStyles() {

    const control = function (provided) {
        return {
            ...provided,
            margin: 8,
            display: 'none'
        }
    };

    const menu = function () {
        return null;
    };

    return {control, menu}
}

function useToggleOpen(v) {
    const [isOpen, setIsOpen] = useState(v);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return {isOpen, toggleOpen}
}

function DropdownContainer({children, isOpen, onClose, target}) {
    return (
        <div className="x-dropdown-box">
            {target}
            {isOpen ? <DropdownSelectMenu>{children}</DropdownSelectMenu> : null}
        </div>
    )
}

function DropdownSelectTarget({data, isOpen, onClick}) {
    return (
        <div className={classnames('x-dropdown-select-target', {'x-dropdown-select-target-focus': isOpen})}
             onClick={onClick}>
            {
                data ? data.label : <span className="x-dropdown-placeholder">请选择要输入的内容</span>
            }
        </div>
    )
}

function DropdownSelectMenu({children}) {
    return (
        <div className="x-dropdown-select-menu">{children}</div>
    );
}

function DropdownSelect(props) {

    const openStatus = useToggleOpen(false);

    const [value, setValue] = useState(null);

    return (
        <DropdownContainer
            isOpen={openStatus.isOpen}
            target={<DropdownSelectTarget onClick={openStatus.toggleOpen} data={value} isOpen={openStatus.isOpen}/>}
        >
            <Select
                className="x-dropdown-select-main"
                classNamePrefix="x-dropdown-select"
                menuIsOpen
                onChange={(value) => {
                    setValue(value);
                    openStatus.toggleOpen();
                }}
                value={value}
                styles={selectStyles()}
                options={props.options}
            />
        </DropdownContainer>
    )
}

export default DropdownSelect;
