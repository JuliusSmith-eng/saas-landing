document.addEventListener("DOMContentLoaded", () => {
  // 1. Переключатель цен (Pricing Toggle)
  const toggleBtn = document.getElementById("pricing-toggle");
  const toggleCircle = document.getElementById("toggle-circle");
  const priceAmounts = document.querySelectorAll(".price-amount");
  const monthlyLabel = document.getElementById("monthly-label");
  const yearlyLabel = document.getElementById("yearly-label");

  let isYearly = false;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isYearly = !isYearly;

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

      priceAmounts.forEach((price) => {
        const monthlyVal = price.getAttribute("data-monthly");
        const yearlyVal = price.getAttribute("data-yearly");
        price.textContent = isYearly ? yearlyVal : monthlyVal;
      });
    });
  }

  // 2. Логика аккордеона FAQ
  const faqTriggers = document.querySelectorAll(".faq-trigger");

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector(".faq-icon");

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

      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  // 3. Мобильное меню (Гамбургер)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
