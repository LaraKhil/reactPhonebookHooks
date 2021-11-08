import buttonStyle from '../../shared/Styles/Button/Button.module.css';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function PhoneList({ findContact, filterName, state, deleteContact }) {

    return (
        <ul className={s.contactWrapper}>
            {filterName ?
                findContact().map(({ name, number, id }) => <li
                    className={s.contactItem}
                    key={id} >{name} {number}
                    <button id={id} onClick={deleteContact} className={buttonStyle.button}>Delete</button>
                </li>)
                : state.map(({ name, number, id }) => <li
                    className={s.contactItem}
                    key={id} >{name} {number}
                    <button className={buttonStyle.button} id={id} onClick={deleteContact}>Delete</button>
                </li>)}
        </ul>
    )
}

PhoneList.propTypes = {
    findContact: PropTypes.func.isRequired,
    filterName: PropTypes.string,
    state: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

