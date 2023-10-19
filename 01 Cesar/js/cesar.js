//Funciones
function cifrar() {
    const mensaje = document.getElementById("msj").value;
    const clave = parseInt(document.getElementById("clave").value);
    const mensajeCifrado = cifradoCesar(mensaje, clave);
    document.getElementById("cifrado").textContent = mensajeCifrado;
    
    // Vaciar el área de texto después de cifrar
    document.getElementById("msj").value = "";
}

function descifrar() {
    const mensajeCifrado = document.getElementById("cifrado").textContent;
    const clave = parseInt(document.getElementById("clave").value);
    const mensajeDescifrado = descifradoCesar(mensajeCifrado, clave);
    document.getElementById("cifrado").textContent = mensajeDescifrado;
}

function cifradoCesar(mensaje, clave) {
    let mensajeCifrado = "";
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    const longitudAlfabeto = alfabeto.length;

    if(clave >= 1 && clave <= 27)
    {
        if(mensaje.length=0){
            alert("Ingrese un mensaje a decifrar");
        } else {
            if(mensaje.length >= 1 && mensaje.length <=300){
                for (let i = 0; i < mensaje.length; i++) {
                    const caracter = mensaje.charAt(i);
                    const indice = alfabeto.indexOf(caracter);
            
                    if (indice !== -1) {
                        const nuevoIndice = (indice + clave) % longitudAlfabeto;
                        mensajeCifrado += alfabeto.charAt(nuevoIndice);
                    } else {
                        mensajeCifrado += caracter;
                    }
                }
                return mensajeCifrado;
            }
        }
    } else {
        alert("Ingrese una clave válida");
    }
}

function descifradoCesar(mensajeCifrado, clave) {
    let mensajeDescifrado = "";
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    const longitudAlfabeto = alfabeto.length;

    if(mensajeCifrado == ""){
        alert("No hay un mensaje a descifrar");
    } else {
        for (let i = 0; i < mensajeCifrado.length; i++) {
            const caracter = mensajeCifrado.charAt(i);
            const indice = alfabeto.indexOf(caracter);
    
            if (indice !== -1) {
                const nuevoIndice = (indice - clave + longitudAlfabeto) % longitudAlfabeto;
                mensajeDescifrado += alfabeto.charAt(nuevoIndice);
            } else {
                mensajeDescifrado += caracter;
            }
            
        }
        return mensajeDescifrado;
    }
}



function validarC(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9]/;
    var tecla_final = String.fromCharCode(teclado);
    return patron.test(tecla_final);
}

function validarMSJ(e) {
    var teclado3 = (document.all) ? e.keyCode : e.which;
    if(teclado3== 8) return true;
    var patron3 = /[A-Za-z-ñ Ñ]/;
    var tecla_final3 = String.fromCharCode(teclado3);
    return patron3.test(tecla_final3);
}