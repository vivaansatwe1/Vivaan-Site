const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
