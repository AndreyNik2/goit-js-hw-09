import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePickerRef = document.querySelector('#datetime-picker');
const dataDaysRef = document.querySelector('[data-days]');
const dataHoursRef = document.querySelector('[data-hours]');
const dataMinutesRef = document.querySelector('[data-minutes]');
const dataSecondsRef = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');
let deadline = undefined;
let diff = undefined;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        alert("Please choose a date in the future")
        return
      } else {
        deadline = selectedDates[0]
        console.log(deadline);
      }
  },
};



flatpickr(dateTimePickerRef, options)


const timer = {
  timerInterval: null,
  refs: {},
  startTimer() {
    this.timerInterval = setInterval(() => {
      diff = deadline - Date.now();
      if (diff <= 1000) {
        clearInterval(this.timerInterval)
      }
      const data = this.convertMs(diff);
      dataDaysRef.textContent = this.addLeadinZero(data.days);
      dataHoursRef.textContent = this.addLeadinZero(data.hours);
      dataMinutesRef.textContent = this.addLeadinZero(data.minutes);
      dataSecondsRef.textContent = this.addLeadinZero(data.seconds);

    }, 1000);
  },
  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
}


startBtn.addEventListener('click', timer.startTimer())


