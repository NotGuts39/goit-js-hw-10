import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let countdownInterval;

const startButton = document.getElementById("start-button");
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    

    
    if (userSelectedDate <= new Date()) {
      
      iziToast.error({
      message: 'Please choose a date in the future',
      position: 'topRight'
});
      
      startButton.disabled = true;
    }
    
    else {
      
      startButton.disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);


document.getElementById("start-button").addEventListener("click", startCountdown);


function startCountdown() {
  
 startButton.disabled = true;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(function () {
    const timeDifference = userSelectedDate - new Date();

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimerValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.error({
  
        message: 'Countdown has reached zero',
  position: 'topRight'
});
      
    } else {
      const timeObject = convertMs(timeDifference);
      updateTimerValues(timeObject);
    }
  }, 1000);
}

function updateTimerValues({ days, hours, minutes, seconds }) {
  document.querySelector('.value[data-days]').textContent = days < 10 ? '0' + days : days;
  document.querySelector('.value[data-hours]').textContent = hours < 10 ? '0' + hours : hours;
  document.querySelector('.value[data-minutes]').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.querySelector('.value[data-seconds]').textContent = seconds < 10 ? '0' + seconds : seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}