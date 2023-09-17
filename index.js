let sel;

function fadeIn(element, duration) {
    element.style.opacity = 0;
    let opacity = 0;
    const interval = 10;
    const steps = duration / interval;
    const delta = 1 / steps;

    const animationInterval = setInterval(function() {
        opacity += delta;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(animationInterval);

            if (element.id !== 'button1') {
                showPhotos();
            }
        }
    }, interval);
}

window.onload = function() {
    const content = document.querySelector('.content');
    fadeIn(content, 1000);
};

function chooseButton(event) {
    const selectedButton = event.target.id;
    const elements = document.getElementsByClassName('content');
    for (let el of elements) {
        el.classList.remove('active');
        if (el.classList.toString().indexOf(selectedButton) !== -1) {
            sel = el;
        }
    }
    if (sel) {
        sel.classList.add('active');
        animateContent(sel);
    }
}

function animateContent(content) {
    content.style.opacity = '0';
    let opacity = 0;
    const animationInterval = setInterval(function() {
        opacity += 0.1;
        content.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(animationInterval);
        }
    }, 50);
}

function showPhotos() {
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.innerHTML = '';

    const photos = [
        'image/photo1.jpg',
        'image/photo2.jpg',
        'image/photo3.jpg',
    ];

    photos.forEach((photoSrc) => {
        const photo = document.createElement('img');
        photo.src = photoSrc;
        photo.alt = 'Фотография';
        photoGallery.appendChild(photo);
    });
}
