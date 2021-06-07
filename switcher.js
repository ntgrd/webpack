// 

const dateCalcForm = document.getElementById('datecalc');
const calcSwitchBtn = document.querySelector('.calcswitch_btn');

const timerSwitchBtn = document.querySelector('.timerswitch_btn');
const timer = document.getElementById('timer');

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