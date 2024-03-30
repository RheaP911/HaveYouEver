window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-sec");
  const content = document.querySelector(".content");
  const btnResult = document.querySelector(".btn-result");
  const resultPopup = document.querySelector("#resultPopup");
  const closePopupBtn = document.querySelector("#closePopupBtn");
  const evilImage = document.querySelector("#evilImage");

  // Loader Timeout
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "flex";
    
    setTimeout(() => {
        content.classList.add("content-shown");
    }, 100);
  }, 2000);

  // For container when clicked
  



  // Evilness Result
  btnResult.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".checkbox-input");
    let score = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        score += 10;
      }
    });

    let evilnessLevel, message, imagePath;
    if (score >= 80) {
      evilnessLevel = "The Devil";
      message = "You are the epitome of evil!";
      imagePath = "resources/the-devil.png";
    } else if (score >= 40) {
      evilnessLevel = "Pretty Evil";
      message = "You are quite the trouble maker!";
      imagePath = "resources/pretty-evil.png";
    } else {
      evilnessLevel = "Not so Evil";
      message = "You are as innocent as a lamb!";
      imagePath = "resources/not-so-evil.png";
    }

    const evilnessSpan = document.querySelector("#evilness");
    evilnessSpan.textContent = `${evilnessLevel}`;
    evilnessSpan.className = `evilness-${evilnessLevel.toLowerCase().replace(/\s/g, '-')}`;

    const popupContent = document.querySelector(".popup-content");
    popupContent.className = `popup-content popup-${evilnessLevel.toLowerCase().replace(/\s/g, '-')}`;

    const closePopupBtn = document.querySelector("#closePopupBtn");
    closePopupBtn.className = `btn-close btn-close-${evilnessLevel.toLowerCase().replace(/\s/g, '-')}`;

    document.querySelector("#message").textContent = message;
    evilImage.src = imagePath;
    resultPopup.style.display = "block";
  });

  closePopupBtn.addEventListener("click", () => {
    resultPopup.style.display = "none";
  });
});
