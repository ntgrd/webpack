import 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.js';

let timerId = null;
const sound = new Howl({
    src: ['notification.mp3']
  });

export function stopTimer(timerTimeInput) {
    timerTimeInput.disabled = false;

    if (timerId) {
        clearInterval(timerId);
    }
}

function onTimer(timerTimeInput) {
    const timerTime = parseInt(timerTimeInput.value);

    const nextTime = timerTime - 1;

    timerTimeInput.value = nextTime;

    if (nextTime === 0) {
        stopTimer(timerTimeInput);
        sound.play();
        
        return;
    }
}

export function startTimer(timerTimeInput) {
    const initialTimerTime = parseInt(timerTimeInput.value);

    if (!initialTimerTime || initialTimerTime <= 0) {
        timerTimeInput.value = 'Введите положительное количество секунд';
        return;
    }

    timerTimeInput.disabled = true;

    timerId = setInterval(() => onTimer(timerTimeInput), 1000);
}
