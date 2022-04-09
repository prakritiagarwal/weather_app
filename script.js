function getWeather() {
    let inputValue = document.getElementById("zipcode_input").value;
    console.log(inputValue);

    let apiKey = '025551c2ec00d510aa3cb30f1a56a741';

    let apiUrl=`https://api.openweathermap.org/geo/1.0/zip?zip=${inputValue},US&appid=${apiKey}`;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((citydataJson) => {
        console.log(citydataJson);
        
        let city=citydataJson.name;
        let lat=citydataJson.lat;
        let lon=citydataJson.lon;
        console.log(city);
        console.log(lat);
        console.log(lon);

        let apiUrl2=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

        fetch(apiUrl2)
        .then((response) => response.json())
        .then((weatherdataJson) => {
            console.log(weatherdataJson);
            let current_temp=weatherdataJson.current.temp;
            let current_condition=weatherdataJson.current.weather[0].description;
            let humidity=weatherdataJson.current.humidity;
            let tempMax = weatherdataJson.daily[0].temp.max;
            let tempMin = weatherdataJson.daily[0].temp.min;  
            const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})
     
            
            document.querySelector("#City").innerText = city;
            document.querySelector("#Temperature").innerText = `${current_temp}°F`;
            document.querySelector("#Date").innerText = date;
            document.querySelector("#Conditions").innerText = current_condition;
             document.querySelector("#Humidity").innerText = `Humididy ${humidity}`;
             document.querySelector("#High").innerText= `High ${tempMax}°F`;
             document.querySelector("#Low").innerText=`Low ${tempMin}°F`  ;


    });
});
}