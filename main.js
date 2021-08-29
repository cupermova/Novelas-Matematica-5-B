var boton = document.getElementById("clickme")
var numero = document.getElementById("numero")
var link;

boton.onclick = function(){
    var num = Math.floor(Math.random() * 2)
    numero.innerText = num
    if (num == 0) {
    link = "https://drive.google.com/file/d/1_hI0YZXW2jRKxhaSIa-yH_5Hn4KO9dPa/view?usp=sharing"
    }
    if (num == 1) {
    link = "https://docs.google.com/presentation/d/1GE0C6WFiXdNmPSQVINxcVuvooYq-PWy4HikRBCyktgw/edit?usp=sharing"
    }

    numero.innerText = link
};
