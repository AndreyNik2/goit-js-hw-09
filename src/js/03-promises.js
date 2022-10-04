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

// function handleSubmit(event) {
//   event.preventDefault();
//   const { delay, step, amount } = event.currentTarget;
//   let position = 0;
//   let promiseDelay = delay.value - step.value;
//   console.log(promiseDelay);
//   for (let index = 0; index < amount.value; index++) {
//     position += 1;
//     promiseDelay += Number(step.value);
//     console.log(promiseDelay);
//     createPromise(position, promiseDelay)
//       .then((position, promiseDelay) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${promiseDelay}ms`);
//         console.log(promiseDelay);
//       })
//       .catch((position, promiseDelay) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${promiseDelay}ms`);
//         console.log(promiseDelay);
//       })
//   }
// }

function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let elDelay = Number(delay.value) - Number(step.value);
  const elStep = Number(step.value);
  const elAmount = Number(amount.value);
  for (let position = 1; position <= elAmount; position+=1) {
    elDelay += elStep;
    createPromise(position, elDelay)
      .then((position, elDelay) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${elDelay}ms`);
        console.log(elDelay);
      })
      .catch((position, elDelay) => {
        Notify.failure(`❌ Rejected promise ${position} in ${elDelay}ms`);
        console.log(elDelay);
      })
  }
}

