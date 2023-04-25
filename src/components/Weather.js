import React,{useEffect, useState} from 'react'

import axios from 'axios';


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=0ab4e70b685ccf6448b9c0720a70ed2b&units=metric';
function Weather() {

const [data, setData] = useState(null);

useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data);

    }).catch((error) => {
        console.log(error)
    })
},[])


console.log(data);

if(!data) return null;


  return (
    <div>
        <p>{data.main.temp.toFixed(0)}</p>
    </div>
  )
}

export default Weather;
