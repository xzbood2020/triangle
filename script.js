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
