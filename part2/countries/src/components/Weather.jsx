import axios from "axios";
import { useState } from "react";

const Weather = ({ API_KEY, country }) => {
  const [temp, setTemp] = useState("")
  const [wind, setWind] = useState("")
  const [description, setDescription] = useState("")
   
  axios
    .get(
      `https://api.weatherbit.io/v2.0/current?city=${country.capital}&country=${country.name.common}&key=${API_KEY}`
    )
    .then((response) => {

      setTemp(response.data.data[0].app_temp)
      setWind(response.data.data[0].wind_spd)
      setDescription( response.data.data[0].weather.description)
    })
    .catch((error) => {
      console.log("error: ", error);
    });

    return ( 
    <div>
        description {description}
        <br/>
        temperature {temp} celsius
        <br/>
        wind {wind} m/s
    </div>
    )
};

export default Weather;
