const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');
const title = document.querySelector('h1');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    if (diff <= 0) {
        title.innerHTML = 'Happy New Year!';
        daysEl.innerHTML = '00'; hoursEl.innerHTML = '00'; minsEl.innerHTML = '00'; secsEl.innerHTML = '00';
        return;
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    daysEl.innerHTML = d < 10 ? '0' + d : d;
    hoursEl.innerHTML = h < 10 ? '0' + h : h;
    minsEl.innerHTML = m < 10 ? '0' + m : m;
    secsEl.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
updateCountdown();
