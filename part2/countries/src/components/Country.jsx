import Weather from './Weather'

const Country = ({API_KEY, country}) => {

    return (
        <div>
          <h1>{country.name.common}</h1>{" "}
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p> <b>languages: </b>
          <ul>
            {" "}
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}{" "}
          </ul>{" "}
          <img src={country.flags.png} />
          <h2>Weather in {country.capital} </h2>
          <Weather API_KEY={API_KEY} country={country} />
        </div>
      );
}

export default Country