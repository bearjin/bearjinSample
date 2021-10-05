const tabHandler = () => {
  const tabWarp = document.querySelectorAll('.tab-wrap');

  tabWarp.forEach(item => {
    item.addEventListener('click', (e) => {
      const target = e.target;
      const buttons = item.querySelectorAll('.tab-wrap__button');

      buttons.forEach(button => {
        button.classList.remove('tab-wrap__button--active');
      });

      if (target.classList.contains('tab-wrap__button--active')) {
        target.target.classList.remove('tab-wrap__button--active');
      } else {
        target.classList.add('tab-wrap__button--active');
      }
    });
  });
}