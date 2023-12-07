import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

     

document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); 
    formSubmit();
  });

function formSubmit() {
     const form = document.querySelector('.form');
     const delay = form.elements['delay'].value;
     const state = form.elements['state'].value;
    
     const promise = new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => resolve(delay), delay);
      } else {
        setTimeout(() => reject(delay), delay);
      }
     });
    
    

    promise.then(
      (delay) => {
        iziToast.success({
                title: 'Success',
                message: `Fulfilled promise in ${delay}ms`,
            });
      },
        (delay) => {
            iziToast.error({
                title: 'Error',
                message: `Rejected promise in ${delay}ms`,
            });

            
        });
    
            form.elements['delay'].value = '';
            form.elements['state'][0].checked = false;
            form.elements['state'][1].checked = false;
  }