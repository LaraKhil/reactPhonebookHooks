import s from './Filter.module.css';
import PropTypes from 'prop-types';

import { useState } from 'react';


export default function Filter({ setFilterValue }) {

    const [inputValue, setInputValue] = useState('');

    const addFilterValue = (e) => {
        const { value } = e.target;
        setInputValue(value)
        setFilterValue(inputValue)
    }

    return (
        <>
            <input
                className={s.filterInput}
                type="text"
                value={inputValue}
                onChange={addFilterValue}
                placeholder='Find contacts by name '
            />
        </>
    )

}

Filter.propTypes = {
    setFilterValue: PropTypes.func.isRequired
}
