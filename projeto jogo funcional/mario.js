const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    console.log(canoPosition)

    if (canoPosition < 120 && canoPosition > 0 && marioPosition < 80) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);


// Seu código JavaScript para resetar o site
document.getElementById("resetButton").addEventListener("click", function() {
    // Aqui você pode adicionar código para limpar o estado atual do seu site
    // Por exemplo, você pode recarregar a página para limpar todos os dados
    location.reload();
});



var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink )
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})