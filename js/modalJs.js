
// модальное окно обратной связи feedback
(function() {
  
// Сократим то, что нам нужно напечатать, чтобы получить ID
  function getId ( id ) {
    return document.getElementById(id);
  }

  // Список переменных
  var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mClose = getId('modal_close'),
      modal = getId('modal_holder'), // class="feedback"
      allNodes = document.querySelectorAll("*"),
      modalOpen = false,
      lastFocus,
      i;
  
  // Открываем модальное окно
  function modalShow () {
    lastFocus = document.activeElement;
    mOverlay.setAttribute('aria-hidden', 'false');
    modalOpen = true;
    modal.setAttribute('tabindex', '0');
    modal.focus();
  }


  // Связываемся как с кнопкой, так и с клавишей Escape, чтобы закрыть модальное окно
   //Но только если modalOpen имеет значение true
  function modalClose ( event ) {
    if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
      mOverlay.setAttribute('aria-hidden', 'true');
      modal.setAttribute('tabindex', '-1');
      modalOpen = false;
      lastFocus.focus();
    }
  }


  // Ограничиваем фокус модальным окном, когда оно открыто.
   // Tabbing просто пропустит весь модальный цикл.
   // Shift + Tab позволит создать резервную копию в верхней части модального,
   // и затем остановимся.
  function focusRestrict ( event ) {
    if ( modalOpen && !modal.contains( event.target ) ) {
      event.stopPropagation();
      modal.focus();
    }
  }


  // Закрываем модальное окно, нажав на оверлей
  mOverlay.addEventListener('click', function( e ) {
    if (e.target == modal.parentNode) {
       modalClose( e );
     }
  }, false);


  // Открываем модальное окно кнопкой .btn
  mOpen.addEventListener('click', modalShow);

  // close modal by btn click/hit
  mClose.addEventListener('click', modalClose);

  // close modal by keydown, but only if modal is open
  document.addEventListener('keydown', modalClose);

  // Ограничиваем фокус вкладки только элементами внутри модального окна
  for (i = 0; i < allNodes.length; i++) {
    allNodes.item(i).addEventListener('focus', focusRestrict);
  }

})();
