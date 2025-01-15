import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./components/Error";
import Display from "./components/Display";
import Country from "./components/Country";
const API_KEY = import.meta.env.VITE_SOME_KEY;

function App() {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (country) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then((response) => {
          setErrorMessage(null);
          setCountries([response.data]);
        })
        .catch((error) => {
          axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then((response) => {
              let filteredCountries = response.data.filter((n) =>
                n.name.common.toLowerCase().includes(country.toLowerCase())
              );
              if (filteredCountries.length === 0) {
                setErrorMessage("No matches");
                setCountries({});
              } else if (filteredCountries.length <= 10) {
                setErrorMessage(null);
                setCountries(filteredCountries);
              } else if (filteredCountries.length > 10) {
                setErrorMessage("Too many matches, specify another filter");
                setCountries({});
              }
            });
        });
    }
  }, [country]);

  const handleChange = (event) => {
    // event.preventDefault()
    setValue(event.target.value);
    setCountry(event.target.value);
  };

  const handleShowButton = (country) => {
    setCountry(country.name.common);
  };

  return (
    <div>
      find countries <input value={value} onChange={handleChange} />
      <Error message={errorMessage} />
      <Display
        API_KEY={API_KEY}
        countries={countries}
        handleShowButton={handleShowButton}
      />
    </div>
  );
}

export default App;
