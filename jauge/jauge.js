let bleu = document.querySelector('.bleu')
let vert = document.querySelector('.vert')
let rouge = document.querySelector('.rouge')
let number = document.querySelectorAll('.number')
let pourcentage = 0
let addition = 0.3
bleu.style.width = '0%'
vert.style.width = '0%'
rouge.style.width = '0%'

setInterval(
    function(){
        if (pourcentage <= 75)
        {
        pourcentage += addition
        // console.log(pourcentage);
        bleu.style.width = `${pourcentage}%`
        number[0].innerHTML = Math.round(pourcentage) 
        }
        if (pourcentage <= 90)
        {
        pourcentage += addition
        // console.log(pourcentage);
        vert.style.width = `${pourcentage}%`
        number[1].innerHTML = Math.round(pourcentage) 
        }
        if (pourcentage <= 35)
        {
        pourcentage += addition
        // console.log(pourcentage);
        rouge.style.width = `${pourcentage}%`
        number[2].innerHTML = Math.round(pourcentage) 
        }
    },
    20) 
