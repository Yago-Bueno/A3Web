// Js para funcionalidades da navegação em todos os sites
//Js base para todos

const btnHome = document.getElementById("home_btn");
const btnMod = document.getElementById("mod_btn");
const btnCont = document.getElementById("cont_btn");



btnHome.addEventListener('click', function(){
    
    window.location.href="index.html";
    
    
    console.log("Carregada a página Index");
    
    
    
});
btnMod.addEventListener('click', function(){
    
    window.location.href="Modulos.html";
    
    
    console.log("Carregada a página Acelerômetro");
    
    
    
});

btnCont.addEventListener('click', function(){

    window.location.href="Color.html";


console.log("Carregada a página Acelerômetro 3d");



});
