var slideItem = 0;

// Função que captura a largura do elemento quando a página for carregada
window.onload = function(){
    setInterval(passarSlide, 2000);
    
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    
    for(var i in objs){
        objs[i].style.width = slidewidth+ 'px';
    }
}

function passarSlide(){
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    
    if(slideItem >= 3){
        slideItem = 0;
    }else{
        slideItem++;
    }
    
    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
    
}


function mudarSlide(pos){
    slideItem = pos;
     var slidewidth = document.getElementById("slideshow").offsetWidth;
     document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}





