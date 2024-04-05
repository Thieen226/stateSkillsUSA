const navMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const showMenu = document.getElementById('show-menu');

if(showMenu){  
    showMenu.addEventListener('click', () => {
        navMenu.classList.add('close-menu');
    })
}

if(closeMenu){
    console.log("hi")
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('close-menu');
    })
}