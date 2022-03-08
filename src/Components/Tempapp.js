import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect ( () => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6d9cd02d5b4f2a9c4bb7762413e43f72`
      const response = await fetch(url);
      const resJson =  await response.json();
      return setCity(resJson.main);
    };

    fetchApi();
  },[search]) //we use this Array [] to prevent it to run automatically so it wil only learn when we write in box thats why we use search in that array.

    return (
      <>
          <div className="box">
            <div className="inputData">
             <input
             type = "search"
             value={search}
             className="inputField" 
               onChange= {(event) =>  { setSearch(event.target.value) }}
             />
             </div>

           {!city ? (
             <p className="errorMsg">No Data Found</p>
           ) : (
             <div> 
          <div className="info">
            <h2 className="location">
              <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className = "temp">
              {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
          </div>

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
             </div>
           )}

          </div>
      </>  
    )
}

export default Tempapp;