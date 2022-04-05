var slides = new Array("img/1200x680_gettyimages-90797846 (1).jpg", "img/1 KalIYe6IsGVQSDcQZ-_ZSg.png", "img/Bernard-Henri-levy-sunday-times-last-exit-before-brexit - Copie.jpg", "img/soral-1024x555 - Copie.png");
var compteur = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("#slide").src = slide[numero];
}

let next = document.querySelector("#precedent")
console.log(next)
let prev = document.querySelector("#suivant")

function slideNext(){
       compteur++
      if(compteur == slides.length){
        compteur = 0
    }
    image.src=slides[compteur]
   // let decal = -slideWidth * compteur
   // elements.style.transform = `translateX(${decal}px)`
}


function slidePrev(){
    compteur--

    if(compteur < 0){
        compteur = slides.length - 1
    }

    image.src=slides[compteur]

}
const image = document.getElementById("slide")
next.addEventListener("click", slideNext)
prev.addEventListener("click", slidePrev)