

//API KEY 
let queryURL = "api.openweathermap.org/data/2.5/forecast?";
let lat = "lat=41.69788000&";
let lon = "lon=-72.72371000&";
let apiOptions = "units=imperial&";
let apiKey = "appid=052c1a4835e3512057e216db8dc1211f";/*placeholder*/
let apiURL = "https://" + queryURL + lat + lon + apiOptions + apiKey;


//HTML IDs TO GRAB 
var temp = document.getElementById("CurrentTemp");

var tempmin = document.getElementById("CurrentMin");
var tempmax = document.getElementById("CurrentMax");
var tempicon = document.getElementById("CurrentIcon");

var tomorrowmin = document.getElementById("TomorrowMin");
var tomorrowmax = document.getElementById("TomorrowMax");
var tomorrowicon = document.getElementById("TomorrowIcon");

var day2min = document.getElementById("Day2Min");
var day2max= document.getElementById("Day2Max");
var day2icon = document.getElementById("Day2Icon");

var day3min = document.getElementById("Day3Min");
var day3max= document.getElementById("Day3Max");
var day3icon = document.getElementById("Day3Icon");

minArr = [tempmin, tomorrowmin, day2min, day3min];
maxArr = [tempmax, tomorrowmax, day2max, day3max];
iconArr = [tempicon, tomorrowicon, day2icon, day3icon]; 

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
    let currentDesc = data.list[0].weather[0].main;
    let currentDesc2 = data.list[0].weather[0].description;
    let currentMin = Math.round(current.temp_min);
    let currentMax = Math.round(current.temp_max);

    let tomorrow = data.list[1].main;
    let tomorrowDesc = data.list[1].weather[0].main;
    let tomorrowDesc2 = data.list[1].weather[0].description;
    let tomorrowMin = Math.round(tomorrow.temp_min);
    let tomorrowMax = Math.round(tomorrow.temp_max);

    let day2 = data.list[2].main;
    let day2Desc = data.list[2].weather[0].main;
    let day2Desc2 = data.list[2].weather[0].description;
    let day2Min = Math.round(day2.temp_min);
    let day2Max = Math.round(day2.temp_max);

    let day3 = data.list[3].main;
    let day3Desc = data.list[3].weather[0].main;
    let day3Desc2 = data.list[3].weather[0].description;
    let day3Min = Math.round(day3.temp_min);
    let day3Max = Math.round(day3.temp_max);

    // Some arrays to hold things:
    let minsAPIArr = [currentMin, tomorrowMin, day2Min, day3Min];
    let maxsAPIArr = [currentMax, tomorrowMax, day2Max, day3Max];
    let descsAPIArr = [currentDesc, tomorrowDesc, day2Desc, day3Desc]
    let descs2APIArr = [currentDesc2, tomorrowDesc2, day2Desc2, day3Desc2]

    temp.innerHTML = currentTemp + "&deg;F"; 

minArr.forEach((element, index) => {
    element.innerHTML = "Lo " + minsAPIArr[index] + "&deg;F";
})

maxArr.forEach((element, index) => {
    element.innerHTML = "Hi " + maxsAPIArr[index] + "&deg;F";
})

iconArr.forEach((element, index) => {
    if (descs2APIArr[index] == "few clouds") {
      element.src = "./weather_icons/light_clouds.png";
    } else {
      element.src = "./weather_icons/" + descsAPIArr[index] + ".png";
    }
  });




// TEST to make sure I'm getting the info I need :) 
    function logAll(i) {
        console.log(i);
    }

})
.catch((error) => {
    console.error("Error fetching data:", error);
});



