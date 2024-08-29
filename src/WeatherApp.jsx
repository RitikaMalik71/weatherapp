import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherinfo ,setweatherinfo]=useState({
        city :"Delhi",
         feels_like : 24.84,
         temp :25.05,
         tempMin : 25.05,
         tempMax : 25.05,
         humidity : 47,
         weather :"haze",
     });
     let updateInfo=(result)=>{
        setweatherinfo(result);
    }
    return(  
        <div> <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox newinfo={weatherinfo}/>
        </div>
      );
}