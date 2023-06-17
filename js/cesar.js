window.addEventListener("load", inicio);

function inicio() {
  const cifrarButton = document.querySelector("#cifrar");
  const descifrarButton = document.querySelector("#descifrar");

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  if (isTouchDevice) {
    cifrarButton.addEventListener("touchend", handleCifrar);
    descifrarButton.addEventListener("touchend", handleDescifrar);
  } else {
    cifrarButton.addEventListener("click", handleCifrar);
    descifrarButton.addEventListener("click", handleDescifrar);
  }
}

function handleCifrar() {
  const texto = document.getElementById("texto").value;
  const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  document.getElementById("resultado").innerHTML = cifrar(texto, desplazamiento);
}

function handleDescifrar() {
  const texto = document.getElementById("texto").value;
  const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  document.getElementById("resultado").innerHTML = descifrar(texto, desplazamiento);
}

function cifrar(text, desplazamiento) {
    if (!text) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    desplazamiento = ((desplazamiento % 26) + 26) % 26;
  
    let resultado = "";
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      const posicion = letras.indexOf(c);
      const nuevaPosicion = (posicion !== -1) ? (posicion + desplazamiento) % 26 : -1;
      const nuevaLetra = (nuevaPosicion !== -1) ? letras[nuevaPosicion] : c;
      resultado += (c >= 'a') ? nuevaLetra.toLowerCase() : nuevaLetra;
    }
  
    return resultado;
  }
  
  function descifrar(text, desplazamiento) {
    if (!text) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    desplazamiento = ((desplazamiento % 26) + 26) % 26;
  
    let resultado = "";
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      const posicion = letras.indexOf(c);
      const nuevaPosicion = (posicion !== -1) ? (posicion - desplazamiento) % 26 : -1;
      const nuevaLetra = (nuevaPosicion !== -1) ? letras[nuevaPosicion] : c;
      resultado += (c >= 'a') ? nuevaLetra.toLowerCase() : nuevaLetra;
    }
  
    return resultado;
  }