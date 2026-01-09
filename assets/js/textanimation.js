document.addEventListener('DOMContentLoaded', () => {
    // Zgjidh të gjitha elementet me klasën 'number'
    const Numrat = document.querySelectorAll('.number'); 
    Numrat.forEach(number => {
        // Apliko animacionin për secilin numër
        animacion(number);
    });

    function animacion(element) {
        // Marrë vlerën e synuar nga atributi 'data-target'
        const target = +element.getAttribute('data-target');
        // Koha totale e animacionit në milidetaje
        const kohëzgjatja = 2000;
        // Koha fillim për performancën aktuale
        const fillon = performance.now(); 

        function updateNumber(Koha) {
            // Kohëzgjatja aktuale e animacionit
            const kohëzgjatje = Koha - fillon; 
            // Progresi i animacionit, ndër 0 dhe 1
            const progres = Math.min(kohëzgjatje / kohëzgjatja, 1); 
            // Numri aktual i animuar
            const NumriTani = Math.floor(progres * target); 
            // Vendos numrin aktual si përmbajtje të elementit
            element.textContent = NumriTani;

            if (progres < 1) {
                // Nëse animacioni nuk është përfunduar, kërko animacionin e rradhës
                requestAnimationFrame(updateNumber); 
            }
        }
        // Nis animacionin
        requestAnimationFrame(updateNumber); 
    }
});
