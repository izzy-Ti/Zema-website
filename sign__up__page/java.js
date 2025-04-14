const login=document.querySelector(`.login__link`);
const signin=document.querySelector(`.signin__link`);
const shift=document.querySelector(`.form__color__shifter`);
login.addEventListener(`click`, function(){
    shift.classList.toggle(`active`);
})
signin.addEventListener(`click`, function(){
    shift.classList.toggle(`active`);
    shift.classList.toggle();
})