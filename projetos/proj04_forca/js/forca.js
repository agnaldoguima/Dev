// let letrasDigitadas = [];
let palavraSecretaSorteada;
let palavraCategoria;
let tentativas = 6;
let palavraSecretaPorLetra = [];
let listaDinamica = [];
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];


//sorteia a palavra secreta e sua categoria
criarPalavraSecreta();
function criarPalavraSecreta(){
    // gera um indice aleatório entre 0 e 50 para servir de apoio na escolha da palavra que está na lista
    const indexPalavra = parseInt(Math.random() * palavras.length);
    // passa o indice sorteado para a lista referenciar a palavra Secreta
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
}

// cria uma lista com a palavra secreta separado na lista por cada letra
//palavraSecretaPorLetra = palavraSecretaSorteada.split('');  

// monta a quantidade de espaços da palavra na tela
// montarPalavraNaTela(palavraSecretaPorLetra)
montarPalavraNaTela()
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraCategoria;

    const palavraTela = document.getElementById("palavra-secreta"); 
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){ 
         if(listaDinamica[i] == undefined){
              listaDinamica[i] = "&nbsp;"
              palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
         } 
         else{
              palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"   
         }
    }
} 
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background="#C71585"   
    document.getElementById(tecla).style.color="#FFFFFF"  
}
function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra) 
        comparaListas(letra)
        montarPalavraNaTela()

        //  if(verificaSeLetraNaoFoiDigitada(letra)  == 0) { // lista vazia e primeira letra escolhida   
        //      mudarStyleLetra("tecla-" + letra) 
        //      comparaListas(letra)
        //      montarPalavraNaTela()
        //  }
        //  else if(verificaSeLetraNaoFoiDigitada(letra) == 1){//letra repetida
        //     abreModal("OPS!", "A letra " + letra + " ja foi usada.")   
        //  }
        //  else{//letra nova
        //      letrasDigitadas.push(letra);
        //      mudarStyleLetra("tecla-" + letra)
        //      comparaListas(letra)
        //      montarPalavraNaTela()
        //  }
    } 
}
// function verificaSeLetraNaoFoiDigitada(letra){
//    response = 0;
//    if(letrasDigitadas.length < 1){
//         letrasDigitadas.push(letra);       
//         response =  0;
//    }
//    else{
//         for(i = 0; i <= letrasDigitadas.length; i++){
//              if(letra == letrasDigitadas[i]){
//                   // se o retorno for maior ou igual a 0 existe no array o valor procurado
//                   if(function jaTemLetra() { 
//                       return  (letrasDigitadas.indexOf(letra) >= 0);
//                     }){
//                     return response =  1
//                   }     
//              }
//              else{
//                   response =  2;
//              }
//         }
//    } 
//    return response;
// }

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){// significa que a letra não existe na palavra secreta
         tentativas--
         carregaImagenForca();

         if(tentativas == 0){  
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada)
         }
    }
    else{
         for(i = 0; i < palavraSecretaSorteada.length; i++){
             if(palavraSecretaSorteada[i] == letra){
                  listaDinamica[i] = palavraSecretaSorteada[i];      
             }    
        }   
    } 
    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
         if (listaDinamica[i] != palavraSecretaSorteada[i]) { 
              vitoria = false
         }
    }
    if(vitoria == true){
        abreModal("PARABÉNS!", "Você venceu <br>") 
         tentativas = 0;
    }   
}
function carregaImagenForca()
{
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')"
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')"
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')"
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')"
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')"
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')"
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')"
            break;

    }
    
}
function abreModal(titulo, mensagem) {
    let modalTitle = document.getElementById("exampleModalLongTitle")
    modalTitle.innerText = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
         show: true
    });
}

var btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
     location.reload();
});