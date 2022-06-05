let weather = {
    apikey: "c0fb1dc649e3641531f4e3d246a518be",
    fetchWeather: function (){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=caracas&units=metric&appid=c0fb1dc649e3641531f4e3d246a518be"
        )
        .then((response) => Response.json())
        .then((data) => console.log(data));
    }
}

