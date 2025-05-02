const content = document.getElementById("content");
const scrollBtn = document.getElementById("scroll-btn");
const agreeBtn = document.getElementById("agree-btn");

//Function
function checkContentHeight() {
  const hasOverflow = content.scrollHeight > content.clientHeight;

  if (hasOverflow) {
    scrollBtn.classList.remove("hidden");
    agreeBtn.classList.add("hidden");

    scrollBtn.addEventListener("click", () => {
      content.scrollTo({
        top: content.scrollHeight,
        behavior: "smooth",
      });
      setTimeout(() => {
        scrollBtn.classList.add("hidden");
        agreeBtn.classList.remove("hidden");
      }, 500);
    });
  } else {
    scrollBtn.classList.add("hidden");
    agreeBtn.classList.remove("hidden");
  }
}

//Popup
agreeBtn.addEventListener('click', ()=> {
    alert('Agreed!')
})

window.addEventListener("load", checkContentHeight);
window.addEventListener("resize", checkContentHeight);
