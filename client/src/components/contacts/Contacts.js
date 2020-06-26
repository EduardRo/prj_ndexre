import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  console.log({ contacts });
  return (
    <Fragment>
      {contacts.map((contact) => (
        <div className='text-center'>
          <ContactItem contact={contact} key={contact.id} />
        </div>
      ))}
    </Fragment>
  );
};

export default Contacts;
