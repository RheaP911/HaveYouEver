window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".content");
  
    setTimeout(() => {
        loader.classList.add("loader--hidden");
        content.classList.add("content-shown");
    }, 1500); 
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
});
