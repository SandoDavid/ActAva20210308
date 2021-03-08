function mostraAlertaJPC(){
  alert("Alerta!");
}

function passaSeguentDSS(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }

  amagaElementDSS(idObjPregAct);
  mostraElementDSS(idObjPregSeg);
}

function passaAnteriorDSS(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i-1].id;
      break;
    };
  }
  amagaElementDSS(idObjPregAct);
  mostraElementDSS(idObjPregSeg);
}
function mostraElementDSS(idRebut){
  document.getElementById(idRebut).classList.add("elementVisibleDSS");
  document.getElementById(idRebut).classList.remove("elementOcultDSS");
}

function amagaElementDSS(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisibleDSS");
  document.getElementById(idRebut).classList.add("elementOcultDSS");
}