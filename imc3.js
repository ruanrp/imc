function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
  
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      alert("Altura e peso devem ser números positivos!");
      return;
    }
  
    var imc = peso / (altura * altura);
    var resultado = "";
  
    if (imc < 18.5) {
      resultado = "Abaixo do peso";
    } else if (imc < 25) {
      resultado = "Peso normal";
    } else if (imc < 30) {
      resultado = "Sobrepeso";
    } else {
      resultado = "Obesidade";
    }
  
    resultado += " (IMC " + imc.toFixed(2) + ")";
    document.getElementById("resultado-imc").innerHTML = resultado;
  }
