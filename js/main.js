$('.petka-nav a').click(function(){
    /*if( $(this).attr('href') === '#services' ) {
        s.animateTo(1000);
    } else if( $(this).attr('href') === '#foto' ) {
        s.animateTo(2000);
    } else if( $(this).attr('href') === '#footer' ) {
        s.animateTo(2500);
    } else {
        s.animateTo(0);
    }*/
    toggleMenu();
    //return false;
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


$('.photo-row').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: '.popup-href', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled:true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow custom-mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Předchozí (Levá šipka klávesnice)', // title for left button
            tNext: 'Další (Pravá šipka klávesnice)', // title for right button
            tCounter: '' // markup of counter
        },
        callbacks: {
				buildControls: function() {
					// re-appends controls inside the main container
					this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
				}
			}
    });
});
