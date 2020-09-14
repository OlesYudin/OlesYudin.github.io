$(document).ready(function() {
    extraMinLetter =0;
    extraLetter = 0;
    extraReg = 0;
    extraCapitalLetter = 0;
    extraRepeatNumber = 0;
    extraRepeatLetter = 0;
    extraRepeatNumberSequently = 0;
    extraRepeatPassword = 0;
    /* extraMultiLanguage = 0; */
    extraSum = 0;
    // Show password
    $('body').on('click', '.show-password', function () {
        if ($('#pswd').attr('type') == 'password') {
            $(this).addClass('view');
            $('#pswd').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#pswd').attr('type', 'password');
        }
        return false;
    });
    
    var passwords;
        jQuery.get("vocabulary.txt", function(data) { 
             passwords = data.split(/\r?\n/); 
        }); 

	$('input[type=password]').keyup(function() {
        
        // Запрет на ввод кириллицы
        var reg = /[а-яА-ЯёЁіІ]/g;
        if (this.value.search(reg) !=  -1) {
            this.value  =  this.value.replace(reg, '');
        }
        
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }

        // validate kirillic
        if ( pswd.match(/[а-яА-ЯёЁіІ]/g)) {
            $('#kirillic').removeClass('valid').addClass('invalid');
        } else {
            $('#kirillic').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if ( pswd.match(/[A-z]/) || pswd.match(/[А-я]/) || pswd.match(/[А-я]/)) {
        	$('#letter').removeClass('invalid').addClass('valid');
        } else {
        	$('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) || pswd.match(/[А-Я]/) || pswd.match(/[А-Я]/)) {
        	$('#capital').removeClass('invalid').addClass('valid');
        } else {
        	$('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/[0-9]/) ) {
        	$('#number').removeClass('invalid').addClass('valid');
        } else {
        	$('#number').removeClass('valid').addClass('invalid');
        }
        //validate special symbol
        if ( pswd.match(/[@ \/ \\ \# \$ \% \^ \& \* \( \) \[ \] \; \: \: \" \' \! \- \+ \= \. \, \<> \` \~]/) ) {
        	$('#reg').removeClass('invalid').addClass('valid');
        } else {
        	$('#reg').removeClass('valid').addClass('invalid');
        }
        // Меньше 5ти смовлов в пароле
        if ( pswd.length < 5 ) {
            $("#extraShowMinLetter").removeClass('show').addClass('none');
            $("#extraHideMinLetter").removeClass('none').addClass('show');
            extraMinLetter = -10;
        } else {
            $("#extraShowMinLetter").removeClass('none').addClass('show');
            $("#extraHideMinLetter").removeClass('show').addClass('none');
            extraMinLetter = 0;
        }
        // Больше 10ти смовлов в пароле
        if ( pswd.length < 10 ) {
            $("#extraLetter").removeClass('show').addClass('none');
            extraLetter = 0;
        } else {
            $("#extraLetter").removeClass('none').addClass('show');
            extraLetter = 10;
        }
        // Больше 2х спецсимволов
        if ( pswd.match(/[~!@#$%^&*()]{2,}/) ) {
            $("#extraReg").removeClass('none').addClass('show');
            extraReg = 10;
        } else {
            $("#extraReg").removeClass('show').addClass('none');
            extraReg = 0;
        } 
        // Больше трех заглавных букв подряд
        if ( pswd.match(/[A-Z].*[A-Z]/) ) {
            $("#extraShowLetter").removeClass('show').addClass('none');
            $("#extraHideLetter").removeClass('none').addClass('show');
            extraCapitalLetter = -10;
        } else {
            $("#extraShowLetter").removeClass('none').addClass('show');
            $("#extraHideLetter").removeClass('show').addClass('none');
            extraCapitalLetter = 0;
        }
        // Больше двух цифр подряд
        if ( pswd.match(/[0-9].*[0-9].*[0-9].*[0-9].*[0-9]/) ) {
            $("#extraShowNumber").removeClass('show').addClass('none');
            $("#extraHideNumber").removeClass('none').addClass('show');
            extraRepeatNumber = -10;
        } else {
            $("#extraShowNumber").removeClass('none').addClass('show');
            $("#extraHideNumber").removeClass('show').addClass('none');
            extraRepeatNumber = 0;
        }
        if ( pswd.match(/[0-9]{2,}/) ) {
            $("#extraShowNumberSequently").removeClass('show').addClass('none');
            $("#extraHideNumberSequently").removeClass('none').addClass('show');
            extraRepeatNumberSequently = -10;
        } else {
            $("#extraShowNumberSequently").removeClass('none').addClass('show');
            $("#extraHideNumberSequently").removeClass('show').addClass('none');
            extraRepeatNumberSequently = 0;
        }
        // Проверка на словарь
        if (jQuery.inArray( pswd, passwords ) == -1) { 
            $("#extraShowPassword").removeClass('none').addClass('show');
            $("#extraHidePassword").removeClass('show').addClass('none');
            extraRepeatPassword = 0;
        } else {
            $("#extraShowPassword").removeClass('show').addClass('none');
            $("#extraHidePassword").removeClass('none').addClass('show');
            extraRepeatPassword = -10;
        }
        // Пароль не содержит повторяющихся символов
        if ( pswd.match(/^(?!.*(.).*\1)[a-z0-9]*$/gim)) {
            $("#extraRepeatLetter").removeClass('none').addClass('show');
            extraRepeatLetter = 20;
        } else {
            $("#extraRepeatLetter").removeClass('show').addClass('none');
            extraRepeatLetter = 0;
        }

        // Подсчет доп. балов
        extraSum = extraMinLetter + extraLetter + extraReg + extraCapitalLetter + extraRepeatNumber + extraRepeatNumberSequently + extraRepeatPassword /* + (extraMultiLanguage) */ + extraRepeatLetter;
        document.getElementById('extraSum').innerHTML = extraSum;


        // Функция для подсчета букв верхнего и нижнего регистра
        upperCase = 0;
        lowerCase = 0;
        uppLowCaseSum = document.getElementById('pswd').value.replace(/[^a-zа-яё]/ig,''),
        uppLowCaseSplit = uppLowCaseSum.split('');
        for(var i = 0; i < uppLowCaseSplit.length; i++){
            if(uppLowCaseSplit[i] == uppLowCaseSplit[i].toUpperCase()) upperCase++;
            else lowerCase++;
        }
        // Верхний регистр
        document.getElementById('upperCase').value = upperCase;
        $('#upperCase').html(upperCase);
        // нижний регистр
        document.getElementById('lowerCase').value = upperCase;
        $('#lowerCase').html(lowerCase);


        }).focus(function() {
        	$('#ppswd_info').show();
        }).blur(function() {
	    $('#ppswd_info').hide();
    });
});