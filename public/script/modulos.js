// Js para funcionalidades do Modulos.html 
// Não deve incluir funcinalidades comum entre os sites, como navegação.
//Este script configurará a interatividade das caixas de módulos na página home 


const modcolor = document.getElementById("img3");


//Constantes




modcolor.addEventListener('click', function(){
    
    window.location.href="./public/html/Color.html";
    
    
    console.log("Carregada a página Color");
    
    
    
});