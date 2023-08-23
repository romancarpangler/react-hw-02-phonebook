import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <ContactForm />
      <div>
        <h2>Contacts: {contacts.length ? contacts.length : 'no data'}</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
