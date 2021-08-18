let taskbar = document.getElementsByClassName('taskbar')[0];
let startMenu = document.getElementsByClassName('menu')[0];

taskbar.addEventListener('click', ()=>{
    if(startMenu.style.bottom == '50px'){
        startMenu.style.bottom = '-650px'
    } else{
        startMenu.style.bottom = '50px'
    }
})

