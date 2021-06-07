import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { startTimer, stopTimer } from "./timer.js";

export const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");


dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const timerTimeInput = document.querySelector('#timerTime');

const startTimerButton = document.querySelector('#startTimerButton');
startTimerButton.addEventListener('click', () => startTimer(timerTimeInput));

const stopTimerButton = document.querySelector('#stopTimerButton');
stopTimerButton.addEventListener('click', () => stopTimer(timerTimeInput));
