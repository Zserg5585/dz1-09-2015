$(document).ready(function() {
    if(!Modernizr.input.placeholder){
        $('input, textarea').placeholder();
    }
})