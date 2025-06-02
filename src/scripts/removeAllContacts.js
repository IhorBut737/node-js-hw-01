import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts successfully deleted.');
  } catch (error) {
    console.error('Error deleting contacts:', error.message);
  }
};

removeAllContacts();
