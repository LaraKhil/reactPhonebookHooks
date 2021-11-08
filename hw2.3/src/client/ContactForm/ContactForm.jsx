import { useState } from "react";
import s from './ContactForm.module.css';
import buttonStyle from '../../shared/Styles/Button/Button.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ addContact, preventAddSameContacts }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (preventAddSameContacts(name)) {
            alert(`${name} is alredy in your contacts`)
            setName('');
            setNumber('');
            return;
        }

        addContact(name, number);
        setName('');
        setNumber('');
    };

    const onInputChange = (e) => {
        const { value, name } = e.target

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;

        }
    };

    return (
        <>
            <h2 className={s.title}>Phonebook</h2>
            <form onSubmit={onSubmitForm} className={s.contactForm}>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={onInputChange}
                    value={name}
                />
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={onInputChange}
                />
                <button className={buttonStyle.button} type="submit">add</button>
            </form>
        </>
    )

};


ContactForm.propTypes = {
    addContact: PropTypes.func,
    preventAddSameContacts: PropTypes.func.isRequired

}


