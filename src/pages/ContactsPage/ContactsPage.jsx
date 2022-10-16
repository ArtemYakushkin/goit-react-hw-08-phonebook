import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';
import { ContainerContacts, Title, ContactForm, Section, TitleContact, SectionForm, TitleEmpty } from './ContactsPage.styled';

const ContactsPage = () => {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <ContainerContacts>
      <Title>Phonebook</Title>
      <ContactForm>
        <SectionForm>
          <Form onData={onAddContact} />
        </SectionForm>
        <Section>
          <TitleContact>Contacts</TitleContact>
          <Filter value={filter} onChangeFilter={onSetFilter} />
            {empty() ? (
              <>
                <ContactList
                  contacts={contacts}
                  onDeleteContact={onDeleteContact}
                />
              </>
            ) : (
              <TitleEmpty>
                Phonebook is empty! Add your contacts.
              </TitleEmpty>
            )}
          </Section>
      </ContactForm>
    </ContainerContacts>
  );
};
export default ContactsPage;