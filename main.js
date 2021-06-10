import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { startTimer, stopTimer } from "./timer.js";
import { timerSwitchBtn, timer, calcSwitchBtn } from "./switcher.js";

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

calcSwitchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(timer.style.display);
    dateCalcForm.style.display = 'block';
    timer.style.display = 'none';
    console.log(timer.style.display);
});
timerSwitchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    timer.style.display = 'block';
    dateCalcForm.style.display = 'none';
});