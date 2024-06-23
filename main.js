  const shareContainer = document.querySelector(".share-container");
  const btnShare = document.querySelectorAll(".share-box");
  const fasIcon = document.querySelector(".fa-share");

  const toggleShareContainer = () => {
    shareContainer.classList.toggle("hide");
    if (!shareContainer.classList.contains("hide")) {
      fasIcon.style.color = "white";
      btnShare.forEach(btn => btn.style.backgroundColor = "#6E8098");
    } else {
      fasIcon.style.color = "#6E8098";
      btnShare.forEach(btn => btn.style.backgroundColor = "#ECF2F8");
    }
  };

  const isMobile = window.innerWidth <= 768;

  btnShare.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleShareContainer(isMobile);
    });
  });

  // Hide the shareContainer on load
  shareContainer.classList.add("hide");









