import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from '../App.jsx';

export default function ContactList() {
  const { contacts } = useContext(GlobalContext);

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <Link to={`/View/${index}`}>
            {contact.firstName} {contact.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
