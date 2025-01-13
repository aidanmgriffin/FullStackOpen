const Persons = ({ persons, query }) => {
  const FilteredPersons = persons.map((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <ul>
        {persons.map((person, i) =>
          FilteredPersons[i] ? (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Persons;
