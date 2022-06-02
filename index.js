//faz a função da media query dentro do quadro(div)
var wasSmall = false;   
const quadro = document.querySelector("#quadro")
const observer = new ResizeObserver(entries =>{
    const quadroElement = entries[0]
    const isSmall = quadroElement.contentRect.width < 600
    if(isSmall===true) {
        //cores icones
        $(".mobile").addClass("tamanhoAtivo");
        $(".desktop").removeClass("tamanhoAtivo");
        //div2
        $(".grid").addClass("grid-small")
        $(".grid .div-container:nth-child(n+4)").addClass("grid-2-small")
        $(".grid #anuncio").addClass("grid-anuncio-small")

        //div3
        $(".grid2").addClass("grid2-small")
        $(".sidenav").addClass("sidenav-small")
        $(".sidenav .div-container").addClass("sidenav-small-div")    
        wasSmall = true;
    }
    else if(isSmall===false && wasSmall === true){
        $(".desktop").addClass("tamanhoAtivo");
        $(".mobile").removeClass("tamanhoAtivo");
         //div2
        $(".grid").removeClass("grid-small")
        $(".grid > .div-container:nth-child(n+4)").removeClass("grid-2-small")
        $(".grid #anuncio").removeClass("grid-anuncio-small")

        //div3
        $(".grid2").removeClass("grid2-small")
        $(".sidenav").removeClass("sidenav-small")
        $(".sidenav .div-container").removeClass("sidenav-small-div")    
        wasSmall = false;
    }
})
observer.observe(quadro)

// Muda o display que está sendo exibido
var tela = 1;
var eraTela = 0;
$(".fa-circle-arrow-left").on("click",function(){
  eraTela = tela;
  tela --;
  mudarTela();
})
$(".fa-circle-arrow-right").on("click",function(){
  eraTela = tela;
  tela ++;
   mudarTela();
})

$(".form-check-input").on("click",function(){
eraTela = tela;
tela = $("input[name='radioDisplay']:checked").val();
if (eraTela === tela){
    eraTela = 0;
}
mudarTela()
})
                       
function mudarTela(){
    if(tela===5){tela=1}
    else if(tela===0){tela=4}
    $('#radioDisplay'+tela).attr("checked", true)
    $("h3").text("Display "+tela)
    $(".div"+tela).removeClass("off");
    $(".div"+eraTela).addClass("off");};
    $('#radioDisplay'+eraTela).attr("checked", false)

//Muda o tamanho(width) do quadro
$(".icon-display .fa-solid").on("click",function(e){
    if($(this).hasClass("desktop")){
        $(this).addClass("tamanhoAtivo");
        $(".mobile").removeClass("tamanhoAtivo");
        $(".quadro").css("width",1240)
    }
    if($(this).hasClass("mobile")){
        $(this).addClass("tamanhoAtivo");
        $(".desktop").removeClass("tamanhoAtivo");
        $(".quadro").css("width",375)
    }
})
