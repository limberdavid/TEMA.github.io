const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector(".icon");
const body = document.body;

function toggleTheme() {
    body.classList.toggle("dark");
    const dark = body.classList.contains("dark");

    icon.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");

    toggle.style.transform = "rotate(360deg)";
    setTimeout(() => toggle.style.transform = "", 400);
}

function loadTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        body.classList.add("dark");
        icon.textContent = "☀️";
    }
}

toggle.addEventListener("click", toggleTheme);

document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.key === "d") {
        e.preventDefault();
        toggleTheme();
    }
});

loadTheme();
