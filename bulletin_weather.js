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


// html animation divs
// let rain = document.getElementById("rain");
// let sun = document.getElementById("sun");
// let snow = document.getElementById("snow");
// let clouds = document.getElementsByClassName("clouds");

fetch(apiURL)
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log(data);
    var extracted_time = data.list[0].dt_txt.slice(-8);
    console.log(extracted_time);

    if (extracted_time == "21:00:00") {
        n = 1;
    }
    else if (extracted_time == "18:00:00") {
        n = 2;
    }
    else if (extracted_time == "15:00:00") {
        n = 3;
    }
    else if (extracted_time == "12:00:00") {
        n = 4;
    }
    else if (extracted_time == "09:00:00") {
        n = 5;
    }
    else if (extracted_time == "06:00:00") {
        n = 6;
    }
    else if (extracted_time == "03:00:00") {
        n = 7;
    }
    else if (extracted_time == "00:00:00") {
        n = 8;
    }

    let current = data.list[0].main;
    let currentTemp = Math.round(current.temp);
    let currentDesc = data.list[0].weather[0].main;
    let currentDesc2 = data.list[0].weather[0].description;
    let currentMin = Math.round(current.temp_min);
    let currentMax = Math.round(current.temp_max);

    let tomorrowDesc = data.list[n].weather[0].main;
    let tomorrowDesc2 = data.list[n].weather[0].description;
    let tomorrowMin = Math.round(data.list[n].main.temp_min);
    let tomorrowMax = Math.round(data.list[n+6].main.temp_max);

    let day2Desc = data.list[n+8].weather[0].main;
    let day2Desc2 = data.list[n+8].weather[0].description;
    let day2Min = Math.round(data.list[n+8].main.temp_min);
    let day2Max = Math.round(data.list[n+14].main.temp_max);

    let day3Desc = data.list[n+16].weather[0].main;
    let day3Desc2 = data.list[n+16].weather[0].description;
    let day3Min = Math.round(data.list[n+16].main.temp_min);
    let day3Max = Math.round(data.list[n+24].main.temp_max);

    // Some arrays to hold things:
    let minsAPIArr = [currentMin, tomorrowMin, day2Min, day3Min];
    let maxsAPIArr = [currentMax, tomorrowMax, day2Max, day3Max];
    let descsAPIArr = [currentDesc, tomorrowDesc, day2Desc, day3Desc]
    let descs2APIArr = [currentDesc2, tomorrowDesc2, day2Desc2, day3Desc2]

    temp.innerHTML = currentTemp + `<span class="font-normal text-4xl">&deg;F</span>`; 
    // animateWeather(currentDesc);

minArr.forEach((element, index) => {
    element.innerHTML = minsAPIArr[index] + "&deg;F";
})

maxArr.forEach((element, index) => {
    element.innerHTML = maxsAPIArr[index] + "&deg;F";
})

iconArr.forEach((element, index) => {
    if (descs2APIArr[index] == "few clouds") {
      element.src = "./weather_icons/light_clouds.png";
    } else {
      element.src = "./bulletin_images/" + descsAPIArr[index] + ".mp4";
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


function animateWeather(currentDesc) {
if(currentDesc == "Clear") {
    sun.style.display = "block"
    rain.style.display = "none"
    snow.style.display = "none"
    Array.from(clouds).forEach(cloud => {
        cloud.style.display = "none";
    });
}
else if (currentDesc == "Snow") {
    sun.style.display = "none"
    rain.style.display = "none"
    snow.style.display = "block"
    Array.from(clouds).forEach(cloud => {
        cloud.style.display = "none";
    });
}
else if (currentDesc == "Rain") {
    sun.style.display = "none"
    rain.style.display = "block"
    snow.style.display = "none"
    Array.from(clouds).forEach(cloud => {
        cloud.style.display = "none";
    });
}
else if (currentDesc == "Clouds") {
    sun.style.display = "none"
    rain.style.display = "none"
    snow.style.display = "none"
    Array.from(clouds).forEach(cloud => {
        cloud.style.display = "block";
    });
}
}


