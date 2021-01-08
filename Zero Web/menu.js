$(document).ready(main);

var show_menu =false;

function main (){
    $('.menu_bar').click(function(){
        if(show_menu == false){
            $('nav').animate({
                left:'0'
            });
            show_menu = true;
            document.getElementById("navbar").style.background= "var(--color-primario)";
            document.getElementById("mi").style.background= "var(--color-primario)";
        } else{
            $('nav').animate({
                left:'-100%'
            });
            show_menu = false;
            document.getElementById("navbar").style.background= "rgba(1,1,1,0)";
            document.getElementById("mi").style.background= "rgba(1,1,1,0)";
        }
    });
    $('.menu_item').click(function(){
        if(show_menu=true){
            $('nav').animate({
                left:'-100%'
            });
            show_menu = false;
        }
    })
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background= "rgba(1,1,1,0)";
    document.getElementById("mi").style.background= "rgba(1,1,1,0)";
  } else {
    document.getElementById("navbar").style.background= "var(--color-primario)";
    document.getElementById("mi").style.background= "var(--color-primario)";
  }
}