const marqueeMotion = () => {
  const marquees = document.querySelectorAll('.marquee');
  marquees.forEach(marquee => {
    const direction = marquee.dataset.direction;
    let marqueeWidth = marquee.getBoundingClientRect().width;
    const marqueeItems = marquee.querySelectorAll('.marquee__item');
    const marqueeItemWidth = marqueeItems[0].getBoundingClientRect().width;
    let move = 0;
    let moveInterVal;

    if (marqueeItems.length === 1) {
      marquee.classList.add('marquee--itemOne');
      marqueeWidth += marqueeItemWidth;
      if (direction === 'right') marqueeItems[0].style.marginLeft = `-${marqueeItemWidth}px`;
    }
    if (marqueeItems.length === 2) {
      marquee.classList.add('marquee--itemTwo');
    }

    const frame = () => {
      move++;
      marqueeItems.forEach(item => {
        item.style.transform = direction === 'left' ? `translateX(-${move}px)` : `translateX(${move}px)`;
      });

      if (move > marqueeWidth) {
        clearInterval(moveInterVal);
        move = 0;
        moveInterVal = setInterval(frame, 10);
      }
    }
    moveInterVal = setInterval(frame, 10);
  });
}