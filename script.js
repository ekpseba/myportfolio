document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("mouseenter", () => {
            video.play(); // Avvia la riproduzione quando il cursore è sopra
        });

        video.addEventListener("mouseleave", () => {
            video.pause(); // Metti in pausa quando il cursore si sposta via
            video.currentTime = 0; // Ripristina il video all'inizio
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.scroll-container');

    document.querySelector('.scroll-btn.left').addEventListener('click', () => {
        if (container.scrollLeft > 0) {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            console.log("Già all'inizio, non può scrollare più a sinistra.");
        }
    });

    document.querySelector('.scroll-btn.right').addEventListener('click', () => {
        if (container.scrollLeft < (container.scrollWidth - container.clientWidth)) {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        } else {
            console.log("Già all'estremo destro, non può scrollare più a destra.");
        }
    });
});
function scrollLeftPhotos() {
    const container = document.querySelector('.photos-container');
    if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
        console.error("Elemento '.photos-container' non trovato.");
    }
}

function scrollRightPhotos() {
    const container = document.querySelector('.photos-container');
    if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
    } else {
        console.error("Elemento '.photos-container' non trovato.");
    }
}
