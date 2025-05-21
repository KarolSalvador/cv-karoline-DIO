const darkThemeBtn = document.getElementById('darkThemeBtn');
const bodyElement = document.body;

darkThemeBtn.addEventListener('click', () => {
    console.log('clicou no botão');

    bodyElement.classList.toggle('dark-mode'); //toggle verifica se a classe já está e adiciona ou remove de acordo

    const darkThemeImg = document.getElementById('darkThemeImg');
    if(bodyElement.classList.contains('dark-mode')) {
        darkThemeImg.src = './assets/Light-Mode Bright Dark-48.png'
        darkThemeImg.alt = 'Ícone de lua para tema claro.'

    } else {
        darkThemeImg.src = './assets/9071075_dark_mode_icon.png';
        darkThemeImg.alt = 'Ícone de sol para tema escuro.'
    }
    
})