const menu=document.querySelector(`#mobile__menu`);
const menuLinks=document.querySelector(`.navbar__menu`);
menu.addEventListener(`click`, function(){
    menuLinks.classList.toggle(`active`);
});