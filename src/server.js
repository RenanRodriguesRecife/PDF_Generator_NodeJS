
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const pdf = require('html-pdf')

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
    ejs.renderFile(filePath,{passengers},(err,html)=>{
        if(err){
            return response.send('Erro na leitura do arquivo')
        }else{
            //cofig do pdf
            const options = {
                height: "11.25in",
                width: "8.5in",
                header:{
                    height: "20mn"
                },
                footer:{
                    height: "20mn"
                }
            }
            
            //criar pdf
            pdf.create(html,options).toFile("report.pdf",(err,data)=>{
                if(err){
                    return response.send("Erro ao gerar o PDF")
                }

                return response.send(html)
            })


            
        }
        
    })
})

app.listen(3000)