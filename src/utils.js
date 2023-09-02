

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
    feelsLike.innerText = "Feels like : "
    if(scaleChange.checked) 
    {
        temperature.innerText = Math.round((data.main.temp-273.15) * 9/5 + 32) + "°F"
        feelsLike.innerText += Math.round((data.main.feels_like-273.15) * 9/5 + 32) + "°F"
    }
    else
    {
        temperature.innerText = Math.round(data.main.temp - 273.15) + "°C"
        feelsLike.innerText += Math.round(data.main.feels_like - 273.15) + "°C"
    } 
}

export function changeScale(data)
{
    let scaleChange = document.getElementById('scaleChange')
    scaleChange.addEventListener('click', () =>
    {
        checkScale(data)
    })
}
