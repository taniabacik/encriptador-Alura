//Encriptador

var entrada = document.querySelector(".entrada");
var salida = document.querySelector(".salida");
var elementos = document.querySelector(".elementosA");

var botonEncriptar = document.querySelector(".encriptar");

var botonCopiar = document.querySelector(".copiar");

botonEncriptar.addEventListener("click",function(event){
	event.preventDefault();
	const textoEncriptado = encriptar(entrada.value);
	salida.value = textoEncriptado;
	elementos.style.opacity = 0;
	elementos.parentNode.removeChild(elementos);

});
function encriptar(cadenaTexto){
    let arr = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    cadenaTexto = cadenaTexto.toLowerCase()
      for(let i = 0; i < arr.length; i++){
        if(cadenaTexto.includes(arr[i][0])){
            cadenaTexto = cadenaTexto.replaceAll(arr[i][0],arr[i][1])
        }
      }
    return cadenaTexto
  }

botonCopiar.addEventListener("click",function(event){
	event.preventDefault();
	salida.select();
    document.execCommand('copy');
});


//Desencriptador

var entrada = document.querySelector(".entrada");
var salida = document.querySelector(".salida");
var elementos = document.querySelector(".elementosA");

var botonDesencriptar = document.querySelector(".desencriptar");


botonDesencriptar.addEventListener("click",function(event){
	event.preventDefault();
	const textoDesencriptado = desencriptar(entrada.value);
	salida.value = textoDesencriptado;
	elementos.style.opacity = 0;
	elementos.parentNode.removeChild(elementos);
});

function desencriptar(cadenaTextoCifrado){
    let arr = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    cadenaTextoCifrado = cadenaTextoCifrado.toLowerCase()
      for(let i = 0; i < arr.length; i++){
        if(cadenaTextoCifrado.includes(arr[i][0])){
            cadenaTextoCifrado = cadenaTextoCifrado.replaceAll(arr[i][1],arr[i][0])
        }
      }
    return cadenaTextoCifrado
  }
