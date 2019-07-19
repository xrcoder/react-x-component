import React, {Component} from 'react';
import Select from 'react-select';

const stateOptions = [
    {value: 'AL', label: 'Alabama'},
    {value: 'AK', label: 'Alaska'},
    {value: 'AS', label: 'American Samoa'},
    {value: 'AZ', label: 'Arizona'},
    {value: 'AR', label: 'Arkansas'},
    {value: 'CA', label: 'California'},
    {value: 'CO', label: 'Colorado'},
    {value: 'CT', label: 'Connecticut'},
    {value: 'DE', label: 'Delaware'},
    {value: 'DC', label: 'District Of Columbia'},
    {value: 'FM', label: 'Federated States Of Micronesia'},
    {value: 'FL', label: 'Florida'},
    {value: 'GA', label: 'Georgia'},
    {value: 'GU', label: 'Guam'},
    {value: 'HI', label: 'Hawaii'},
    {value: 'ID', label: 'Idaho'},
    {value: 'IL', label: 'Illinois'},
    {value: 'IN', label: 'Indiana'},
    {value: 'IA', label: 'Iowa'},
    {value: 'KS', label: 'Kansas'},
    {value: 'KY', label: 'Kentucky'},
    {value: 'LA', label: 'Louisiana'},
    {value: 'ME', label: 'Maine'},
    {value: 'MH', label: 'Marshall Islands'},
    {value: 'MD', label: 'Maryland'},
    {value: 'MA', label: 'Massachusetts'},
    {value: 'MI', label: 'Michigan'},
    {value: 'MN', label: 'Minnesota'},
    {value: 'MS', label: 'Mississippi'},
    {value: 'MO', label: 'Missouri'},
    {value: 'MT', label: 'Montana'},
    {value: 'NE', label: 'Nebraska'},
    {value: 'NV', label: 'Nevada'},
    {value: 'NH', label: 'New Hampshire'},
    {value: 'NJ', label: 'New Jersey'},
    {value: 'NM', label: 'New Mexico'},
    {value: 'NY', label: 'New York'},
    {value: 'NC', label: 'North Carolina'},
    {value: 'ND', label: 'North Dakota'},
    {value: 'MP', label: 'Northern Mariana Islands'},
    {value: 'OH', label: 'Ohio'},
    {value: 'OK', label: 'Oklahoma'},
    {value: 'OR', label: 'Oregon'},
    {value: 'PW', label: 'Palau'},
    {value: 'PA', label: 'Pennsylvania'},
    {value: 'PR', label: 'Puerto Rico'},
    {value: 'RI', label: 'Rhode Island'},
    {value: 'SC', label: 'South Carolina'},
    {value: 'SD', label: 'South Dakota'},
    {value: 'TN', label: 'Tennessee'},
    {value: 'TX', label: 'Texas'},
    {value: 'UT', label: 'Utah'},
    {value: 'VT', label: 'Vermont'},
    {value: 'VI', label: 'Virgin Islands'},
    {value: 'VA', label: 'Virginia'},
    {value: 'WA', label: 'Washington'},
    {value: 'WV', label: 'West Virginia'},
    {value: 'WI', label: 'Wisconsin'},
    {value: 'WY', label: 'Wyoming'},
];

const DropdownBox = ({children, isOpen, onClose, target}) => (
    <div className="x-dropdown-box">
        {target}
    </div>
);

const DropdownSelectTarget = ({value}) => {
    return (
        <div className="x-dropdown-select-target">
            {
                value ? value : <span className="x-dropdown-placeholder">请选择要输入的内容</span>
            }
        </div>
    )
};

function DropdownSelect(props) {
    return (
        <DropdownBox target={<DropdownSelectTarget value={'加利福尼亚'}/>}>

        </DropdownBox>
    )
}


export default DropdownSelect;

// export default class extends Component {
//
//     state = {isOpen: false, value: undefined};
//
//     toggleOpen = () => {
//         this.setState(state => ({isOpen: !state.isOpen}));
//     };
//
//     onSelectChange = value => {
//         this.toggleOpen();
//         this.setState({value});
//     };
//
//     render() {
//         const {isOpen, value} = this.state;
//         return (
//             <Dropdown
//                 isOpen={isOpen}
//                 onClose={this.toggleOpen}
//                 target={<span onClick={this.toggleOpen}>测试 {value && value.label}</span>}
//             >
//                 <Select
//                     classNamePrefix={'x'}
//                     menuIsOpen={isOpen}
//                     onChange={this.onSelectChange}
//                     name="color"
//                     options={stateOptions}
//                 />
//             </Dropdown>
//         );
//     }
// }
