const tabHandler = () => {
  const tabWarp = document.querySelectorAll('.tab-wrap');

  tabWarp.forEach(item => {
    item.addEventListener('click', (e) => {
      const target = e.target;
      const buttons = item.querySelectorAll('.tab-wrap__button');
      const contents = document.querySelectorAll('.tab-contents__item');
      const tabNum = target.dataset.tabnum;

      buttons.forEach(button => {
        button.classList.remove('tab-wrap__button--active');
      });

      contents.forEach(content => {
        content.classList.remove('tab-contents__item--active');
      });

      if (target.classList.contains('tab-wrap__button--active')) {
        target.target.classList.remove('tab-wrap__button--active');
        contents[tabNum].classList.remove('tab-contents__item--active');
      } else {
        target.classList.add('tab-wrap__button--active');
        contents[tabNum].classList.add('tab-contents__item--active');
      }
    });
  });
}