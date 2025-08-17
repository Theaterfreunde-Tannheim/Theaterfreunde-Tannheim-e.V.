document.addEventListener("DOMContentLoaded", () => {
  const leftCurtain = document.querySelector(".curtain-left");
  const rightCurtain = document.querySelector(".curtain-right");
  const content = document.querySelector(".content");

  if (!sessionStorage.getItem("curtainOpened")) {
    setTimeout(() => {
      leftCurtain.style.transform = "translateX(-100%)";
      rightCurtain.style.transform = "translateX(100%)";
    }, 500);

    setTimeout(() => {
      content.classList.remove("hidden");
      content.style.opacity = "1";
    }, 250);

    sessionStorage.setItem("curtainOpened", "true");
  } else {
    leftCurtain.style.display = "none";
    rightCurtain.style.display = "none";
    content.classList.remove("hidden");
    content.style.opacity = "1";
  }
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

 // Warte, bis die Animation vorbei ist
  setTimeout(() => {
    document.querySelector('.curtain-container').style.pointerEvents = 'none';
  }, 2000); // Dauer muss zu deiner CSS-Animation passen

  