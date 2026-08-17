const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const form = document.querySelector("#supportForm");
const status = document.querySelector("#formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const supportEmail = "support@YOUR-DOMAIN.com";

  const subject = encodeURIComponent(
    `CRYPTO LAB Support Request — ${name}`
  );

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );

  window.location.href =
    `mailto:${supportEmail}?subject=${subject}&body=${body}`;

  status.textContent = "Opening your email app…";
});