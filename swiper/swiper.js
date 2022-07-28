let imagetableau = ['https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fsante.2Fsante-pratique.2Ffleurs-de-bach-00984.2F10854368-1-fre-FR.2Ffleurs-de-bach-les-fleurs-du-bien.2Ejpg/850x478/quality/90/crop-from/center/fleurs-de-bach-les-fleurs-du-bien.jpeg', 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/4/9/0495a1f8b6_50145213_plantes-fleurs-age.jpg', 'https://www.floraqueen.com/fr/blog/wp-content/uploads/sites/6/2017/11/shutterstock_639830500.jpg', './images/htmlcssjsimg.svg']

let index = 0;
let image = document.querySelector('.mon-image')
let rond = document.querySelectorAll('.rond');

image.innerHTML = `<img src="${imagetableau[index]}" class="container" alt="html css and js" />`

let vignette = document.querySelectorAll('.les-petites-images')

function previmage() {
    index--
    if (index < 0) {
        index = imagetableau.length -1
    }
    image.innerHTML = `<img src="${imagetableau[index]}" class="container" alt="html css and js" />`

    rond[index].classList.add('rond-actif');

    vignette[index].classList.add('active');

    for (let c = 0; c < vignette.length; c++) {
        if (index != c) {
            vignette[c].classList.remove('active');
        }
    }
    for (let i = 0; i < rond.length; i++) {
        if (index != i){
            rond[i].classList.remove('rond-actif');
        }
    }
}    

function nextimage() {
    index++
    if (index > imagetableau.length -1) {
        index = 0
    }
    image.innerHTML = `<img src="${imagetableau[index]}" class="container" alt="html css and js" />` 

    rond[index].classList.add('rond-actif');

    vignette[index].classList.add('active');

    for (let c = 0; c < vignette.length; c++) {
        if (index != c) {
            vignette[c].classList.remove('active');
        }
    }

    for (let i = 0; i < rond.length; i++) {
        if (index != i){
            rond[i].classList.remove('rond-actif');
        }
        
    }

}

// ligne de Leslie //
setInterval(nextimage, 1500) 

