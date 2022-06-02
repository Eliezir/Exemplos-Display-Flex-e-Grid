var div1 = false;
var div2 = false;
var div3= true;

var wasSmall = false;   
const quadro = document.querySelector("#quadro")
const observer = new ResizeObserver(entries =>{
    const quadroElement = entries[0]
    const isSmall = quadroElement.contentRect.width < 600
    if(isSmall===true) {
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
