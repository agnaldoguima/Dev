//declaração de variáveis-----------------------------inicio
const numerosApostados = [];
const resultado = [];
let numeroSorteado = 0;
let valorAposta;
let qtdAcertos = 0;
//declaração de variáveis--------------------------------fim

const btnApostar = document.querySelector("#btnApostar");
btnApostar.disabled = true;

//chamando a função que sorteia os números------------inicio
sortearNumeros();
//chamando a função que sorteia os números---------------fim


//funções --------------------------------------------inicio
function sortearNumeros(){
  for(let i = 0; i < 6; i++) {    
       // Sorteando os números do jogo
      let numeroSorteado = Math.round(Math.random() * 60 + 1);
       
        // verifica se o numero sorteado exixte na lista, enquanto exixtir ele vai ficar sorteando um novo número
      while(resultado.includes(numeroSorteado)){
          numeroSorteado = Math.round(Math.random() * 60 + 1);
      }
      resultado.push(numeroSorteado);//insere o numero sorteado na lista
  }
}

function selecionarNumeros(numero){
  if(numerosApostados.length >= 0 && numerosApostados.length  < 15){
       // Adiciona o número escolhido a lista
       numerosApostados.push(numero);
     
       // Desabilita o numero escolhido
       desabilitarNumeroEscolhido(numero);

       // Habilita o botão de apostar
       if(numerosApostados.length > 5){
          btnApostar.disabled = false;
          // mostrar o valor da aposta na tela 
          valorDaAposta()
       }

       // mostra a quantidade de números escolhidos
       const qtdapostas = document.getElementById("qtdNumeros")
       qtdapostas.innerHTML = "<p>Qtd Números</p><p class='valor'>" + numerosApostados.length + "</p>";
     } 
}

function desabilitarNumeroEscolhido(numero){
  document.getElementById('num_' + numero).style.backgroundColor = "#008000";
  document.getElementById('num_' + numero).style.color = "#ffffff";
  document.getElementById('num_' + numero).disabled = true;
}

function apostar(){
     //fazer a aposta -- comparar os números sorteados com os apostados
     for(i = 0; i < numerosApostados.length; i++){
          for(j = 0; j < resultado.length; j++){
               if(numerosApostados[i] == resultado[j]){
                    qtdAcertos++
               }
          }
     }
     //  mostrar o resultado
     const divResultado = document.getElementById("resultado");
     for(i=0; i < resultado.length; i++){
          divResultado.innerHTML += "<div class='resultadoCirle'>"+ resultado[i] +"</div>"
     }

     let divAcertos = document.getElementById("acertos");
     divAcertos.innerHTML = "<p>Acertos<p class='valor'>"+qtdAcertos+"</p>"
     btnApostar.disabled = true;

     desabilitaTodosNumeros()
}

function valorDaAposta(){
  switch(numerosApostados.length)
       {
            case 6:
                 valorAposta = "R$ 4,50";
                 break;
            case 7:
                 valorAposta = "R$ 31,50";
                 break;
            case 8:
                 valorAposta = "R$ 126,00";
                 break;
            case 9:
                 valorAposta = "R$ 378,00";
                 break;
            case 10:
                 valorAposta = "R$ 945,00";
                 break;
            case 11:
                 valorAposta = "R$ 2.079,00";
                 break;
            case 12:
                 valorAposta = "R$ 4.158,00";
                 break;
            case 13:
                 valorAposta = "R$ 6.006,00";
                 break;
            case 14:
                 valorAposta = "R$ 10.510,50";
                 break;
            case 15:
                 valorAposta = "R$ 17.517,50";
                 break;
            default:
                 valorAposta = "R$ 0,00";
                 break;
       }
       const divValorAposta = document.getElementById("valor");
       divValorAposta.innerHTML = "<p>Valor da Aposta</p><p class='valor'>" + valorAposta + "</p>"

}

function desabilitaTodosNumeros(){
     for(i = 1; i <= 60; i++){
          document.getElementById("num_" + i).disabled = true;
     }
}

//funções ----------------------------------------------fim
