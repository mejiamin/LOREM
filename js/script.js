// -------------------------------------- dropdown

var buttonMenu = document.getElementById('btn-menu');
var menuContent = document.querySelector('.menu-content');

buttonMenu.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuContent.classList.toggle('show');
});



// -------------------------------------- navbar

var nav = document.querySelector('.header-top');
var contentMenu = document.querySelector('.menu-content');
var headerLeft = document.querySelector('.page-header .left');
console.log(headerLeft);

window.addEventListener('scroll', () => {
    nav.classList.toggle('sticky', window.scrollY > 400);
    contentMenu.classList.toggle('sticky', window.scrollY > 400);
    headerLeft.classList.toggle('sticky', window.scrollY > 400);
});
