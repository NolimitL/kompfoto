let sText = "Диагностика<br> ";

function circle(param) {
   let text = sText;
   let parag = "";
   document.getElementById("list").classList.add("foggy");
   document.querySelectorAll("#list .btn").forEach(elem => {
      elem.disabled = true;
   })
   document.getElementById("back").style.display = "block";
   switch (param) {
      case 1:
         text += "500 р";
         break;
      case 2:
         text += "500 р";
         break;
      case 3:
         text += "500 р";
         break;
      case 4:
         text += "500 р";
         break;
      case 5:
         text += "500 р";
         break;
      case 6:
         text = "Определение объёма работ<br>500 р";
         break;
      case 7:
         text = "Определение объёма работ<br>500 р";
         break;
      case 8:
         text = "Определение объёма работ<br>500 р";
         break;
      case 9:
         text = "Определение объёма работ<br>500 р";
         break;
      case 10:
         text += "500 р";
         break;
      case 11:
         text = "Заправка картриджей<br>от 500 р";
         break;
      default:
         text += "500 p";
         break;
   }
   let innerParag = `<ul class="inH">Модели${parag}</ul>`;
   if (parag){
      document.getElementById("paragraph-c").innerHTML = innerParag;
   }else{
      document.getElementById("paragraph-c").innerHTML = null;
   }
   document.getElementById("text-c").innerHTML = text;
   text = sText;
}
function cross(){
   document.getElementById("list").classList.remove("foggy");
   document.getElementById("back").style.display = "none";
   document.querySelectorAll("#list .btn").forEach(elem => {
      elem.disabled = false;
   })
}
