var rbAtributoSelecionado = 0
var pontosJogador = 0
var pontosMaquina = 0
var cartaMaquina = 0
var cartaJogador = 0
var cartas= [carta1 = {
  nome: "Soldado Invernal",
  imagem:'https://i.postimg.cc/VsCGHcZL/soldado-Invernal.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 8
  }
},            
carta2 = {
  nome: "Venom",
  imagem:'https://i.postimg.cc/jj1cZ8z7/venom.png',
  atributos:{
    ataque: 9,
    defesa: 8,
    forca: 8
  }
},
carta3 = {
  nome: "Ultron",
  imagem:'https://i.postimg.cc/xd8gGrbQ/ultron.png',
  atributos:{
    ataque: 8,
    defesa: 6,
    forca: 7
  }
},
carta4 = {
  nome: "Duende Verde",
  imagem:'https://i.postimg.cc/XNRhVvBC/duende-Verde.png',
  atributos:{
    ataque: 5,
    defesa: 7,
    forca: 5
  }
},
carta5 = {
  nome: "Fenix Negra",
  imagem:'https://i.postimg.cc/xTLZqSLF/fenix-Negra.png',
  atributos:{
    ataque: 8,
    defesa: 9,
    forca: 7
  }
},
carta6 = {
  nome: "Nebulosa",
  imagem:'https://i.postimg.cc/V637L7v8/nebulosa2.png',
  atributos:{
    ataque: 7,
    defesa: 8,
    forca: 7
  }
},
carta7 = {
  nome: "Motoqueiro Fantasma",
  imagem:'https://i.postimg.cc/LXqCSdHD/motoqueiro-Fantasma.png',
  atributos:{
    ataque: 8,
    defesa: 8,
    forca: 9
  }
},
carta8 = {
  nome: "Falcão",
  imagem:'https://i.postimg.cc/XqCzwRmq/falcao.png',
  atributos:{
    ataque: 7,
    defesa: 7,
    forca: 6
  }
},
carta9 = {
  nome: "Gavião Arqueiro",
    imagem:'https://i.postimg.cc/Y9jVSGx1/gaviao-Arqueiro.png',
  atributos:{
    ataque: 6,
    defesa: 7,
    forca: 7
  }
}, 
carta10 = {
  nome: "Star Lord",
  imagem:'https://i.postimg.cc/GhnMWS6P/starLord.png',
  atributos:{
    ataque: 6,
    defesa: 6,
    forca: 7
  }
},
carta11 = {
  nome: "Visão",
  imagem:'https://i.postimg.cc/XqS80p1N/visao.png',
  atributos:{
    ataque: 6,
    defesa: 8,
    forca: 5
  }
},
carta12 = {
  nome: "Mistério",
  imagem:'https://i.postimg.cc/bvVC4Yjd/misterio.png',
  atributos:{
    ataque: 7,
    defesa: 8,
    forca: 6
  }
},
carta13 = {
  nome: "Hulk",
  imagem:'https://i.postimg.cc/7LZtBGdp/hulk.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 10
  }
},
carta14 = {
  nome: "Capitã marvel",
  imagem:'https://i.postimg.cc/5tsT1q84/capita-Marvel.png',
  atributos:{
    ataque: 10,
    defesa: 7,
    forca: 8
  }
},
carta15 = {
  nome: "Doutor Estranho",
  imagem:'https://i.postimg.cc/Ss5PYSZH/dr-Estranho.png',
  atributos:{
    ataque: 7,
    defesa: 10,
    forca: 8
  }
},
carta16 = {
  nome: "Vespa",
    imagem:'https://i.postimg.cc/bJ2TMQTF/vespa.png',
  atributos:{
    ataque: 8,
    defesa: 8,
    forca: 6
  }
}, 
carta17 = {
  nome: "Pantera Negra",
  imagem:'https://i.postimg.cc/mkCmcQ1F/pantera-Negra.png',
  atributos:{
    ataque: 9,
    defesa: 8,
    forca: 7
  }
},
carta18 = {
  nome: "Homem de Ferro",
  imagem:'https://i.postimg.cc/kg9pbhcM/homemde-Ferro.png',
  atributos:{
    ataque: 9,
    defesa: 7,
    forca: 8
  }
},
carta19 = {
  nome: "Surfista Prateado",
  imagem:'https://i.postimg.cc/Kv79xDy6/sufista-Prateado.png',
  atributos:{
    ataque: 4,
    defesa: 7,
    forca: 8
  }
},
carta20 = {
  nome: "Deadpool",
  imagem:'https://i.postimg.cc/tgqwLmZv/deadpool.png',
  atributos:{
    ataque: 6,
    defesa: 4,
    forca: 8
  }
},
carta21 = {
  nome: "Homem Formiga",
  imagem:'https://i.postimg.cc/wjVbccfX/homem-Formiga.png',
  atributos:{
    ataque: 7,
    defesa: 7,
    forca: 6
  }
},
carta22 = {
  nome: "Thor",
  imagem:'https://i.postimg.cc/bw332YrL/thor2.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 9
  }
},
carta23 = {
  nome: "Wolverine",
  imagem:'https://i.postimg.cc/6p5hwscZ/wolverine.png',
  atributos:{
    ataque: 9,
    defesa: 8,
    forca: 9
  }
},
carta24 = {
  nome: "Thanos",
    imagem:'https://i.postimg.cc/gjVKcm1V/vilao-thanos.png',
  atributos:{
    ataque: 9,
    defesa: 9,
    forca: 9
  }
}, 
carta25 = {
  nome: "Viúva Negra",
  imagem:'https://i.postimg.cc/8kM4mms7/viuva-Negra.png',
  atributos:{
    ataque: 9,
    defesa: 8,
    forca: 7
  }
},
carta26 = {
  nome: "Gamora",
  imagem:'https://i.postimg.cc/jqwm0f2T/gamora.png',
  atributos:{
    ataque: 7,
    defesa: 7,
    forca: 6
  }
},
carta27 = {
  nome: "Homem Aranha",
  imagem:'https://i.postimg.cc/zvHjnW25/homem-aranha.jpg',
  atributos:{
    ataque: 8,
    defesa:8,
    forca: 6
  }
},
carta28 = {
  nome: "Capitão América",
  imagem:'https://i.postimg.cc/CM2rzMrS/cap-america.jpg',
  atributos:{
    ataque: 9,
    defesa: 7,
    forca: 9
  }
},
carta29 = {
  nome: "Adam Warlock",
  imagem:'https://i.postimg.cc/pTVFdrLJ/Adam-Warlock.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 7
  }
},
carta30 = {
  nome: "Anjo",
  imagem:'https://i.postimg.cc/HnV8QN5J/anjo.png',
  atributos:{
    ataque: 5,
    defesa: 4,
    forca: 6 
  }
},
carta31 = {
  nome: "Apache",
  imagem:'https://i.postimg.cc/vHx6Tpbk/apache.png',
  atributos:{
    ataque: 7,
    defesa: 4,
    forca: 8
  }
},
carta32 = {
  nome: "Bishop",
  imagem:'https://i.postimg.cc/qB53kkV2/bishop.png',
  atributos:{
    ataque: 5,
    defesa: 5,
    forca: 7
  }
},
carta33 = {
  nome: "Blade",
  imagem:'https://i.postimg.cc/4d8hHGKk/blade.png',
  atributos:{
    ataque: 5,
    defesa: 6,
    forca: 5
  }
},
carta34 = {
  nome: "Capitao Britânia",
  imagem:'https://i.postimg.cc/mkJzVSNm/capitao-britania.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 7
  }
},
carta35 = {
  nome: "Carnificina",
  imagem:'https://i.postimg.cc/DwqJdLWc/carnificina.png',
  atributos:{
    ataque: 8,
    defesa: 3,
    forca: 7
  }
},
carta36 = {
  nome: "Cavaleiro da Lua",
  imagem:'https://i.postimg.cc/pdR90rzM/cavaleiro-da-lua.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 8
  }
},
carta37 = {
  nome: "Caveira Vermelha",
  imagem:'https://i.postimg.cc/JhxsS85D/caveira-vermelha.png',
  atributos:{
    ataque: 6,
    defesa: 3,
    forca: 7
  }
},
carta38 = {
  nome: "Colossus",
  imagem:'https://i.postimg.cc/DZY8ycD7/colossus.png',
  atributos:{
    ataque: 7,
    defesa: 8,
    forca: 9
  }
},
carta39 = {
  nome: "Conan o Bárbaro",
  imagem:'https://i.postimg.cc/vTgD1VFf/conan-o-barbaro.png',
  atributos:{
    ataque: 7,
    defesa: 7,
    forca: 9
  }
},
carta40 = {
  nome: "Crystal",
  imagem:'https://i.postimg.cc/d10hYf5W/crystal.png',
  atributos:{
    ataque: 5,
    defesa: 3,
    forca: 4
  }
},
carta41 = {
  nome: "Demolidor",
  imagem:'https://i.postimg.cc/66gykYn0/demolidor.png',
  atributos:{
    ataque: 7,
    defesa: 8,
    forca: 7
  }
},
carta42 = {
  nome: "Dominó",
  imagem:'https://i.postimg.cc/SRBRcxk5/domin.png',
  atributos:{
    ataque: 5,
    defesa: 3,
    forca: 3
  }
},
carta43 = {
  nome: "Dr. Destino",
  imagem:'https://i.postimg.cc/pXjpRzBt/dr-destino.png',
  atributos:{
    ataque: 6,
    defesa: 5,
    forca: 6
  }
},
carta44 = {
  nome: "Dr. Octopus",
  imagem:'https://i.postimg.cc/6pLqGKSj/dr-octopus.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 7
  }
},
carta45 = {
  nome: "Drax",
  imagem:'https://i.postimg.cc/13Z4tXWV/drax-o-destruidor.png',
  atributos:{
    ataque: 8,
    defesa: 8,
    forca: 8
  }
},
carta46 = {
  nome: "Elektra",
  imagem:'https://i.postimg.cc/nLFz45fH/elektra.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 7
  }
},
carta47 = {
  nome: "Fanático",
  imagem:'https://i.postimg.cc/CKcKmNwb/fanatico.png',
  atributos:{
    ataque: 4,
    defesa: 4,
    forca: 6
  }
},
carta48 = {
  nome: "Feiticeira Branca",
  imagem:'https://i.postimg.cc/G29mNypV/Feiticeira-branca.png',
  atributos:{
    ataque: 5,
    defesa: 4,
    forca: 4
  }
},
carta49 = {
  nome: "Feiticeira Escarlate",
  imagem:'https://i.postimg.cc/NFHfGvmx/feiticeira-escarlate.png',
  atributos:{
    ataque: 7,
    defesa: 8,
    forca: 7
  }
},
carta50 = {
  nome: "Fera",
  imagem:'https://i.postimg.cc/JngzWzDn/fera.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 8
  }
},
carta51 = {
  nome: "Galactus",
  imagem:'https://i.postimg.cc/fkQWJqvQ/galactus.png',
  atributos:{
    ataque: 6,
    defesa: 7,
    forca: 8
  }
},
carta52 = {
  nome: "Gambit",
  imagem:'https://i.postimg.cc/05bnvkHq/gambit.png',
  atributos:{
    ataque: 8,
    defesa: 9,
    forca: 4
  }
},
carta53 = {
  nome: "Groot",
  imagem:'https://i.postimg.cc/2jMw8sPL/goot.png',
  atributos:{
    ataque: 6,
    defesa: 4,
    forca: 6
  }
},
carta54 = {
  nome: "Hela Odinnsdottir",
  imagem:'https://i.postimg.cc/HLY0hd7R/hela-odinnsdottir.png',
  atributos:{
    ataque: 5,
    defesa: 3,
    forca: 5
  }
},
carta55 = {
  nome: "Homem de Gelo",
  imagem:'https://i.postimg.cc/HsMtJSgZ/homem-de-gelo.png',
  atributos:{
    ataque: 7,
    defesa: 5,
    forca: 7
  }
},
carta56 = {
  nome: "Hyperion",
  imagem:'https://i.postimg.cc/QdrJcpNX/hyperion.png',
  atributos:{
    ataque: 6,
    defesa: 3,
    forca: 7
  }
},
carta57 = {
  nome: "Jaqueta Amarela",
  imagem:'https://i.postimg.cc/t4ttkY7F/jaqueta-amarela.png',
  atributos:{
    ataque: 5,
    defesa: 5,
    forca: 6
  }
},
carta58 = {
  nome: "Jessica Jones",
  imagem:'https://i.postimg.cc/FKTbt8yR/jessica-jones.png',
  atributos:{
    ataque: 6,
    defesa: 5,
    forca: 4
  }
},
carta59 = {
  nome: "Justiceiro",
  imagem:'https://i.postimg.cc/mDhYTjjS/justiceiro.png',
  atributos:{
    ataque: 8,
    defesa: 5,
    forca: 8
  }
},
carta60 = {
  nome: "Kang o Conquistador",
  imagem:'https://i.postimg.cc/RF8chtbx/kang-o-conquistador.png',
  atributos:{
    ataque: 3,
    defesa: 2,
    forca: 5
  }
},
carta61 = {
  nome: "Loki",
  imagem:'https://i.postimg.cc/SRMcMKw2/loki.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 7
  }
},
carta62 = {
  nome: "Luke Cage",
  imagem:'https://i.postimg.cc/mZzYqdtL/luke-cage.png',
  atributos:{
    ataque: 8,
    defesa: 7,
    forca: 8
  }
},
carta63 = {
  nome: "Magneto",
  imagem:'https://i.postimg.cc/7PF3yg2g/magneto.png',
  atributos:{
    ataque: 9,
    defesa: 7,
    forca: 8
  }
},
carta64 = {
  nome: "Mancha solar",
  imagem:'https://i.postimg.cc/2SwhvMXw/mancha-solar.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 6
  }
},
carta65 = {
  nome: "Mantis",
  imagem:'https://i.postimg.cc/Vk1XJm4v/mantis.png',
  atributos:{
    ataque: 5,
    defesa: 6,
    forca: 4
  }
},
carta66 = {
  nome: "Máquina de Combate",
  imagem:'https://i.postimg.cc/R0ZfTdkz/maquina-de-combate.png',
  atributos:{
    ataque: 7,
    defesa: 7,
    forca: 7
  }
},
carta67 = {
  nome: "Maria Hill",
  imagem:'https://i.postimg.cc/027p5bYh/maria-hill.png',
  atributos:{
    ataque: 4,
    defesa: 4,
    forca: 3
  }
},
carta68 = {
  nome: "Mercenário",
  imagem:'https://i.postimg.cc/wB4N4JzR/mercen-rio.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 8
  }
},
carta69 = {
  nome: "Mercúrio",
  imagem:'https://i.postimg.cc/50HCh097/mercurio.png',
  atributos:{
    ataque: 6,
    defesa: 8,
    forca: 6
  }
},
carta70 = {
  nome: "Mística",
  imagem:'https://i.postimg.cc/QtRTh3HX/mistica.png',
  atributos:{
    ataque: 7,
    defesa: 9,
    forca: 4
  }
},
carta71 = {
  nome: "Mulher Aranha",
  imagem:'https://i.postimg.cc/PJY8qRw1/mulher-aranha.png',
  atributos:{
    ataque: 7,
    defesa: 8,
    forca: 6
  }
},
carta72 = {
  nome: "Noturno",
  imagem:'https://i.postimg.cc/Y2WF8hsj/noturno.png',
  atributos:{
    ataque: 8,
    defesa: 5,
    forca: 6
  }
},
carta73 = {
  nome: "Nova",
  imagem:'https://i.postimg.cc/dtRyPgvY/nova.png',
  atributos:{
    ataque: 6,
    defesa: 6,
    forca: 8
  }
},
carta74 = {
  nome: "Princesa do Poder",
  imagem:'https://i.postimg.cc/gkbZ7mCs/princesa-do-poder.png',
  atributos:{
    ataque: 3,
    defesa: 2,
    forca: 6
  }
},
carta75 = {
  nome: "Psylocker",
  imagem:'https://i.postimg.cc/rw8t8gFt/psylocke.png',
  atributos:{
    ataque: 4,
    defesa: 7,
    forca: 6
  }
},
carta76 = {
  nome: "Punho de Ferro",
  imagem:'https://i.postimg.cc/Qd0KV5HY/punho-de-ferro.png',
  atributos:{
    ataque: 8,
    defesa: 4,
    forca: 7
  }
},
carta77 = {
  nome: "Quasar",
  imagem:'https://i.postimg.cc/1zXnFtFm/quasar.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 7
  }
},
carta78 = {
  nome: "Raio Negro",
  imagem:'https://i.postimg.cc/vmK1ts7W/raio_negro.png',
  atributos:{
    ataque: 6,
    defesa: 6,
    forca: 8
  }
},
carta79 = {
  nome: "Rocket Raccoon",
  imagem:'https://i.postimg.cc/hPnXrMm3/rocket_raccoon.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 3
  }
},
carta80 = {
  nome: "Ronan",
  imagem:'https://i.postimg.cc/NGmymZKH/ronan.png',
  atributos:{
    ataque: 8,
    defesa: 4,
    forca: 7
  }
},
carta81 = {
  nome: "Shang Chi",
  imagem:'https://i.postimg.cc/W3Jd9HSx/shang_chi.png',
  atributos:{
    ataque: 6,
    defesa: 4,
    forca: 5
  }
},
carta82 = {
  nome: "Shuri",
  imagem:'https://i.postimg.cc/zvZV4Fcv/shuri.png',
  atributos:{
    ataque: 5,
    defesa: 5,
    forca: 6
  }
},
carta83 = {
  nome: "Surtur",
  imagem:'https://i.postimg.cc/Y06h7L53/surtur.png',
  atributos:{
    ataque: 8,
    defesa: 6,
    forca: 9
  }
},
carta84 = {
  nome: "Tabitha",
  imagem:'https://i.postimg.cc/rF9KYWCy/tabitha.png',
  atributos:{
    ataque: 3,
    defesa: 1,
    forca: 4
  }
},
carta85 = {
  nome: "Tempestade",
  imagem:'https://i.postimg.cc/wjT7Kv0X/tempestade.png',
  atributos:{
    ataque: 7,
    defesa: 5,
    forca: 7
  }
},
carta86 = {
  nome: "Valquiria",
  imagem:'https://i.postimg.cc/htyhKB5H/valquiria.png',
  atributos:{
    ataque: 6,
    defesa: 6,
    forca: 7
  }
},
carta86 = {
  nome: "Cable",
  imagem:'https://i.postimg.cc/9Q3w7JfM/cable.png',
  atributos:{
    ataque: 5,
    defesa: 6,
    forca: 9
  }
},
carta87 = {
  nome: "Vampira",
  imagem:'https://i.postimg.cc/vm4TBKRD/vampira.png',
  atributos:{
    ataque: 7,
    defesa: 6,
    forca: 5
  }
}
];

