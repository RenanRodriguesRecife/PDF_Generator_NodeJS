
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const puppeteer = require('puppeteer')

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

app.get('/pdf', async (request,response) => {
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()

    await page.goto('https://google.com',{
        waitUntil: 'networkidle0'
    })

    await browser.close()
    return response.send('feito')

})

app.get('/',(request,response)=>{
    const filePath = path.join(__dirname,"print.ejs")
    ejs.renderFile(filePath,{passengers},(err,html)=>{
        if(err){
            return response.send('Erro na leitura do arquivo')
        }
        
        return response.send(html)
            
        })
        

})

app.listen(3000)