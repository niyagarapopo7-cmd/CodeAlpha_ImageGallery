let currentIndex = 0;

const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "block";
    showImage();
}

// Show Image
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Next / Prev
function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}

// Filter Images
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}