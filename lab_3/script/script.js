//window.open('https://elearn.csn.khai.edu/xsl-portal');
var formvar = document.getElementById("formValue");

formvar.addEventListener('submit', (e) => {
  // ставлю на форму слушатель событий ра екшен submit(когба будет нажата кнопка с типом submit в форме), вторым аргументом идёт функция что сработает если произойдёт событие, в ней переменая e(название может быть любое), в которой всякие штуки для обраюотки события
  //отменяю стандартное поведение события submit(обновление страници)
	if  (KirilicError(formvar) == false){
    	e.preventDefault();
		document.getElementById('selected').style.marginLeft='-25px';
  	}
	else {
		window.open('animpage.html');
	}
});

function KirilicError(formvar) {
    var surNameErr = document.getElementById('surname').value;
    var nameErr = document.getElementById('name').value;
    var patronymicErr = document.getElementById('patronymic').value;

    if (!surNameErr.match(/[a-zA-Z]+/)) {
		document.getElementById('imgSur').style.display = 'inline-block';
    	
  	}
	if (!nameErr.match(/[a-zA-Z]+/)) {
		document.getElementById('imgName').style.display = 'inline-block';
    	
  	}
	if (!patronymicErr.match(/[a-zA-Z]+/)) {
		document.getElementById('imgPtr').style.display = 'inline-block';
    	return false;
  	}
}