import { Notify } from 'notiflix';

const formEl = document.querySelector('.form')
const submitBtn = document.querySelector('button')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
        console.log(delay);
      } else {
        reject({position, delay})
        console.log(delay);
  }

    }, delay)
  })
  
}

formEl.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let elDelay = Number(delay.value);
  const elStep = Number(step.value);
  const elAmount = Number(amount.value);
  for (let position = 1; position <= elAmount; position+=1) {
    console.log(elDelay);
    createPromise(position, elDelay)
      .then(({ position, elDelay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${elDelay}ms`);
        console.log(elDelay);
      })
      .catch(({ position, elDelay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${elDelay}ms`);
        console.log(elDelay);
      })
    elDelay += elStep;
  }
}

