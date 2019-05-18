const email = document.querySelector('.form__email');
const btn = document.querySelector('.form__btn');
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const validate = document.querySelector('.form__validate');

email.addEventListener('blur', () => {

    if(!re.test(email.value)) {
        email.classList.add('invalid');
        validate.innerHTML = 'Please provide a valid email address';
        validate.style.color = 'hsl(354, 100%, 66%)';
    } else {
        email.classList.remove('invalid');
        validate.innerHTML = '';
    }

});

btn.addEventListener('click', () => {
    if(!re.test(email.value)) {
        email.classList.add('invalid');
        validate.innerHTML = 'Please provide a valid email address';
        validate.style.color = 'hsl(354, 100%, 66%)';
    } else if(re.test(email.value)) {
        validate.innerHTML = 'Thank you for subscribing!';
        validate.style.color = 'green';

        setTimeout(function() {
            validate.innerHTML = '';
        }, 3000);
    }
     else {
        email.classList.remove('invalid');
        validate.innerHTML = '';
    }
});


