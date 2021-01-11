const menu = document.querySelector('.menu-title');



window.addEventListener('scroll', e => {
    console.log(e.srcElement.scrollingElement.scrollTop)

    if (e.srcElement.scrollingElement.scrollTop > 200) {
        // menu.classList.add('menu-sticky')
        menu.style.display = 'inline';
        // menu.style.top = '0';
    } else {
        menu.style.display = 'none';
    }
    
})

menu.addEventListener('click', e => {
    // console.log(menu.offsetTop)
    
})