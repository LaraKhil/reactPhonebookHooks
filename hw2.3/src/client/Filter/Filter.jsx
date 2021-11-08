import s from './Filter.module.css';
import PropTypes from 'prop-types';


export default function Filter({ getFilterValue, filterName }) {

    const addFilterValue = (e) => {
        const { value } = e.target;

        getFilterValue(value)
    }

    return (
        <>
            <input
                className={s.filterInput}
                type="text"
                value={filterName}
                onChange={addFilterValue}
                placeholder='Find contacts by name '
            />
        </>
    )

}

Filter.propTypes = {
    setFilterValue: PropTypes.func.isRequired
}
