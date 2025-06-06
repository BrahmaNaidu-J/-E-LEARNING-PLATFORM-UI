document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById('progress-bar');
  let progress = 60;
  progressBar.style.width = `${progress}%`;
  progressBar.innerText = `${progress}%`;
});

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function filterCourses() {
  const value = document.getElementById("filterSelect").value;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const category = card.getAttribute("data-category");
    if (value === "all" || value === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
