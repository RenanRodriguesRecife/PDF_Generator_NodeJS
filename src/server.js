const express = require('express')
const app = express()

const passagers = [
    {
        name: "MegaMan",
        flightNumber: 4535,
        time: "22h00",
    },
    {
        name: "Zero",
        flightNumber: 1334,
        time: "3h00",
    },
    {
        name: "Ville",
        flightNumber: 5433,
        time: "12h00",
    }
]

app.get('/',(request,response)=>{
    return response.send(passagers)
})

app.listen(3000)