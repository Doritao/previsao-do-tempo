const fetch = require('node-fetch')
async function ObterClima(cityname, apikey) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
    + "&lang=pt_br"
    + "&units=metric").then(response =>
    response.json())
    console.log(dados)
}




const apikey = '4e5d200ed9d80f7dbfc32a78bda1e60c'
const cityname = 'Rio de Janeiro'
ObterClima(cityname,apikey)