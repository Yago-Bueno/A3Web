// Js para funcionalidades do Modulos.html 
// Não deve incluir funcinalidades comum entre os sites, como navegação.


const btnColor = document.getElementById("Colorbtn");
const btnAcc = document.getElementById("Accbtn");
const btnAcc3 = document.getElementById("Acc3btn");
const btnEeprom = document.getElementById("Membtn");

//Constantes




btnColor.addEventListener('click', function(){
    
    window.location.href="Color";
    
    
    console.log("Carregada a página Color");
    
    
    
});
btnAcc.addEventListener('click', function(){
    
    window.location.href="Acc_graph";
    
    
    console.log("Carregada a página Acelerômetro");
    
    
    
});

btnAcc3.addEventListener('click', function(){

    window.location.href="Acc_3d";


console.log("Carregada a página Acelerômetro 3d");



});


btnEeprom.addEventListener('click', function(){
    
    window.location.href="Eeprom";


console.log("Carregada a página EEprom");



});
