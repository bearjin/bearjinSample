function moveRightToLeft() {
  const wrap = document.querySelector('.marquee--script');
  const items = wrap.querySelectorAll('.marquee__item');
  const wrapSize = wrap.getBoundingClientRect();
  let left = 0;
  let interVal;
  const frame = () => {
    left++;
    items.forEach(item => {
      item.style.transform = `translateX(-${left}px)`;
    });
    if (left > wrapSize.width) {
      clearInterval(interVal);
      left = 0;
      interVal = setInterval(frame, 10);
    }
  }
  interVal = setInterval(frame, 10);
}