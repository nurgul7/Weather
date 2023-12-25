const url = 'https://api.openweathermap.org/data/2.5/'
const key = '8a06b335b38379295233d204bce155ca'

const setQuery = (e) => { //3
    if (e.keyCode == '13') {
        getResult(searchBar.value)
    }
}
const getResult = (cityName) => { //4
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr `
    fetch(query) //5
        .then(weather => weather.json()) //6
        .then((displayResult) => { //7
            let city = document.querySelector('.city')
            city.innerText = `${displayResult.name},${displayResult.sys.country}`
            let temp = document.querySelector('.temp')
            temp.innerText = `${Math.round(displayResult.main.temp)}°C`

            let desc = document.querySelector('.desc')
            desc.innerText = displayResult.weather[0].description

            let minmax = document.querySelector('.minmax')
            minmax.innerText = `${Math.round(displayResult.main.temp_min)}°C/${Math.round(displayResult.main.temp_max)}°C`

        })
}
const searchBar = document.getElementById('searchBar') //1
searchBar.addEventListener('keypress', setQuery) //2