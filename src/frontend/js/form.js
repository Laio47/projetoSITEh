const tela = document.querySelector(".tudo");
const formulario = document.querySelector(".bloco-form");
var styles = window.getComputedStyle(formulario);
const SignIn = document.querySelector(".botaoSI");

var clicks = 0;

function mostrarTela() { 
    clicks++;
    console.log("tela " + clicks);     
    if(clicks == 3){
        formulario.style.visibility = "hidden";
        tela.style.webkitFilter = "blur(0px)";
        console.log("tela " + clicks);
        clicks = 0;       
    }
}

function mostrarForm () {
    if (styles.visibility == "hidden") {
        formulario.style.visibility = "visible";
        tela.style.webkitFilter = "blur(5px)";
        clicks++;
        console.log("botao "+clicks);
    }
};
