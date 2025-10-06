document.addEventListener("DOMContentLoaded", () => {
  const allImages = document.querySelectorAll("img");
  allImages.forEach((image) => {
    image.addEventListener("click", (evento) => {
      evento.preventDefault();
      const imageLink = image.getAttribute("src");
      if (imageLink) {
        window.open(imageLink, "_blank");
      } else {
        console.warn("image dos not have 'src'.");
      }
    });
    image.style.cursor = "pointer";
  });
});