document.getElementById("pJogador").innerText = pontosJogador
document.getElementById("pMaquina").innerText = pontosMaquina

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  do{
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)  
  }while(numeroCartaMaquina == numeroCartaJogador)
    
  cartaJogador = cartas[numeroCartaJogador]
  
  /*document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  
  exibirOpcoes()*/
  exibirCartaJogador()
}

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo")
  for(var i= 0; i< radioAtributos.length; i++){
    if(radioAtributos[i].checked){
      return radioAtributos[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  var divPontosJogador = document.getElementById("pJogador")
  var divPontosMaquina = document.getElementById("pMaquina")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if(valorCartaJogador > valorCartaMaquina){
    pontosJogador++
    divPontosJogador.innerHTML = pontosJogador
  }
  else if(valorCartaJogador < valorCartaMaquina){
    pontosMaquina++
    divPontosMaquina.innerHTML = pontosMaquina
  }
  exibirCartaMaquina()
}

function exibirCartaJogador(){
  var classCartaJogador = document.getElementById("cartasContainer")
  
  
  var tagHTML = "<div class='carta-jogador' id='carta-jogador'>"
  
  /*var tagHTML = `<h2>${cartaJogador.nome}</h2>` */
  tagHTML += "<h2>" + cartaJogador.nome + "</h2>"
  tagHTML += "<div class='atributo-ataque'>"
  tagHTML += "<div class='att-esquerda'><input type='radio' id='rd-ataqueJogador' name='atributo' onclick='atributoSelecionado(1)' value='ataque'> Ataque</div>"
  tagHTML += "<div class='att-direita'>"+ cartaJogador.atributos.ataque + "</div>"
  tagHTML += "</div>"  
  tagHTML += "<div class='atributo-defesa'>"
  tagHTML += "<div class='att-esquerda'><input type='radio' id='rd-defesaJogador' name='atributo' onclick='atributoSelecionado(2)' value='defesa'> Defesa</div>" 
  tagHTML += "<div class='att-direita'>"+ cartaJogador.atributos.defesa + "</div>"
  tagHTML += "</div>"  
  tagHTML += "<div class='atributo-forca'>"
  tagHTML += "<div class='att-esquerda'><input type='radio' id='rd-forcaJogador' name='atributo' onclick='atributoSelecionado(3)' value='forca'> Força</div>"  
  tagHTML += "<div class='att-direita'>"+ cartaJogador.atributos.forca + "</div>"
  tagHTML += "</div>"  
  tagHTML += "</div>" 
   
  classCartaJogador.innerHTML = tagHTML
  
  var ImagemJogador = document.getElementById("carta-jogador")
  ImagemJogador.style.backgroundImage = `url(${cartaJogador.imagem})` 
  /*classCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"*/ 
  document.getElementById("btnSortear").setAttribute("type", "hidden");
}

function exibirCartaMaquina(){
  
  var tagHTML =  "<div class='carta-maquina' id='carta-maquina'>"
  tagHTML += "<h2>" + cartaMaquina.nome + "</h2>"
  tagHTML += "<div class='atributo-ataque'>"
  tagHTML += "<div class='att-esquerda'> Ataque</div>"
  tagHTML += "<div class='att-direita'>"+ cartaMaquina.atributos.ataque + "</div>"
  tagHTML += "</div>"  
  tagHTML += "<div class='atributo-defesa'>"
  tagHTML += "<div class='att-esquerda'> Defesa</div>" 
  tagHTML += "<div class='att-direita'>"+ cartaMaquina.atributos.defesa + "</div>"
  tagHTML += "</div>"  
  tagHTML += "<div class='atributo-forca'>"
  tagHTML += "<div class='att-esquerda'> Força</div>"  
  tagHTML += "<div class='att-direita'>"+ cartaMaquina.atributos.forca + "</div>"
  tagHTML += "</div>"  
  tagHTML += "</div>" 
  
  var classCartaMaquina = document.getElementById("cartasContainer")
   
  classCartaMaquina.innerHTML = classCartaMaquina.innerHTML + tagHTML
  
  var ImagemJogador = document.getElementById("carta-maquina")
  ImagemJogador.style.backgroundImage = `url(${cartaMaquina.imagem})` 
  

  if(rbAtributoSelecionado == 1){
        document.getElementById("rd-ataqueJogador").checked = true;
    }
  else if(rbAtributoSelecionado == 2){
        document.getElementById("rd-defesaJogador").checked = true;
  }
  else{
        document.getElementById("rd-forcaJogador").checked = true;
  }
  
  document.getElementById("btnJogar").setAttribute("type", "hidden");
  document.getElementById("btnNovaPartida").setAttribute("type", "submit");
}

function atributoSelecionado(atributo){
   rbAtributoSelecionado = atributo
   document.getElementById("btnJogar").setAttribute("type", "submit");
}

function novaPartida(){
  document.getElementById("btnNovaPartida").setAttribute("type", "hidden");
  document.getElementById("btnSortear").setAttribute("type", "submit");
  document.getElementById("cartasContainer").innerHTML = ""
  sortearCarta()
}