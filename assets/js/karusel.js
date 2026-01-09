// Deklarimi i një variabli globale për indeksin aktual të slajdit në karusel
let slideIndex = 0;

function karusel(index) {
    // Zgjedhja e të gjithë elementeve të slajdeve
    const slide = document.querySelectorAll('.karusel-item');
    // Kontrolli nëse indeksi është më i madh se numri i slajdeve
    if (index >= slide.length) {
        slideIndex = 0; // Nëse indeksi është më i madh se numri i slajdeve, kthehemi në fillim
    } else if (index < 0) {
        slideIndex = slide.length - 1; // Nëse indeksi është më i vogël se zero, kthehemi në fund
    }
    // Përcakto offsetin e translateX bazuar në indeksin aktual të slajdit
    const offset = -slideIndex * 100;
    // Përditëso pozicionin e karuselit duke përdorur transform
    document.querySelector('.brenda-karusel').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    // Përditëso indeksin e slajdit
    slideIndex += step;
    // Lëviz slajdin në indeksin aktual
    karusel(slideIndex);
}

function autoSlide() {
    // Lëviz slajdin përpara
    moveSlide(1);
    // Vendos një timeout për të vazhduar automatikisht lëvizjen e slajdeve pas 10 sekondave
    setTimeout(autoSlide, 10000);
}


document.addEventListener('DOMContentLoaded', (event) => {
    // Nis karuselin me indeksin fillestar
    karusel(slideIndex);
    // Vendos një timeout për të filluar automatikisht lëvizjen e slajdeve pas 10 sekondave që pasi faqja të jetë ngarkuar
    setTimeout(autoSlide, 10000);
});
