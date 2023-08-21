let nos,eles,pontosNos,pontosEles,aumentarPontos1,aumentarPontos2,tirarPontos1,tirarPontos2;

nos = document.getElementById("nos");
eles = document.getElementById("eles");
placarNos = document.getElementById("pontosNos");
placarEles = document.getElementById("pontosEles");
btnAumentarP1 = document.getElementById("ganhou1");
btnAumentarP2 = document.getElementById("ganhou2");

let pontos1 = 0;
let pontos2 = 0;

let box1 = 0;
let box2 = 0;

function reiniciarMao(){
  for(let i = 1;i < 4; i++){
    document.getElementById(`pt${i}`).style.backgroundColor = "#f2f2f2";
  }
  box1 = 0;
  box2 = 0;
}

function anunciarVencedor(){
  if(pontos1 == 12){
    alert(`Nós ganhamos deles`);
    pontos1 = 0;
    pontos2 = 0;
  } 
  if(pontos2 == 12){
    alert(`Eles ganharam de nós`);
    pontos1 = 0;
    pontos2 = 0;
  }
}

btnAumentarP1.addEventListener("click", function() {
  box1 ++;
  document.getElementById(`pt${box1+box2}`).style.backgroundColor = "green";
  if(box1 == 2){
    pontos1 ++;
    placarNos.textContent = pontos1;
    reiniciarMao();
  }
  switch(resposta1){
    case "s":
      if(box1 == 2){
        pontos += 3;
      }
      if(box2 == 2){
        ponto2 += 3;
      }
      break;
    case 6:
      if(box1 == 2){
        pontos += 6;
      }
      if(box2 == 2){
        ponto2 += 6;
      }
      break
    default:
      reiniciarMao();
      ponto1 ++;
  }
  anunciarVencedor();
});

btnAumentarP2.addEventListener("click", function() {
  box2 ++;
  document.getElementById(`pt${box1+box2}`).style.backgroundColor = "red";
  if(box2 == 2){
    pontos2 ++;
    placarEles.textContent = pontos2;
    reiniciarMao();
  }
  switch(resposta2){
    case "s":
      if(box2 == 2){
        ponto2 += 3;
      }
      if(box1== 2){
        pobox1 += 3;
      }
      break;
    case 6:
      if(box2 == 2){
        ponto2 += 6;
      }
      if(box1 == 2){
       ponto1 += 6;
      }
      break
    default:
      reiniciarMao();
      ponto2 ++;
  }
  anunciarVencedor();
});

let voltar = document.getElementById("voltar");
voltar.addEventListener("click", function() {
  reiniciarMao();
});

let trucar1 = document.getElementById("trucar1");
let trucar2 = document.getElementById("trucar2");

let resposta1,resposta2;;

trucar1.addEventListener("click", function() {
  resposta1 = prompt("Eles respondem: n,s,6");
});


trucar2.addEventListener("click", function() {
  resposta2 = prompt("Nós respondem: n,s,6");
});