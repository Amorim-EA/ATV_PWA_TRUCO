let nos,eles,pontosNos,pontosEles,aumentarPontos1,aumentarPontos2,tirarPontos1,tirarPontos2;

nos = document.getElementById("nos");
eles = document.getElementById("eles");
placarNos = document.getElementById("pontosNos");
placarEles = document.getElementById("pontosEles");
vitorias1 = document.getElementById("vitorias1");
vitórias2 = document.getElementById("vitorias2");

let pontos1 = 0;
let pontos2 = 0;

let equipe1_vitorias = 0;
let equipe2_vitorias = 0;

function resetar(){
  pontos1 = 0;
  pontos2 = 0;
}

function verficarPontos(){
  if(pontos1 >= 12){
    resetar()
    placarNos.textContent = pontos1;
    placarEles.textContent = pontos2;
    equipe1_vitorias ++;
    vitorias1.textContent = equipe1_vitorias;
  } 
  if(pontos2 >= 12){
    resetar()
    placarNos.textContent = pontos1;
    placarEles.textContent = pontos2;
    equipe2_vitorias ++;
    vitórias2.textContent = equipe2_vitorias;
  }
  
}

let aumentar1_nos = document.getElementById("aumentar11");
let aumentar3_nos = document.getElementById("aumentar31");
let aumentar6_nos = document.getElementById("aumentar61");
let aumentar9_nos = document.getElementById("aumentar91");
let aumentar12_nos = document.getElementById("aumentar121");

let aumentar1_eles = document.getElementById("aumentar12");
let aumentar3_eles = document.getElementById("aumentar32");
let aumentar6_eles = document.getElementById("aumentar62");
let aumentar9_eles = document.getElementById("aumentar92");
let aumentar12_eles = document.getElementById("aumentar122");


aumentar1_nos.addEventListener('click', () => {
  pontos1 ++;
  placarNos.textContent = pontos1;
  verficarPontos()
});

aumentar3_nos.addEventListener('click', () => {
  pontos1 += 3;
  placarNos.textContent = pontos1;
  verficarPontos()
});

aumentar6_nos.addEventListener('click', () => {
  pontos1 += 6;
  placarNos.textContent = pontos1;
  verficarPontos()
});

aumentar9_nos.addEventListener('click', () => {
  pontos1 += 9;
  placarNos.textContent = pontos1;
  verficarPontos();
});

aumentar12_nos.addEventListener('click', () => {
  pontos1 += 12;
  verficarPontos()
});

// ELes

aumentar1_eles.addEventListener('click', () => {
  pontos2 ++;
  placarEles.textContent = pontos2;
  verficarPontos()
});

aumentar3_eles.addEventListener('click', () => {
  pontos2 += 3;
  placarEles.textContent = pontos2;
  verficarPontos()
});

aumentar6_eles.addEventListener('click', () => {
  pontos2 += 6;
  placarEles.textContent = pontos2;
  verficarPontos()
});

aumentar9_eles.addEventListener('click', () => {
  pontos2 += 9;
  placarEles.textContent = pontos2;
  verficarPontos()
});

aumentar12_eles.addEventListener('click', () => {
  pontos2 += 12;
  placarEles.textContent = pontos2;
  verficarPontos()
});
