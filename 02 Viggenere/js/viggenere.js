var viggenere = viggenere || (function(){

    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

            var l = abc.length;

            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                if(i != -1){
                    var pos = i;
                    if(action){
                        //cifrar
                        pos += desp;
                        pos = (pos >= l) ? pos - l : pos;
                    }
                    else{
                        //descifrar
                        pos -= desp;
                        pos = (pos < 0) ? pos + l : pos;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    //17deoctubre
    return{
        encode:function(txt, desp){
            return doStaff(txt, desp, true);
        }, 
        decode: function(txt, desp){
            return doStaff(txt, desp, false);
        }

    };
})();

function longitudCifrar(){
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;

    if(clave.length > texto.length){
        alert("La clave no puede ser más grande que el texto a cifrar");
    } else {
        codificar(texto, clave);
    }
}

function longitudDescifrar(){
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;

    if(clave.length > texto.length){
        alert("La clave no puede ser más grande que el texto a cifrar");
    } else {
        Decodificar(texto, clave);
    }
}

function codificar(texto, clave){
    var resultado = "";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for(var i = 0; i<charATexto.length; i++){
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charATexto [i];

        resultado += viggenere.encode(charTexto, (des >= 26) ? des%26 : des);
        indiceClave ++; 

        if(indiceClave >= clave.length){
            indiceClave = 0;
        }
    }
    document.getElementById("res").value = resultado;
}

function Decodificar(texto, clave){
    var resultado = "";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for(var i = 0; i<charATexto.length; i++){
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charATexto [i];

        resultado += viggenere.decode(charTexto, (des >= 26) ? des%26 : des);
        indiceClave ++; 

        if(indiceClave >= clave.length){
            indiceClave = 0;
        }
    }
    document.getElementById("res").value = resultado;
}

function obIndiceClave(reco){
    //reco es el abecedario
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return abc.indexOf(reco.toLowerCase());
}

function camposVacios(){
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;

    if(texto == ""){
        alert("Ingrese un texto para cifrar");
    }

    if(clave == ""){
        alert("Ingrese una clave para poder cifrar");
    }
}

function colocar(){
    //copiar el texto
    var copiar = document.getElementById("res").value;
    document.getElementById("txt").value = copiar;
}

function reiniciar(){
    document.getElementById("txt").value = "";
    document.getElementById("txtClave").value = "";
    document.getElementById("res").value = "";
}

//Validación
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
    var patron3 = /[A-Z a-z]/;
    var tecla_final3 = String.fromCharCode(teclado3);
    return patron3.test(tecla_final3);
}