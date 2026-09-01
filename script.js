// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("open");
      const expanded = header.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Experiences page filter
  const filterBar = document.querySelector(".filter-bar");
  if (filterBar) {
    const buttons = filterBar.querySelectorAll("button");
    const cards = document.querySelectorAll("[data-category]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        cards.forEach((card) => {
          const match = filter === "all" || card.dataset.category === filter;
          card.style.display = match ? "" : "none";
        });
      });
    });
  }

  // Contact form (static demo — no backend wired up)
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.querySelector("#form-note");
      if (note) {
        note.textContent = "Thanks — this is a demo form. Connect it to a form service (e.g. Formspree) to receive real submissions.";
        note.style.color = "#616B45";
      }
      form.reset();
    });
  }
});
