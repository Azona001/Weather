import './style.css';
import { button } from './button.js';
import getData  from './getData.js';
import { displayMessage } from './displayMessage.js'

console.log(button);

const modal = document.querySelector('.modal');
const form = document.getElementById('getWeather');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.input');
    const apiKey = "8f97b6edbb52d3821d7ee56f654273ed";
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${apiKey}`;

    const fetchData = fetch(url1);
    fetchData.then((response) => {
        if (!response.ok && response.headers.get('content-type') !== 'application/json') {
            throw new Error(`HTTP error: ${response.status}`);  
        }
        return response.json();
    })
    .then(data => getData(data))
    .catch((error) => {
        
        if (error) modal.classList.remove("modal");
        displayMessage(`Weather Data not valid:<br> ${error}! 
            <br>Check search spelling is valid !`);
        
    });
    input.value = '';
});


const close = document.querySelector('.close');
close.addEventListener('click', () => {
    modal.classList.add("modal");
});