import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(res => {
      iziToast.success({
        message: `Fulfilled promise in ${res}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        messageColor: '#fff',
        close: false,
        iconUrl: '/img/check-mark.svg',
        title: 'OK',
        titleColor: '#fff',
      });
    })
    .catch(error => {
      iziToast.error({
        message: 'Illegal operation',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        close: false,
        iconUrl: '/img/cross-mark.svg',
        title: 'Error',
        titleColor: '#fff',
      });
    });
});
