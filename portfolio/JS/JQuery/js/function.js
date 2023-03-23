$(function(){

  var indiceAtual = 0;
  var indiceMaximo = $('.slider img').length();
  var delay = 3000;

  initSlider();
  function initSlider(){
    $('.slider img').eq(0).fadeIn();
    setInterval(alternarSlider(),delay)
  }

  function alternarSlider(){
    
  }
});
