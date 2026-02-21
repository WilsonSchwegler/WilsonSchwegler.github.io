function toggleCard(card) {
  const details = card.querySelector(".project-details");
  const isOpen = details.style.display === "block";

  document.querySelectorAll(".project-details").forEach(d => {
    d.style.display = "none";
  });

  details.style.display = isOpen ? "none" : "block";
}
