/*  Скрипт для прокрутки вверх */
/*---Функция прокрутки страницы---*/
window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop; //
  var innerHeight = document.documentElement.clientHeight;
  var upButton = document.getElementsByClassName('upbutton')[0];
  
  /*---Пока страница промотана меньше чем на высоту экрана вниз – кнопка не видна.
       При промотке страницы вниз больше, чем на высоту экрана, появляется кнопка «стрелка вверх».---*/
  if (pageY > innerHeight) {
	 upButton.style.display = "block";
  }
  if (pageY < innerHeight) {
	 upButton.style.display = "none";
  }
  
}  
  /*--Функция клика на кнопку, вызывающая плавное движение вверх к началу документа--*/
    var JumpUp = function() {
        if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
            window.scrollBy(0,-50);
            setTimeout(JumpUp, 20);
        }
    }