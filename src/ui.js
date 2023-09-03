
import { checkScale } from "./utils"
import { changeScale } from "./utils"
import { getForecastHourlyPromise } from "./utils"
import { changeScaleHour } from "./utils"
import { getIconSrc } from "./utils"


export default function display(data)
{
    let location = document.getElementById('location')
    location.innerText = data.name + ', ' + data.sys.country
    displayIcon(data)
    displayDescription(data)
    checkScale(data)
    changeScale(data)
    displayHours(data)
}

export function displayIcon(data)
{

    let icon = document.getElementById('icon')
    icon.src = getIconSrc(data.weather[0].icon)
}

export function displayDescription(data)
{
    let description = document.getElementById('description')
    let descriptionData = data.weather[0].description
    description.innerText = descriptionData
    
}


function displayHours(data)
{
 
    let scaleChange = document.getElementById('scaleChange')
    getForecastHourlyPromise(data).then((response) =>
    {   
        console.log(response)
        for(let i = 1; i < 9; i++)
        {
            let cell = document.getElementById(`${i}`)
            let hour = cell.querySelector('.hour')
            let image = cell.querySelector("img")
            let icon = response.list[i].weather[0].icon
            let description = cell.querySelector('.description')
            description.innerText = response.list[i].weather[0].description
            image.src = getIconSrc(icon)
            hour.innerText = response.list[i].dt_txt.slice(10, 16)
            let temp = cell.querySelector('.hourTemp')
            changeScaleHour(temp, response.list[i])
            scaleChange.addEventListener('change', () =>
            {
                changeScaleHour(temp, response.list[i])
            })
        }
        let forecastHourlyContainer = document.getElementById('forecastHourlyContainer')
        forecastHourlyContainer.classList.remove('hidden')
        let infoContainer = document.getElementById('infoContainer')
        infoContainer.classList.remove('hidden')
    })
   

}
