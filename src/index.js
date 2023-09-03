
import display from "./ui";
import getNewLocation from "./utils";
let location = "London";
let form = document.getElementById('locationForm')
let key = 'd79e50c4aee629bdc2fcaa74795b684a'
let weatherData;
let nav = document.querySelector('nav')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let forecastHourly = document.getElementById('forecastHourly')

prev.addEventListener('click', () =>
{

    forecastHourly.scrollLeft -= 200


})

next.addEventListener('click', () =>
{
    forecastHourly.scrollLeft += 200

})

if(window.innerWidth < 500)
    {
        nav.style.flexDirection = "column"
    }


window.addEventListener('resize', () =>
{
    if(window.innerWidth < 500)
    {
        nav.style.flexDirection = "column"
    }
    else nav.style.flexDirection = "row"
})


displayData()

async function getDataPromise()
{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`, {mode: 'cors'})
    weatherData = await response.json()
    return weatherData
}

form.addEventListener('submit', (event) =>
{
    location = getNewLocation()
    displayData()
    event.preventDefault()
})

   
function displayData()
{   
    let data = getDataPromise()

    data.then((result) =>
    {   
        if(result.name) display(result)
        else alert('We do not provide information for this location!')
    })
}


