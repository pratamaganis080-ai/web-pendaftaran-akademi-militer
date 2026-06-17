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

document.addEventListener("DOMContentLoaded", function () {
  const btnBukaModal = document.querySelector(".btn-daftar-gform");
  const catarModal = document.getElementById("catarModal");
  const btnSalin = document.getElementById("btnSalinCatar");
  const nomorCatarAcak = document.getElementById("nomorCatarAcak");

  // TARGET UTAMA: Kita ambil class .close-modal ATAU .close bawaan template lu
  const closeBtn = document.querySelector(".close-modal, .close");

  // 1. Logika Buka Modal & Acak Angka
  if (btnBukaModal && catarModal) {
    btnBukaModal.addEventListener("click", function (e) {
      e.preventDefault();
      const angkaRandom = Math.floor(1000 + Math.random() * 9000);
      if (nomorCatarAcak) {
        nomorCatarAcak.innerText = "CATAR-" + angkaRandom;
      }
      catarModal.style.display = "flex";
    });
  }

  // 2. Logika Tutup Modal (Pencet Tombol Silang)
  if (closeBtn && catarModal) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Biar gak nge-trigger link/refresh
      catarModal.style.display = "none";
    });
  }

  // BUAT CLOSE
  window.addEventListener("click", function (e) {
    if (e.target === catarModal) {
      catarModal.style.display = "none";
    }
  });

  // BUAT SALIN NOMOR NYA
  if (btnSalin && nomorCatarAcak) {
    btnSalin.addEventListener("click", function () {
      const teksNomor = nomorCatarAcak.innerText;
      navigator.clipboard.writeText(teksNomor).then(() => {
        btnSalin.innerText = "BERHASIL DISALIN! ✓";
        btnSalin.style.backgroundColor = "#2ecc71";
        setTimeout(() => {
          btnSalin.innerText = "SALIN NOMOR CATAR";
          btnSalin.style.backgroundColor = "var(--primary-blue)";
        }, 2000);
      });
    });
  }
});

// Tambahan di file script.js lu jika pake animasi scroll reveal bawaan template
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".tata-cara-section", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  });
}
