// Объявление модуля
var validation = (function () {

    // Инициализирует наш модуль
    var init = function () {
        _setUpListners();
    };

    // Прослушивает события
    var _setUpListners = function () {

    };

    //Создает тултипы
    var _createQtip = function(element, position) {

        // позиция тултипа
        if (position === 'right') {
            position = {
                my: 'left center',
                at: 'right center'
            }
        } else{
            position = {
                my: 'right center',
                at: 'left center',
                adjust: {
                    method: 'shift none'
                }
            }
        }

        // Инициализация тултипа
        element.qtip({
            content: {
                text: function() {
                    return $(this).attr('qtip-content');
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown hideTooltip'
            },
            position: position,
            style: {
                classes: 'qtip-mystyle qtip-rounded',
                tip: {
                    height: 10,
                    width: 16
                }
            }
        }).trigger('show');

    };

    //Универсальная функция
    var validateForm = function(form) {

        var element = form.find('input, textarea').not('input[type="file"]', 'input[type="hidden"]'),
            valid = true;

        // Пройдемся по всем елементам формы
        $.each(element ,function(index, val) {
            console.log(index);
            console.log(val);
        });

    };

    // Возвращаем объект (публичные методы)
    return {
        init: init,
        validateForm: validateForm
    };

})();

// Вызов модуля
validation.init();