
import React, {useEffect, useState} from 'react'
import axios from 'axios'



const url ='https://goquotes-api.herokuapp.com/api/v1/random?count=1'

function Quote() {


    const [data, setData] = useState(null)

useEffect(() => {

    axios.get(url).then(response => {
        setData(response.data)
    }).catch(error => {
        console.error(error)

    })

}, [])

if (!data) return null 

  return (
    <div>

<p>{data.quotes[0].text}</p>
<p>{data.quotes[0].author}</p>

    </div>
  )
}

export default Quote