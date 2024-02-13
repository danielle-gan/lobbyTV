let queryUrl = "api.openweathermap.org/data/2.5/forecast?";
let lat = "lat=41.6892&";
let lon = "lon=72.727&";
let apiOptions = "units=imperial&exclude=minutely,alerts&";
let apiKey = "appid=052c1a4835e3512057e216db8dc1211f"
let file = queryUrl + lat + lon + apiOptions + apiKey;


fetch(file)
.then((response) => response.json())
.then((data) => {
    console.log(data.current.temp);
})