// grabing all panels / image
const allPanels = document.querySelectorAll(".panel");

// Looping through all classes of panel to add events
allPanels.forEach((panel) => {
  // adding click event listener
  panel.addEventListener("mouseover", () => {
    // remove previous image/panel active class
    removePreviousActiveClass();
    // add active class to clicked panel/image
    panel.classList.add("active");
  });
});

// Function to remove active class
function removePreviousActiveClass() {
  // looping through all panels
  allPanels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
