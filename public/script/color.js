// Js para funcionalidades do Color.html 
// Não deve incluir funcinalidades comum entre os sites, como navegação.

function init(){
    document.addEventListener('DOMContentLoaded', function(){
    changeColor();
})
}

// para mudar a cor quando selecionado na paleta
// usar metodo no input da paleta -> onchange
function changeColor(){
    var cor = document.querySelector('input').value;
    console.log(cor);
    document.querySelector('.preview').style.backgroundColor = cor;
}

init();

