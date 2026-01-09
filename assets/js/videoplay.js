document.addEventListener('DOMContentLoaded', (event) => {
    // Zgjidh video elementin nga DOM-i duke përdorur ID-në e tij
    const video = document.getElementById('Video-interaktive');
    let pause; // Deklarimi i një variabli për të mbajtur referencën e timeout-it për ndalimin e videove
    
    // Shto një event listener që reagon kur mouse-u hyn mbi elementin e videove
    video.addEventListener('mouseover', () => {
        clearTimeout(pause); // Pastro timeout-in që ka ndaluar videon
        video.play(); // Fillo videon
    });

    // Shto një event listener që reagon kur mouse-u largohet nga elementi i videove
    video.addEventListener('mouseout', () => {
        // Vendos një timeout që pas 5 sekondash do të ndalojë videon nëse mouse-u nuk është mbi të
        pause = setTimeout(() => {
            video.pause(); // Ndalohet video
        }, 5000); 
    });
});
