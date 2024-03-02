import React,{useState} from 'react';
import CityProps from './CityProps';

function CountryProps(props) {
    const [countryName, setCountryName] = useState(props.countryName);
    const [timeZone, setTimeZone] = useState(props.timeZone);
    const [city, setCity] = useState("Vyara");
    const [population , setpopulation] = useState("7.27 Lakhs");

   const  handlecontry = () => {
    setCountryName("USA");
    setTimeZone("GMT-5");
    setCity("New York");
    setpopulation("83.35 Lakhs")
    // <CityProps city = "New York" population ="83.35 Lakhs"/>
    }
    return (
        <>
        <h1>Country : {countryName} </h1>
        <h3>Time Zone is: {timeZone}</h3>
        <CityProps cityname = {city} population = {population}/>
       
        {/* <CityProps/> */}
        <button onClick={handlecontry}>Change</button>
        </>
    );
}

export default CountryProps;