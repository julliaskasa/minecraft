document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".step, .tips li, .tips-title");
  
  animatedItems.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.15 + 0.5}s`;
  });

  const main = document.querySelector(".instructions");
  main.style.animationDelay = "0.2s";
});