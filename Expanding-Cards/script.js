const allPanels = document.querySelectorAll(".panel");

console.log(allPanels);

// Looping through all classes of panel to add events
allPanels.forEach((panel) => {
  // adding click event listener
  panel.addEventListener("click", () => {
    // remove previous image/panel active class
    removePreviousActiveClass();
    // add active class to clicked panel/image
    panel.classList.add("active");
  });
});

// Function to remove active class
function removePreviousActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
