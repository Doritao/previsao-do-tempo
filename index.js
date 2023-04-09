// const fetch = require("node-fetch");
const button = document.querySelector('button')
let titulo = document.querySelector('h2')
let temperatura = document.querySelector('p.temp')
let descricao = document.querySelector('p.descricao')
let umidade = document.querySelector('p.umidade')
button.addEventListener('click', async ()  => {
    const apikey = '4e5d200ed9d80f7dbfc32a78bda1e60c'
    const cityname = document.querySelector('input').value
    let informacoes = await ObterClima(cityname,apikey)
    titulo.innerText = `Tempo em ${cityname}`
    temperatura.innerHTML = `${informacoes.temperature}°C`
    descricao.innerHTML = `${informacoes.descricao}`
    umidade.innerHTML = `Umidade: ${informacoes.umidade}%`
    document.querySelector('img.img-umidade').src = "https://openweathermap.org/img/wn/" + informacoes.icon + ".png"
    console.log( "https://openweathermap.org/img/wn/" + informacoes.icon + ".png")
    console.log(informacoes)
})

function ColocarDados(cityname) {

}


async function ObterClima(cityname, apikey) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
    + "&lang=pt_br"
    + "&units=metric").then(response =>
    response.json())
        let informacoes = {
            temperature: dados.main.temp,
            temp_min: dados.main.temp_min,
            temp_max: dados.main.temp_max,
            descricao: dados.weather[0].description,
            umidade: dados.main.humidity,
            icon: dados.weather[0].icon
        }

        console.log(dados.main.humidity)
        return informacoes
}
