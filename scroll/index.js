const btns = document.querySelectorAll(".btn");
const boxs = document.querySelectorAll(".box");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const boxOffsetTop = boxs[index].offsetTop;
    window.scroll({ top: boxOffsetTop, behavior: "smooth" });
  });
});
