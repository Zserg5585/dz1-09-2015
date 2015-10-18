// Объявление модуля
var validation = (function () {

    // Инициализирует наш модуль
    var init = function () {
        _setUpListners();
    };

    // Прослушивает события
    var _setUpListners = function () {
        $('#contact-me').on('submit', _submitForm);
    };

    var _submitForm = function(e) {
        e.preventDefault();

        var form = $(this),
            url = 'contactme.php',
            defObj = _ajaxForm(form, url);

    };

    var _ajaxForm = function() {

    };



    // Возвращаем объект (публичные методы)
    return {
        init: init,
        validateForm: validateForm
    };

})();

// Вызов модуля
validation.init();