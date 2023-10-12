const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");
// console.log(openModalBtns);

// close and show modal functions
const showModal = function (event) {
  event.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
};

const hideModal = function (event) {
  event.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

// show modal
for (let i = 0; i < openModalBtns.length; i++) {
  showModal(openModalBtns[i]);
  // console.log(`button clicked ${i + 1}`);
}

// hide modal
hideModal(btn);
hideModal(overlay);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
  // console.log(e.key);
});

// btn.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
