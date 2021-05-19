
const form = document.querySelector('#submit_form');
form.addEventListener('submit', handleSubmit);

//function to handle submit event when clicking on enter
async function handleSubmit() {
    event.preventDefault();
    const inputvalue = document.querySelector('#input-id').value;

    const cityName = inputvalue.trim();
    console.log(cityName);

    try {
        const endpoint = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&appid=5f10291431768030c19bf09d963d646f`)
            //Promises chaining
            .then(response => response.json())
            .then(data => {
                var tempvalue = data['main']['temp'];
                displayWeather(tempvalue);
                console.log(tempvalue);
            })
            .catch(err => alert('wrong city name'))
    } catch (err) {
        console.log('try block get some errors')
    }
}

//function to display values
function displayWeather(temp){
    document.getElementById('result-id').innerHTML = temp;
}






