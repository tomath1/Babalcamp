const images = [
"1.jpeg",
"3.jpeg",
"4.jpeg",
"5.jpeg",
"6.jpeg"
];

let currentIndex = 0;
let autoSlide;

function showImages(){

document.getElementById("img1").src = images[currentIndex % images.length];
document.getElementById("img2").src = images[(currentIndex+1) % images.length];
document.getElementById("img3").src = images[(currentIndex+2) % images.length];

}

function nextImage(){
currentIndex = (currentIndex+1) % images.length;
showImages();
}

function prevImage(){
currentIndex--;
if(currentIndex < 0){
currentIndex = images.length-1;
}
showImages();
}

/* تشغيل التقليب التلقائي */
function startSlide(){
autoSlide = setInterval(nextImage,4000);
}

/* إيقاف التقليب */
function stopSlide(){
clearInterval(autoSlide);
}

showImages();
startSlide();

/* إيقاف عند وضع الماوس على السهم */
document.querySelectorAll(".arrow").forEach(arrow => {

arrow.addEventListener("mouseenter", stopSlide);

arrow.addEventListener("mouseleave", startSlide);

});


window.addEventListener("scroll", function(){

let elements = document.querySelectorAll(".reveal");

elements.forEach(function(el){

let windowHeight = window.innerHeight;
let elementTop = el.getBoundingClientRect().top;
let visible = 150;

if(elementTop < windowHeight - visible){
el.classList.add("active");
}

});

});







