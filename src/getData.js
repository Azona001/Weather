export default function getData(b){
    const { main:{temp, temp_min, temp_max, humidity}, weather: [{ description, icon}], wind:{speed}, name, timezone } = b;
    const img = document.querySelector('.weather-icon');
    const tmp = document.querySelector('.degree');
    const humidData = document.getElementById('humidity');
    const windData = document.getElementById('wind');
    const minData = document.getElementById('min');
    const maxData = document.getElementById('max');
    const nameData = document.querySelector('.name');
    const para = document.querySelector('.condition');
    const date = document.querySelector('.date');
    const wrapper = document.querySelector('.wrapper');
    const backdrop = document.querySelector('.backdrop');
    

    const now = new Date();
    const nowM = now.getTime();
    const offset = now.getTimezoneOffset();
    const offsetM = offset * 60000;
    const utc = nowM + offsetM;
    const time = timezone * 1000;
    const zoneTime = utc + time;
    const t = new Date(zoneTime);
    date.innerHTML = t.toDateString();
    const timeString = document.createElement('span');
    timeString.innerHTML = `${t.toLocaleTimeString('en-US', {hour: "2-digit", minute: "2-digit", second: "2-digit"})} <br>`;
    date.prepend(timeString);
    
   

    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; 
    img.alt = `${description}`;
    img.id = icon
    tmp.textContent = Math.round(temp);
    humidData.textContent = Math.round(humidity);
    windData.textContent = Math.round(speed);
    minData.textContent = Math.round(temp_min);
    maxData.textContent = Math.round(temp_max); 
    nameData.innerHTML = name.slice(0, 1).toUpperCase() + name.slice(1);
    para.textContent = description.slice(0,1).toUpperCase() + description.slice(1);
    backdrop.style.display = "block";

    let string = icon;
    (string[string.length - 1 ] === 'n') ?
     wrapper.style.background = "linear-gradient(173deg,rgba(47, 47, 117, 0.5) 0%, rgba(166, 139, 138, 0.7) 50%, rgba(171, 140, 165, 0.8) 60%, rgba(72, 45, 84, 1) 100%)" : wrapper.style.background = "linear-gradient(173deg,rgba(45, 73, 107, 0.5) 0%, rgba(75, 119, 185, 0.5) 27%, rgba(187, 193, 197, 0.5) 60%, rgba(209, 181, 148, 0.5) 81%, rgba(236, 103, 73, 0.5) 100%)";
    (string[string.length - 1 ] === 'n') ? document.body.style.color = "white" : document.body.style.color = "black";
    (string[string.length - 1 ] === 'n') ?
    backdrop.style.background = "linear-gradient(173deg,rgba(47, 47, 117, 1) 0%, rgba(166, 139, 138, 1) 50%, rgba(171, 140, 165, 1) 60%, rgba(72, 45, 84, 1) 100%)": backdrop.style.background = "linear-gradient(173deg,rgba(45, 73, 107, 1) 0%, rgba(75, 119, 185, 1) 27%, rgba(187, 193, 197, 1) 60%, rgba(209, 181, 148, 1) 81%, rgba(236, 103, 73, 1) 100%)";
   
    
};