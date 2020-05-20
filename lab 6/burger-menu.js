function burgerMenu(selection){
    let menu = $(selection);
    let button = menu.find('.burger-menu_button');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
menu.toggleClass('burger-menu_active');

if (menu.hasClass('burger-menu_active')){
    $('body').css('overflow', 'hidden');
} else{
    $('body').css('overflow', 'visible');
}
    }
}

burgerMenu('.burger-menu');