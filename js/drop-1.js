  /*---открываем меню на мобильных устройствах---*/
 
 var mobiHover = document.getElementsByClassName('mobi-hover'); 
 
for (let i = 0; i < mobiHover.length; i++) { 
	mobiHover[i].onclick = function(){				
			this.classList.toggle('open');								
	}
}	

var menuLink = document.getElementsByClassName('menu-link'); 

for (let i = 0; i < menuLink.length; i++) { 
	menuLink[i].onclick = function(){				
			this.classList.toggle('open');								
	}
}	

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
