let key = 'd79e50c4aee629bdc2fcaa74795b684a'

export default function getNewLocation()
{
    let newLocation = document.getElementById('newLocation')
    let location = newLocation.value
    newLocation.value = ''
    return location
}

export function checkScale(data)
{   
    let scaleChange = document.getElementById('scaleChange')
    //let feelsLike = document.getElementById('feelsLike')
    feelsLike.innerHTML = "Feels like : &nbsp"
    if(scaleChange.checked) 
    {
        temperature.innerText = toFahrenheit(data.main.temp) + "°F"
        feelsLike.innerText += toFahrenheit(data.main.feels_like) + "°F"
    }
    else
    {
        temperature.innerText = toCelsius(data.main.temp) + "°C"
        feelsLike.innerText += toCelsius(data.main.feels_like) + "°C"
    } 
}

export async function changeScale(data)
{
    let scaleChange = document.getElementById('scaleChange')
    scaleChange.addEventListener('click', () =>
    {
        checkScale(data)
        
    })
}

export async function getForecastHourlyPromise(data)
{
    let lat = data.coord.lat
    let lon = data.coord.lon
    let response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`, {mode: 'cors'})
    let forecast = await response.json()
    return forecast
}

export function toCelsius(kelvin)
{
    return Math.round(kelvin - 273.15)
}

export function toFahrenheit(kelvin)
{
    return Math.round((kelvin - 273.15) * 9/5 + 32)
}

export function changeScaleHour(temp, response)
{
    if(scaleChange.checked) temp.innerText = toFahrenheit(response.main.temp) + "°F"
    else temp.innerText = toCelsius(response.main.temp) + "°C"
}

export function getIconSrc(icon)
{
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}