import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map((item) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
   />
   </a>
   </div>`)
    .join("");

gallery.innerHTML = galleryMarkup;
gallery.addEventListener('click', openModalImage)

let selectedImage;
let modalImage;

function openModalImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

     selectedImage = event.target.getAttribute('data-source');
     modalImage = basicLightbox
        .create(`<img src="${selectedImage}" width="800" height="600">`);

    modalImage.show()

    document.addEventListener('keydown', onEscapeButtonPress, {once: true})
}

function onEscapeButtonPress(event) {
    if (event.key === 'Escape') {
        modalImage.close()
    }
}