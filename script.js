(function(){
    const openButton = document.querySelector('.hamburger');
    const navList = document.querySelector('nav ul');

    openButton.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Si necesitas cerrar el menú al hacer clic en algún ítem del menú
    navList.querySelectorAll('li').forEach((item) => {
        item.addEventListener('click', () => {
            navList.classList.remove('show');
        });
    });
})();
