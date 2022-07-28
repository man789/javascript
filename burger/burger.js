let nav = document.querySelector('.hide');
let burger = document.querySelector('.menu');
let cross = document.querySelector('.cross')

burger.addEventListener('click', function (){

nav.classList.toggle('active')
burger.classList.toggle('hide-menu')
cross.classList.toggle('cross-active')
}) 

cross.addEventListener('click', function(){
    nav.classList.remove('active')
cross.classList.remove('cross-active')
burger.classList.remove('hide-menu')
})