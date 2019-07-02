var form = document.getElementById('form'); //получаю форму по айди

        form.addEventListener('submit',function(e){ // ставлю на форму слушатель событий ра екшен submit(когба будет нажата кнопка с типом submit в форме), вторым аргументом идёт функция что сработает если произойдёт событие, в ней переменая e(название может быть любое), в которой всякие штуки для обраюотки события
            valid(form);//вызываю ту фукнции и передаю в неё форму
            noChecked(form);
            // btn(form);
            e.preventDefault();//отменяю стандартное поведение события submit(обновление страници)
        })
        
        // Проверка на нажатие радио кнопок
        function noChecked(form) {
            if (document.getElementById('women').checked || document.getElementById('men').checked) {
                //
            }
            else {
                document.getElementById('forStatus').style.display = 'inline-flex';
            }
        }

        
        function valid (form) {
            
            var name = form.name.value; 
            
            // alert(input_date); // вообще надо вывести хотябы result_date но там он не работает из-за разных форматов  даты
            var dateStr = document.getElementById("date").value;
            if (!dateStr) {
                document.getElementById('forDate').style.display = 'inline-flex';
            }

            // Создание объекта Date из даты введённой пользователем
            // и текущего времени
            var date = new Date(dateStr), now = new Date();

            // "Грубое" вычисление возраста и разницы между месяцами и днями
            var age = now.getYear() - date.getYear(),
            monthDiff = now.getMonth() - date.getMonth(),
            dayDiff = now.getDate() - date.getDate();
            // проверяем наступил ли день рождения в текущем году
            // и если ещё не наступил, то уменьшаем возраст
            if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }
    
            
            
            if (name == "" || name==" ") {
                // fail = alert('Вы не ввели свое имя');
                document.getElementById('forName').style.display = 'block';
            
            }
            
            
            // Если мужчина < 21
            if (document.getElementById('men').checked && age < 21) {
                alert(name + ', вам нету 21 года!')
            }
            
            // Если женщина < 18
            if (document.getElementById('women').checked && age < 18) {
                alert(name + ', вам нету 18 лет!')
            } 
            
            
            
            else {
                /*
                location.href = 'https://ru.stackoverflow.com/questions/981873/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8'
                */
            }
        }
