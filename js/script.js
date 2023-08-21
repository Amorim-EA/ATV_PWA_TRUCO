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

btnAumentarP1.addEventListener("click", function() {
  box1 ++;
  document.getElementById(`pt${box1+box2}`).style.backgroundColor = "green";
  if(box1 == 2){
    pontos1 ++;
    placarNos.textContent = pontos1;
    reiniciarMao();
  }
});

btnAumentarP2.addEventListener("click", function() {
  box2 ++;
  document.getElementById(`pt${box1+box2}`).style.backgroundColor = "red";
  if(box2 == 2){
    pontos2 ++;
    placarEles.textContent = pontos2;
    reiniciarMao();
  }
});