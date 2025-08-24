// زر تغيير اللغة (عربي ↔ إنجليزي بسيط)
document.getElementById("langBtn")?.addEventListener("click", () => {
  let lang = document.documentElement.lang;
  if (lang === "ar") {
    document.documentElement.lang = "en";
    alert("Switched to English (يمكنك ترجمة النصوص يدوياً)");
  } else {
    document.documentElement.lang = "ar";
    alert("تم التبديل إلى العربية");
  }
});

// Menu toggle for mobile
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("open");
});

// Animate hamburger
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});
