 /*---открываем меню на мобильных устройствах---*/
  var mobiHover = document.getElementsByClassName('mobi-hover'); 	
  var dropMenu = document.getElementsByClassName('drop-menu');

// Функция, закрывающая блок, если он был до этого открыт
function closeDiv(openedElem) {
	for (let i = 0; i < mobiHover.length; i++) {
		if (openedElem && mobiHover[i].className === 'mobi-hover open') {
			mobiHover[i].className = 'mobi-hover';
		}
	}
};

// Обходим всех родителей элемента (node) ( получаем в результате массив)
function top_walker (node, test_func, last_parent) {
	while ( node && node !== last_parent ) {
		if ( test_func(node) ) {
			return node;
		}
		node = node.parentNode; // родительский узел
	}
}

// Клик по полю документа (по любому узлу DOM)
document.documentElement.addEventListener('click', function (event) {   // document.documentElement = html(коренной элемент документа)

    // проверяем, содержит ли массив родителей узла, по которому кликнули, список #drop
	for (let i = 0; i < dropMenu.length; i++) {
		var isClickWithinOpenedDiv = top_walker(event.target, function (node) {
			return node === dropMenu[i]
		})
		
		if (!isClickWithinOpenedDiv) { // если не содержит, закрываем список функцией closeDiv
			closeDiv(dropMenu[i])
		}
	}
	
}, true)
 
 for (let i = 0; i < mobiHover.length; i++) {
	mobiHover[i].addEventListener('click', function(){mobiHover[i].classList.add('open')})
}

		/*Можно так:	
	
	for (let i = 0; i < mobiHover.length; i++) {
		mobiHover[i].onclick = function(){				
				
			if (this.className == 'mobi-hover open') {
				this.classList.remove('open');				
			}
			if (this.className == 'mobi-hover') {
				this.classList.add('open');			
			}
		}
	}
	*/

var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');

var dropLi = document.querySelectorAll('.drop-menu li');

btn1.onclick = function() {
	for(let j = 0; j < dropLi.length; j++) {
		dropLi[j].className = "media-li";		
	}	
}

btn2.onclick = function() {
	for(let j = 0; j < dropLi.length; j++) {
		dropLi[j].className = "media-li blue";		
	}	
}

btn3.onclick = function() {
	for(let j = 0; j < dropLi.length; j++) {
		dropLi[j].className = "media-li brown";		
	}	
}
