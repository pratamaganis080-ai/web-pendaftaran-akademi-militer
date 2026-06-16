const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("imgPopup");
const captionText = document.getElementById("caption");
const galleryItems = document.querySelectorAll(".gallery-item img");
const closeModal = document.querySelector(".close-modal");

galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const revealElements = document.querySelectorAll(".scroll-reveal");

const itemObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appeared");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  itemObserver.observe(element);
});

// DROPDOWN START
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropdownMenu.classList.toggle("show-dropdown");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show-dropdown");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const nestedTrigger = document.querySelector(".nested-trigger");
  const nestedMenu = document.querySelector(".nested-menu");

  // FUNGSI DI MOBILE HAMBURGER MENU
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      mobileMenuBtn.classList.toggle("is-active");

      const bars = mobileMenuBtn.querySelectorAll(".bar");
      if (mobileMenuBtn.classList.contains("is-active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
      } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
      }
    });
  }

  // KORPS PENDIDIKAN PAS DIKLIK
  if (nestedTrigger) {
    nestedTrigger.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        nestedMenu.classList.toggle("show-mobile");
      }
    });
  }

  const navItems = document.querySelectorAll(
    ".nav-links a:not(.dropdown-trigger):not(.nested-trigger)",
  );
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        mobileMenuBtn.click();
      }
    });
  });
});

// FORMULIR REGIS
const openFormBtn = document.getElementById("openFormBtn");
const formulirModal = document.getElementById("formulirModal");
const closeFormModal = document.querySelector(".close-form-modal");

if (openFormBtn && formulirModal) {
  openFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    formulirModal.style.display = "flex"; 
  });
}

if (closeFormModal && formulirModal) {
  closeFormModal.addEventListener("click", function () {
    formulirModal.style.display = "none";
  });
}

window.addEventListener("click", function (e) {
  if (e.target === formulirModal) {
    formulirModal.style.display = "none";
  }
});

const robloxForm = document.getElementById("robloxForm");
const hiddenNoCatar = document.getElementById("hiddenNoCatar");
