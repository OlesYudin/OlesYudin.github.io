var form = document.getElementById('formReg');
	form.addEventListener('submit', function(e){
		validate(form);
		e.preventDefault();
	})

function validate(form) {
	var name = form.name.value;
	var email = form.email.value;
	var password = form.pass.value;
	
	if (name == "" || name == " ") {
		document.getElementById('forName').style.display = 'inline-flex';
	}
	if (email == "" || email == " "){
		document.getElementById('forEmail').style.display = 'inline-flex';
	}
	if (password == "" || password == " "){
		document.getElementById('forPassword').style.display = 'inline-flex';
	}
}
                     
