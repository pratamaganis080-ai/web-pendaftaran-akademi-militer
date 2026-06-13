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

// --- 4. LOGIKA DROPDOWN MENU ABOUT ---
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // Mencegah bubbling event klik ke dokumen luar
  dropdownMenu.classList.toggle("show-dropdown");
});

// Otomatis tutup dropdown jika user mengklik area kosong mana saja di luar menu
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

  // 1. Fungsi Klik Hamburger Menu di Mobile
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

  // 2. Logika khusus klik "Korps Pendidikan" pas di layar Handphone
  if (nestedTrigger) {
    nestedTrigger.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Mencegah reload halaman
        nestedMenu.classList.toggle("show-mobile"); // Buka-tutup dropdown bawah di HP
      }
    });
  }

  // Menutup menu mobile otomatis jika salah satu link final di-klik
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
