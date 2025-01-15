import Country from "./Country";
import Weather from "./Weather";

const Display = ({ API_KEY, countries, handleShowButton }) => {
  if (countries.length > 0) {
    if (countries.length > 1) {
      return (
        <div>
          <ul>
            {countries.map((country) => (
              <li key={country.ccn3}>
                {country.name.common}{" "}
                <button onClick={() => handleShowButton(country)}>show</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
     else if (countries.length === 1) {
      return (
        <Country API_KEY={API_KEY} country={countries[0]}/>
      );
    }
  } else {
    return null;
  }
};

export default Display;
