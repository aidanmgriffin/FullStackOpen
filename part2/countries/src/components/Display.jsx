const Display = ({ countries }) => {
  if (countries.length > 0) {
    if (countries.length > 1) {
      const countryNames = countries.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ));
      return (
        <div>
          <ul>{countryNames}</ul>
        </div>
      );
    } else if (countries.length === 1) {
      return (
        <div>
          <h1>{countries[0].name.common}</h1> 
          {" "}
          <p>capital {countries[0].capital[0]}</p>
          <p>area {countries[0].area}</p>
          {" "}
          <b>languages: </b>
          <ul> {Object.values(countries[0].languages).map(language => <li key = {language}>{language}</li>)} </ul>
          {" "}
          <img src = {countries[0].flags.png}/>
          

        </div>
      );
    }
  } else {
    return null;
  }
};

export default Display;
