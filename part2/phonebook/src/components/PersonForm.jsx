const PersonForm = ({
  persons,
  setPersons,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  const addName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (!persons.some((person) => person.name == newName)) {
      setPersons(persons.concat(nameObject));
    } else {
      let message = `${newName} is already added to phonebook`;
      alert(message);
    }
  };

  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
