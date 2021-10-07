function moveRightToLeft() {
  $textLi.find(".text_inner").find(".top").stop().css({ left: 0 });
  $textLi.find(".text_inner").find(".top").animate({
    left: '-=' + textTopW,
  }, 25000, 'linear', function () {
    textAniTop();
  });
}

function moveLeftToRight() {
  $textLi.find(".text_inner").find(".bottom").stop().css({ right: 0 });
  $textLi.find(".text_inner").find(".bottom").animate({
    right: '-=' + textBtmW,
  }, 25000, 'linear', function () {
    textAniBtm();
  });
}