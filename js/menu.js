$('.navbar-nav a').click(function(){
    if( $(this).attr('href') === '#services' ) {
        s.animateTo(1000);
    } else if( $(this).attr('href') === '#foto' ) {
        s.animateTo(2000);
    } else {
        s.animateTo(0);
    }
    toggleMenu();
    return false;
});

function toggleMenu() {
    if( $(window).width() < 764 ) {
        $('.navbar-collapse').collapse('toggle');
    }
}
