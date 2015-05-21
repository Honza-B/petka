$('.petka-nav a').click(function(){
    if( $(this).attr('href') === '#services' ) {
        s.animateTo(1000);
    } else if( $(this).attr('href') === '#foto' ) {
        s.animateTo(2000);
    } else if( $(this).attr('href') === '#footer' ) {
        s.animateTo(2500);
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

$('.btn-prices').click(function(){
    var $this = $(this);
    if( $this.hasClass('open') ) {
        $this.removeClass('open');
        $this.attr('src','img/cenik-close.png');
        $('.services-item').removeClass('open');
    } else {
        $this.addClass('open');
        $this.attr('src','img/cenik-open.png');
        $('.services-item').addClass('open');
    }
});

$('.btn-order').click(function(){
    s.animateTo(2500);
});
