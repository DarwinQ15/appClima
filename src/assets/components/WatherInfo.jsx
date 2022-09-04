import React, { useState } from "react";

const WatherInfo  = () =>{
    const urlWather = "https://api.openweathermap.org/data/2.5/weather?&appid=c4a73c1447685b8889a2fde13e007cdc"
    const cityUrl = "&q="

    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState({});
    const [location, setLocation] = useState({})

    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

        //weather

        urlWather= urlWather + cityUrl + loc;

        await fetch(urlWather).then((res)=>{
            if(res.ok) throw {res}
            return res.json();
        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData)
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false)
        });

    }
    console.log(getLocation());
}




export default WatherInfo;