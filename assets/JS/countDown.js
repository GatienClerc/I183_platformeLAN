let days = 365;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateCountdown() {
    if (seconds > 0) {
        seconds--;
    } else {
        seconds = 59;
        if (minutes > 0) {
            minutes--;
        } else {
            minutes = 59;
            if (hours > 0) {
                hours--;
            } else {
                hours = 23;
                if (days > 0) {
                    days--;
                } else {
                    clearInterval(timerInterval); // stop at 00:00:00
                }
            }
        }
    }

    // Update CSS variable for DaisyUI countdown
    document.getElementById('days').style.setProperty('--value', days)
    document.getElementById('hours').style.setProperty('--value', hours);
    document.getElementById('minutes').style.setProperty('--value', minutes);
    document.getElementById('seconds').style.setProperty('--value', seconds);
}

const timerInterval = setInterval(updateCountdown, 1000);