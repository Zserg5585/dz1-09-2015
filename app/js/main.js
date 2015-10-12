$(document).ready(function(){

    $('.add_pj').on('click', function(e) {
        e.preventDefault();

        $('.popup').bPopup({
            closeClass : 'popup__close'
        });
    });

    $('.form__input-file-origin').on('change', function(){

        var
            $this = $(this),
            value = $this.val(),
            pureVal = value.replace(/c:\\fakepath\\/gmi, "");

        $('.form__input-fake').text(pureVal);

    });


});