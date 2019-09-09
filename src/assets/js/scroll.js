window.addEventListener("scroll", () => {
  const infoSbar = document.querySelector(".info-sidebar");
  const bottom = infoSbar.getBoundingClientRect().bottom;
  console.log(bottom);
});
