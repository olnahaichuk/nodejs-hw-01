import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const removeLastContact = async () => {
  const contacts = readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
    console.log('The last contact removed');
  } else {
    console.log('No contact to remove');
  }
};

removeLastContact();
