var nav = document.querySelector('nav');
var liste = document.querySelector('ul');
var navigation = document.querySelector('.navigation');
var topPos = navigation.offsetTop;
console.log(topPos);
var scrollBefore = 0;

window.addEventListener('scroll', function(e) {
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        //Desired action
        nav.classList.remove("disable");
        liste.classList.add("disable")
    }else{
        scrollBefore = scrolled;
        console.log("ScrollDOWN");
        //Desired action
        nav.classList.add("disable");
        liste.classList.remove("disable");
    }
})

function Scrolling() {
    if (window.pageYOffset >= topPos) {
        navigation.classList.add("sticky");
    }
    else {
        navigation.classList.remove("sticky");    }
}

window.onscroll = function() {Scrolling()};

