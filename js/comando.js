
var numero_sorteiado;
var nomes = [
    {
    img: "imagens/bob.jpg",
    name: "Bob"
    
    },

    {
    img: "imagens/floze.jpg",
    name: "Flozen"
    
    },
    
    {
    img: "imagens/goku.svg",
    name: "Goku"
    
    },
    
    {
    img: "imagens/picpau.jpg",
    name: "PicaPau"
    
    },





]












for (let contador = 0; contador < nomes.length; contador++) {
    $('.principal div').eq(contador).css("background-image",`url(${nomes[contador].img})` );

 

    
}




 





function relogio(){ 
$('#btn_relogio').css("display", "none");
$(".personagens").css("display", "none");
$('#conta').css("display", "block");
$('input').css("display", "none")   
$('svg').css("display", "block")   







var tempo = setInterval(() => {
$('span').eq(1).text('si prepare...');
$('#conta').text(Number($('#conta').text())-1) 


if (Number($('#conta').text()) == 0) {
  
    clearInterval(tempo);
    $('svg').css("display", "none")   


$('#conta').css("display", "none");







    baralhar();
    




}












}, 1000);






   
 
 }







function baralhar() {
 
$('span').eq(1).text('olhe bem e tente memorizar as posição');
$(".personagens").css("display", "block");                  //essa parte está
$('#conta').text('5'); 


nomes.sort(() => 0.5 - Math.random())


for (let contador = 0; contador < nomes.length; contador++) { 
$('.principal div').eq(contador).css("background-image",`url(${nomes[contador].img})` );

   
} 
amostra();


 
    
}










function amostra() {
    
setTimeout(() => {


numero_sorteiado = Math.floor(Math.random() * 4);
$('input').css("display", "block")   


$(".personagens").css("display", "none");  //essa parte está


   

$('span').eq(1).text('Qual é posição correta de '+ nomes[numero_sorteiado].name);
$('#salvar_posicao').css("display", "block");



}, 3000);






    
    
    
}








function salvar() {
  
if ($('input').val()=="") {
    alert('digite alguma coisa');
  

}else if(Number($('input').val() ) > 4){
    alert('Digite apenas numero de 1 a 4');
  



}



 
else if(nomes[numero_sorteiado].name == nomes[$('input').val()-1].name ){
    $('span').eq(0).text(Number($('span').eq(0).text())+ 10)
    relogio()


}












else{



if ($('.vidas').length > 0 ) {
    
    $('.vidas').eq(0).remove();

}else{


    $('span').eq(1).text('Voçê morreu!!');
    $('input').css("display", "none")   


setTimeout(() => {
    $('span').eq(1).text('reiniciando game...');
    $('#salvar_posicao').css('display', 'none')


    setTimeout(() => {
      
          $('span').eq(1).text('Recomece uma nova partida!!');


        $('#btn_relogio').css("display", "block"); 
        $(".personagens").css("display", "block");

  


    for (let n = 0; n < 3; n++) {
   
   let images = document.createElement('img');
   images.classList = "vidas"
   images.src = 'imagens/vidas.jpg'
   $('#vidas_pontos').append(images)
   
   
   
       
   }





  

    }, 2000);
}, 1000);











}






}







$('input').val('')




}




