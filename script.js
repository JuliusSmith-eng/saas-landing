document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("pricing-toggle");
  const toggleCircle = document.getElementById("toggle-circle");
  const priceAmounts = document.querySelectorAll(".price-amount");
  const monthlyLabel = document.getElementById("monthly-label");
  const yearlyLabel = document.getElementById("yearly-label");

  let isYearly = false;

  toggleBtn.addEventListener("click", () => {
    isYearly = !isYearly;

    // Анимация переключателя
    if (isYearly) {
      toggleCircle.classList.add("translate-x-6");
      toggleCircle.classList.remove("translate-x-0");
      monthlyLabel.classList.replace("text-white", "text-slate-400");
      yearlyLabel.classList.replace("text-slate-400", "text-white");
    } else {
      toggleCircle.classList.add("translate-x-0");
      toggleCircle.classList.remove("translate-x-6");
      yearlyLabel.classList.replace("text-white", "text-slate-400");
      monthlyLabel.classList.replace("text-slate-400", "text-white");
    }

    // Пересчет цен
    priceAmounts.forEach((price) => {
      const monthlyVal = price.getAttribute("data-monthly");
      const yearlyVal = price.getAttribute("data-yearly");

      // Плавное обновление числа
      price.textContent = isYearly ? yearlyVal : monthlyVal;
    });
  });
  // FAQ Accordion Logic
  const faqTriggers = document.querySelectorAll(".faq-trigger");

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector(".faq-icon");

      // Закрываем другие открытые пункты
      document.querySelectorAll(".faq-content").forEach((item) => {
        if (item !== content) {
          item.classList.add("hidden");
        }
      });
      document.querySelectorAll(".faq-icon").forEach((ic) => {
        if (ic !== icon) {
          ic.classList.remove("rotate-180");
        }
      });

      // Переключаем текущий
      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });
});
