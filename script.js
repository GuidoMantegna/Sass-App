const menuTitle = document.querySelector('.title');

window.addEventListener('scroll', e => {
    console.log(e.srcElement.scrollingElement.scrollTop)

    if (e.srcElement.scrollingElement.scrollTop > 200) {
        menuTitle.style.display = 'block';
    } else {
        menuTitle.style.display = 'none';
    }
    
})
