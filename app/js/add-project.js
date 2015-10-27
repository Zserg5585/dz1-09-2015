var myModule = (function() {

    // Инициализирует наш модуль
    var init = function() {
        _setUpListners();
    };

    // Прослушивает события
    var _setUpListners = function() {
        $('.add_pj').on('click', _showModal); //открыть модальное окно
        $('#add-new-project').on('submit', _addProject); //добавление проекта
    };

    // Работает с модальным окном
    var _showModal = function(e) {
        e.preventDefault();

        //Fake-input
        $('.form__input-file-origin').on('change', function(){

            var
                $this = $(this),
                value = $this.val(),
                pureVal = value.replace(/c:\\fakepath\\/gmi, "");

            $('.form__input-fake').text(pureVal).trigger('hideTooltip').removeClass('has-error');

        });

        var divPopup = $('.popup');
            form = divPopup.find('.form');
        divPopup.bPopup({
            closeClass : 'popup__close',
            speed: 650,
            transition: 'slideDown',
            onClose: function () {
                form.find('.server-mes').text('').hide();
                this.find('.form').trigger("reset");
                validation.validateForm(form);
                form.find('.has-error').removeClass('has-error').trigger('hideTooltip');
                $('.form__input-fake').text("Загрузите изображение");
            }
        });
    };

    // Добавляет проект
    var _addProject = function(e) {
        e.preventDefault();

        // Объявляем переменные
        var form = $(this),
            url = 'add_project.php',
            defObj = _ajaxForm(form, url);
        // Проверяем был ли запрос на сервер?
        if(defObj) {
            defObj.done(function(ans) {

                var successBox = form.find('.success-mes'),
                    errorBox = form.find('.error-mes');

                if(ans.status === 'OK') {
                    successBox.text(ans.text).show();
                    errorBox.hide();
                }else {
                    errorBox.text(ans.text).show();
                    successBox.hide();
                }
            });
        }
    };

    // Универсальная функция
    // Для ее работы используется
    // @form - форма
    // @url - адрес php файла, к которому мы обращаемся
    // 1.собирает данные из формы
    // 2.проверяет форму
    // 3.делает запрос на сервер и возвращает ответ с сервера
    var _ajaxForm = function(form, url) {


        if (!validation.validateForm(form)) return false;

        $data = form.serialize();

        var result =  $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: $data
        }).fail(function(ans) {
                console.log('Проблемы в PHP');
                form.find('.error-mes').text('На сервере произошла ошибка').show();
            });

        return result;

    };

    // Возвращаем объект (публичные методы)
    return {
        init: init
    };

})();

myModule.init();
