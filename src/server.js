
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

const passengers = [
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
    const filePath = path.join(__dirname,"print.ejs")
    ejs.renderFile(filePath,{passengers},(err,data)=>{
        if(err){
            return response.send('Erro na leitura do arquivo')
        }else{
            return response.send(data)
        }
        
    })
})

app.listen(3000)