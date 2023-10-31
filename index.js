var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Fixed the variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#Wind'); // Fixed the capitalization

var apik = "862bf8fca2b4fc61c6a866ed84dc7944";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik) // Fixed the URL
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description']; // Fixed the array indexing
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = 'Weather of <span>' + nameval + '</span>'; // Fixed the string interpolation
            temp.innerHTML = 'Temperature:<span>' + convertion(tempature) + ' C</span>'; // Fixed the string interpolation
            description.innerHTML = 'Sky Condition:<span>' + descrip + '</span>'; // Fixed the string interpolation
            wind.innerHTML = 'Wind Speed:<span>' + wndspeed + ' km/h</span>'; 
        })
       
        
});