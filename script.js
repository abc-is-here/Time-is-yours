let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let digClock = document.getElementById('digClock');

const setClockTime = () => {
    const day  = new Date();
    const hh = day.getHours();
    const mm = day.getMinutes();
    const ss = day.getSeconds();

    const hourDeg = (hh*30) + (mm/2);
    const minuteDeg = (mm*6) + (ss/10);
    const secondDeg = ss*6;

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;

    digClock.innerHTML = `${hh%12<10?'0':''}${hh%12}:${mm<10?'0':''}${mm} ${hh>=12?'PM':'AM'}`;

    let audio = new Audio('clock.mp3');
    audio.play();
}

setClockTime();

setInterval(setClockTime, 1000);