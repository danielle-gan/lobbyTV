//API KEY 
let queryURL = "api.openweathermap.org/data/2.5/forecast?";
let lat = "lat=41.69788000&";
let lon = "lon=-72.72371000&";
let apiOptions = "units=imperial&";
let apiKey = "appid=052c1a4835e3512057e216db8dc1211f";/*placeholder*/
let apiURL = "https://" + queryURL + lat + lon + apiOptions + apiKey;


//HTML IDs TO GRAB 
var temp = document.getElementById("CurrentTemp");
var feels = document.getElementById("CurrentFeels");

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

        datesAPIArr = [];
        for (let i = 0; i < data.list.length; i++) {
            datesAPIArr.push(data.list[i].dt_txt.slice(0, 10))
        }

        function getDistinctValues(array) {
            return [...new Set(array)];
        }

        const distinctDatesArr = getDistinctValues(datesAPIArr);

        console.log(distinctDatesArr);

        const MinArr = [];
        const MaxArr = [];
        const DescsArr = [];
        const Descs2Arr = [];

        function returnMin(date) {
            const tempArr = [];

            for (let j = 0; j < data.list.length; j++) {
                if (data.list[j].dt_txt.slice(0, 10) == date) {
                    tempArr.push(Math.round(data.list[j].main.temp_min));
                }
            }
            var min = Math.min(...tempArr);
            return min;
        }

        function returnMax(date) {
            const tempArr = [];

            for (let j = 0; j < data.list.length; j++) {
                if (data.list[j].dt_txt.slice(0, 10) == date) {
                    tempArr.push(Math.round(data.list[j].main.temp_max));
                }
            }
            var max = Math.max(...tempArr);
            return max;
        }

        function returnDescs(date) {
            const tempArr = [];
            for (let j = 0; j < data.list.length; j++) {
                if (data.list[j].dt_txt.slice(0, 10) == date) {
                    tempArr.push(data.list[j].weather[0].main);
                }
            }
            return tempArr[0];
        }

        function returnDescs2(date) {
            const tempArr = [];
            for (let j = 0; j < data.list.length; j++) {
                if (data.list[j].dt_txt.slice(0, 10) == date) {
                    tempArr.push(data.list[j].weather[0].description);
                }
            }
            return tempArr[0];
        }

        for (let i = 0; i < distinctDatesArr.length; i++) {
            MinArr.push(returnMin(distinctDatesArr[i]));
            MaxArr.push(returnMax(distinctDatesArr[i]));
            DescsArr.push(returnDescs(distinctDatesArr[i]));
            Descs2Arr.push(returnDescs2(distinctDatesArr[i]));
        }

        console.log(MinArr, MaxArr);
        console.log(DescsArr, Descs2Arr);

        let currentTemp = Math.round(data.list[0].main.temp);
        let currentFeels = Math.round(data.list[0].main.feels_like);
        let currentDesc = DescsArr[0];
        let currentDesc2 = Descs2Arr[0];
        let currentMin = MinArr[0];
        let currentMax = MaxArr[0];

        let tomorrowDesc = DescsArr[1];
        let tomorrowDesc2 = Descs2Arr[1];
        let tomorrowMin = MinArr[1];
        let tomorrowMax = MaxArr[1];

        let day2Desc = DescsArr[2];
        let day2Desc2 = Descs2Arr[2];
        let day2Min = MinArr[2];
        let day2Max = MaxArr[2];

        let day3Desc = DescsArr[3];
        let day3Desc2 = Descs2Arr[3];
        let day3Min = MinArr[3];
        let day3Max = MaxArr[3];

        // Some arrays to hold things:
        let minsAPIArr = [currentMin, tomorrowMin, day2Min, day3Min];
        let maxsAPIArr = [currentMax, tomorrowMax, day2Max, day3Max];
        let descsAPIArr = [currentDesc, tomorrowDesc, day2Desc, day3Desc]
        let descs2APIArr = [currentDesc2, tomorrowDesc2, day2Desc2, day3Desc2]

            temp.innerHTML = currentTemp + `&deg;F`;
            feels.innerHTML = 'Feels like ' + currentFeels + `&deg;F`;
        //     // animateWeather(currentDesc);

        minArr.forEach((element, index) => {
            element.innerHTML = minsAPIArr[index] + "&deg;F";
        })

        maxArr.forEach((element, index) => {
            element.innerHTML = maxsAPIArr[index] + "&deg;F";
        })

        iconArr.forEach((element, index) => {
            if (descs2APIArr[index] == "few clouds") {
                element.src = "./StaticWeatherIcons/light_clouds.png";
            } else {
                element.src = "./StaticWeatherIcons/" + descsAPIArr[index] + ".png";
            }
        });

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


// function animateWeather(currentDesc) {
// if(currentDesc == "Clear") {
//     sun.style.display = "block"
//     rain.style.display = "none"
//     snow.style.display = "none"
//     Array.from(clouds).forEach(cloud => {
//         cloud.style.display = "none";
//     });
// }
// else if (currentDesc == "Snow") {
//     sun.style.display = "none"
//     rain.style.display = "none"
//     snow.style.display = "block"
//     Array.from(clouds).forEach(cloud => {
//         cloud.style.display = "none";
//     });
// }
// else if (currentDesc == "Rain") {
//     sun.style.display = "none"
//     rain.style.display = "block"
//     snow.style.display = "none"
//     Array.from(clouds).forEach(cloud => {
//         cloud.style.display = "none";
//     });
// }
// else if (currentDesc == "Clouds") {
//     sun.style.display = "none"
//     rain.style.display = "none"
//     snow.style.display = "none"
//     Array.from(clouds).forEach(cloud => {
//         cloud.style.display = "block";
//     });
// }
// }


