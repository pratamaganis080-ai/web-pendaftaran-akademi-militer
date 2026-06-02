const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('imgPopup');
const captionText = document.getElementById('caption');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const revealElements = document.querySelectorAll('.scroll-reveal');

const itemObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('appeared');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 
});


revealElements.forEach(element => {
    itemObserver.observe(element);
});