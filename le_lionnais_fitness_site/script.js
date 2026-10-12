document.querySelectorAll(".menu-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nav = document.querySelector(".nav");
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "✕" : "☰";
  });
});
document.querySelectorAll("#year").forEach((el) => el.textContent = new Date().getFullYear());
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Demande de renseignements — Le Lionnais Fitness");
    const body = encodeURIComponent(
      `Bonjour Victor,\n\nJe m'appelle ${data.get("name")}.\nMon e-mail : ${data.get("email")}\nMa demande concerne : ${data.get("subject")}.\n\n${data.get("message")}\n\nBonne journée !`
    );
    window.location.href = `mailto:lelionnaisfitness@gmail.com?subject=${subject}&body=${body}`;
  });
}