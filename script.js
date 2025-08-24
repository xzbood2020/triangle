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

// Reveal sections on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
