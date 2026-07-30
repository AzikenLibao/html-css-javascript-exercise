// A tiny image gallery for Project 2.
// Swap these URLs for your own project screenshots later.
const images = [
  "https://via.placeholder.com/900x500?text=Project+2+Screenshot+1",
  "https://via.placeholder.com/900x500?text=Project+2+Screenshot+2",
  "https://via.placeholder.com/900x500?text=Project+2+Screenshot+3",
];

let currentIndex = 0;

const imageEl = document.getElementById("galleryImage");
const counterEl = document.getElementById("galleryCounter");

// Updates the <img> src and the "x / y" counter text to match currentIndex.
function updateGallery() {
  imageEl.src = images[currentIndex];
  counterEl.textContent = (currentIndex + 1) + " / " + images.length;
}

// Go back one image, wrapping around to the last image if we're at the first.
document.getElementById("prevBtn").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

// Go forward one image, wrapping around to the first image if we're at the last.
document.getElementById("nextBtn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});
