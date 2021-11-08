import { useState, useEffect } from "react";
import { v4 } from 'uuid'
import ContactForm from "./client/ContactForm";
import Section from "./shared/components/Section/Section";
import ContactList from "./client/ContactList";
import Filter from "./client/Filter";

import { GlobalStyles } from "./shared/Styles/GlobalStyles";
import s from './shared/Styles/App/App.module.css';


export default function App() {

  const [contacts, setContacts] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    const contactsFromLocalSt = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contactsFromLocalSt);
    if (parseContacts) {
      setContacts(parseContacts)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const preventAddSameContacts = name => {
    if (contacts.length) {
      return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    }
    return false;
  };

  const deleteContact = e => {
    const id = e.target.id;
    setContacts(prev => prev.filter(contact => contact.id !== id))
  };

  const findContact = () =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase()),
    );

  const addContact = (name, number) => {
    if (contacts === []) setContacts([{ id: v4(), name, number }]);

    setContacts(prev => [...prev, { id: v4(), name, number }])
  };

  return (
    <div className={s.appWrapper} >
      <GlobalStyles />
      <ContactForm addContact={addContact} preventAddSameContacts={preventAddSameContacts} />
      <Section title="My Contacts">
        <Filter setFilterValue={setFilterName} />
        <ContactList findContact={findContact} filterName={filterName} state={contacts} deleteContact={deleteContact} />
      </Section>
    </div>
  );
}
