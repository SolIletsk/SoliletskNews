// Старые часы

function updateClock() {

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");

    const m = String(now.getMinutes()).padStart(2, "0");

    const s = String(now.getSeconds()).padStart(2, "0");

    const clock = document.getElementById("clock");

    if(clock){

        clock.innerHTML = h + ":" + m + ":" + s;

    }

}

setInterval(updateClock,1000);

updateClock();

// Случайная фраза

const messages = [

"Добро пожаловать на сайт.",

"Последнее обновление: ноябрь 2010.",

"Архив доступен для просмотра.",

"Спасибо за посещение."

];

window.onload = function(){

    const info = document.getElementById("randomMessage");

    if(info){

        info.innerHTML =

        messages[Math.floor(Math.random()*messages.length)];

    }

}
