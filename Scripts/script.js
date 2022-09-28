// Main Script

// Button for meat
const grow_btn = document.getElementById("meatbuttongrow");
const shrink_btn = document.getElementById("meatbuttonsmall");

const meatimg = document.getElementById("meatmain");
let size = 100;
grow_btn.addEventListener("click", function onClick() {
  if (size < 400) {
    size += 20;
    meatimg.style.width = `${size}px`;
  }
});

shrink_btn.addEventListener("click", function onClick() {
  if (size > 100) {
    size -= 20;
    meatimg.style.width = `${size}px`;
  }
});
