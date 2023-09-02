import { checkScale } from "./utils"
import { changeScale } from "./utils"

export default function display(data)
{
    let location = document.getElementById('location')
    let infoContainer = document.getElementById('infoContainer')
    infoContainer.classList.remove('hidden')
    location.innerText = data.name + ', ' + data.sys.country
    displayIcon(data)
    displayDescription(data)
    checkScale(data)
    changeScale(data)
}

export function displayIcon(data)
{

    let icon = document.getElementById('icon')
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}

export function displayDescription(data)
{
    let description = document.getElementById('description')
    let descriptionData = data.weather[0].description
    description.innerText = descriptionData
    
}


