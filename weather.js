let queryURL = "api.openweathermap.org/data/2.5/forecast?";
let lat = "lat=41.69788000&";
let lon = "lon=-72.72371000&";
let apiOptions = "units=imperial&";
let apiKey = "";/*placeholder*/
let apiURL = "https://" + queryURL + lat + lon + apiOptions + apiKey;


fetch(apiURL)
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log(data);

    let current = data.list[0].main;
    let currentTemp = Math.round(current.temp);
    let currentDesc = data.list[0].weather.main;
    let currentMin = Math.round(current.temp_min);
    let currentMax = Math.round(current.temp_max);

    let tomorrow = data.list[1].main;
    let tomorrowDesc = data.list[1].weather.main;
    let tomorrowMin = Math.round(tomorrow.temp_min);
    let tomorrowMax = Math.round(tomorrow.temp_max);

    let day2 = data.list[2].main;
    let day2Desc = data.list[2].weather.main;
    let day2Min = Math.round(day2.temp_min);
    let day2Max = Math.round(day2.temp_max);

    let day3 = data.list[3].main;
    let day3Desc = data.list[3].weather.main;
    let day3Min = Math.round(day3.temp_min);
    let day3Max = Math.round(day3.temp_max);



    console.log();

})
.catch((error) => {
    console.error("Error fetching data:", error);
});