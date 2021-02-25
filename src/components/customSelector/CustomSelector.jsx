import React from 'react';
import Select from 'react-select';


const options = [
    { label: 'Spring', value: 'spring' },
    { label: 'Reaxct', value: 'react' },
    {label: 'Redux', value: 'redux'}
]

function CustomSelector(props) {
    return (
        <div>
            <Select options={options} />
        </div>
    )
}

export default CustomSelector;
