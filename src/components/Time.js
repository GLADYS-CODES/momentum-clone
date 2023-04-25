import React from 'react'

import Moment from 'react-moment';
import 'moment-timezone';

function Time() {



    let today = new Date();


    let greeting = () => {

if (today.getHours() >= 5 && today.getHours() < 11) {
    return "Good Morning, Gladys"

} else if(today.getHours() >= 11 && today.getHours() < 17) {

    return "Good Afternoon, Gladys"

} else if(today.getHours() >= 17 && today.getHours() < 21) {

    return "Good Evening, Gladys"

} else {
    
        return "Are you doing something productive at this hour?";
}

    }
  return (
    <div>

        <p><Moment format='LT'></Moment></p>
        <p>{greeting()}</p>  
        </div>
  )
}

export default Time;