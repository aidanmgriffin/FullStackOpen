import { useEffect } from "react";
import personService from "../services/person";
import person from "../services/person";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  const addName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (!persons.some((person) => person.name === newName)) {
      personService.create(nameObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    } else {
      let confirmation = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirmation) {
        personService.getAll().then((response) => {
          let toUpdate = response.filter((person) => person.name === newName);
          personService
            .update(toUpdate[0].id, nameObject)
            .then((updateResponse) =>
              setPersons(
                persons.map((updatePerson) =>
                  updatePerson.name === updateResponse.name
                    ? updateResponse
                    : updatePerson
                )
              )
            );
        });
      }
    }

    setNewName("");
    setNewNumber("");
    // alert(message);
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
