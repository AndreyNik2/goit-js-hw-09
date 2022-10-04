import { Notify } from 'notiflix';

const formEl = document.querySelector('.form')
const submitBtn = document.querySelector('button')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve(position, delay)
  } else {
    reject(position, delay)
  }

    }, delay)
  })
  
}

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let position = 0;
  let promiseDelay = delay.value - step.value;
  console.log(promiseDelay);
  for (let index = 0; index < amount.value; index++) {
    position += 1;
    promiseDelay += Number(step.value);
    console.log(promiseDelay);
    createPromise(position, promiseDelay)
      .then((position, promiseDelay) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${promiseDelay}ms`);
      })
      .catch((position, promiseDelay) => {
        Notify.failure(`❌ Rejected promise ${position} in ${promiseDelay}ms`);
      })
  }
}

