document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".cam-foto img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const btnIleri = document.querySelector(".btn-ileri");
    const btnGeri = document.querySelector(".btn-geri");
    const body = document.body;

    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightbox.classList.remove("hidden");
        body.classList.add("lightbox-open");
    }

    function closeLightbox() {
        lightbox.classList.add("hidden");
        body.classList.remove("lightbox-open");
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            showLightbox(index);
        });
    });

    btnIleri.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
    });

    btnGeri.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // ESC tuşuyla da kapatma //
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("hidden")) {
            if (e.key === "Escape") {
                closeLightbox();
            } else if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % images.length;
                showLightbox(currentIndex);
            } else if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showLightbox(currentIndex);
            }
        }
    });
});