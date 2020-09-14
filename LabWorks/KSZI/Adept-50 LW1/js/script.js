$(document).ready(function() {
    // Добавить/убрать класс при клике на Пользователя
    $("#user ul li a").click(function(e) {
        e.preventDefault();
        $("#user ul li a").removeClass('active');
        $(this).addClass('active');
    });
    // При нажатии на пользователя подчеркнуть его возможности
    $('li .user-1').on("click", function() {
        $('.terminal').removeClass("active");
        $('.file').removeClass("active");
        $('.job').removeClass("active");
        $('.terminal-2').addClass("active");
        $('.file-1').addClass("active");
        $('.job-3').addClass("active");
        return false;
    });
    $('li .user-2').on("click", function() {
        $('.terminal').removeClass("active");
        $('.file').removeClass("active");
        $('.job').removeClass("active");
        $('.terminal-1').addClass("active");
        $('.file-2').addClass("active");
        $('.job-4').addClass("active");
        return false;
    });
    $('li .user-3').on("click", function() {
        $('.terminal').removeClass("active");
        $('.file').removeClass("active");
        $('.job').removeClass("active");
        $('.terminal-4').addClass("active");
        $('.file-5').addClass("active");
        $('.job-2').addClass("active");
        return false;
    });
    $('li .user-4').on("click", function() {
        $('.terminal').removeClass("active");
        $('.file').removeClass("active");
        $('.job').removeClass("active");
        $('.terminal-5').addClass("active");
        $('.file-3').addClass("active");
        $('.job-1').addClass("active");
        return false;
    });
    $('li .user-5').on("click", function() {
        $('.terminal').removeClass("active");
        $('.file').removeClass("active");
        $('.job').removeClass("active");
        $('.terminal-3').addClass("active");
        $('.file-4').addClass("active");
        $('.job-5').addClass("active");
        return false;
    });

    $('input[type=submit]').click(function() {
        
        var userValue = $("#selectUser option:selected").val();
        var terminalValue = $('input[name=terminal]:checked').val();
        var fileValue = $('input[name=file]:checked').val();
        var jobValue = $('input[name=job]:checked').val();
        // User-1
        if (userValue == "user1") {
            if (terminalValue === "terminal1" || terminalValue === "terminal2") {
                if (fileValue === "file1") {
                    if (jobValue === "job1" || jobValue === "job2" || jobValue === "job3") {
                        alert('Доступ есть!');
                    } else if (jobValue === "job4" || jobValue === "job5") {
                        alert('Нет доступа к работе!');
                    } else {
                        alert('Выберите работу!');
                    }
                } else if (fileValue === "file2" || fileValue === "file3" || fileValue === "file4" || fileValue === "file5") {
                    alert('Нет доступа к файлам!');
                } else {
                    alert('Выберите файл!');
                }
            } else if (terminalValue === "terminal3" || terminalValue === "terminal4" || terminalValue === "terminal5") {
                alert('Нет доступа к терминалу!');
            } else {
                alert('Выберите терминал!');
            }
        } 
        // User-2
        else if (userValue === "user2") {
            if (terminalValue === "terminal1") {
                if (fileValue === "file1" || fileValue === "file2") {
                    if (jobValue === "job1" || jobValue === "job2" || jobValue === "job3" || jobValue === "job4") {
                        alert('Доступ есть!');
                    } else if (jobValue === "job5") {
                        alert('Нет доступа к работе!');
                    } else {
                        alert('Выберите работу!');
                    }
                } else if (fileValue === "file3" || fileValue === "file4" || fileValue === "file5") {
                    alert('Нет доступа к файлам!');
                } else {
                    alert('Выберите файл!');
                }
            } else if (terminalValue === "terminal2" || terminalValue === "terminal3" || terminalValue === "terminal4" || terminalValue === "terminal5") {
                alert('Нет доступа к терминалу!');
            } else {
                alert('Выберите терминал!');
            }
        } 
        // User-3
        else if (userValue === "user3") {
            if (terminalValue === "terminal1" || terminalValue === "terminal2" || terminalValue === "terminal3" || terminalValue === "terminal4") {
                if (fileValue === "file1" || fileValue === "file2" || fileValue === "file3" || fileValue === "file4" || fileValue === "file5") {
                    if (jobValue === "job1" || jobValue === "job2") {
                        alert('Доступ есть!');
                    } else if (jobValue === "job3" || jobValue === "job4" || jobValue === "job5") {
                        alert('Нет доступа к работе!');
                        return false;
                    } else {
                        alert('Выберите работу!');
                        return false;
                    }
                } else {
                    alert('Выберите файл!');
                }
            } else if (terminalValue === "terminal5") {
                alert('Нет доступа к терминалу!');
            } else {
                alert('Выберите терминал!');
            }
        } 
        // User-4
        else if (userValue === "user4") {
            if (terminalValue === "terminal1" || terminalValue === "terminal2" || terminalValue === "terminal3" || terminalValue === "terminal4" || terminalValue === "terminal5") {
                if (fileValue === "file1" || fileValue === "file2" || fileValue === "file3") {
                    if (jobValue === "job1") {
                        alert('Доступ есть!');
                    } else if (jobValue === "job2" || jobValue === "job3" || jobValue === "job4" || jobValue === "job5") {
                        alert('Нет доступа к работе!');
                    } else {
                        alert('Выберите работу!');
                    }
                } else if (fileValue === "file4" || fileValue === "file5") {
                    alert('Нет доступа к файлам!');
                } else {
                    alert('Выберите файл!');
                }
            } else {
                alert('Выберите терминал!');
            }
        } 
        // User-5
        else if (userValue === "user5") {
            if (terminalValue === "terminal1" || terminalValue === "terminal2" || terminalValue === "terminal3") {
                if (fileValue === "file1" || fileValue === "file2" || fileValue === "file3" || fileValue === "file4") {
                    if (jobValue === "job1" || jobValue === "job2" || jobValue === "job3" || jobValue === "job4" || jobValue === "job5") {
                        alert('Доступ есть!');
                    } else {
                        alert('Выберите работу!');
                    }
                } else if (fileValue === "file5") {
                    alert('Нет доступа к файлам!');
                } else {
                    alert('Выберите файл!');
                }
            } else if (terminalValue === "terminal4" || terminalValue === "terminal5") {
                alert('Нет доступа к терминалу!');
            } else {
                alert('Выберите терминал!');
            }
        } else {
            alert('Выберите пользователя');
        }
    });
});