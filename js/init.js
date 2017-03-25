(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.carousel').carousel();
        $('.carousel').carousel({
            padding: 200
        });
        autoplay()

        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 2500);
        }
        $('.target').pushpin({
            top: 0
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
$('.menu-flexible').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});
var options = [{
    selector: '#contactanos',
    offset: 50,
    callback: function(el) {
        Materialize.toast("Contactanos al whatsapp 3002386570", 5000);
    }
}, {
    selector: '#salir-de-la-rutina',
    offset: 205,
    callback: function(el) {
      Materialize.toast("Recuerda! Te obsequiaremos una bebida inicial", 5000);
        
    }
}];
Materialize.scrollFire(options);