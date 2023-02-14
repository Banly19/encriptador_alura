const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const copiar = document.querySelector('#copiar');

encriptar.addEventListener('click', obtenerMensaje);
desencriptar.addEventListener('click', obtenerMensaje);
copiar.addEventListener('click',copiarTexto);

// obtiene el texto a encriptar
function obtenerMensaje(e){
    let accion = e.target.id;
    let texto = document.querySelector('#textarea');

    if(accion === 'encriptar'){
        encriptarMensaje(texto.value);
        borrarMensaje();
        removerClase();
    }else if(accion === 'desencriptar'){
        // console.log(typeof texto.value)
        if(texto.value === ''){
            alertMensaje();
        }else{
            desencriptarMensaje(texto.value);
            borrarMensaje();
        }
    }
    
}

// encripta el mensaje
function encriptarMensaje(mensaje){
    let caracteres = mensaje.split('');
    let iteraciones = caracteres.length;
    let mensajeCodificado = '';

    for(let i = 0; i < iteraciones; i++){
        let caracter = caracteres[i]
        if(caracter === 'e'){
            mensajeCodificado = mensajeCodificado + caracter.replace('e','enter');
        }else if(caracter === 'i'){
            mensajeCodificado = mensajeCodificado + caracter.replace('i','imes');
        }else if(caracter === 'a'){
            mensajeCodificado = mensajeCodificado + caracter.replace('a','ai');
        }else if(caracter === 'o'){
            mensajeCodificado = mensajeCodificado + caracter.replace('o','ober');
        }else if(caracter === 'u'){
            mensajeCodificado = mensajeCodificado + caracter.replace('u','ufat');
        }else{
            mensajeCodificado = mensajeCodificado + caracter;
        }
    }
    // console.log(mensajeCodificado)
    mostrarResultado(mensajeCodificado);
}

// remueve la clase ocultar y muestra el boton copiar
function removerClase(){
    let boton = document.querySelector('.section-btn').classList
    if(boton.contains('ocultar')){
        boton.remove('ocultar')
    }
    
}

// desencripta el mensaje
function desencriptarMensaje(mensaje){
    let regexE = /enter/g;
    let regexI = /imes/g;
    let regexA = /ai/g;
    let regexO = /ober/g;
    let regexU = /ufat/g;
    let mensajeReal;
    if(regexE.test(mensaje) ||
        regexI.test(mensaje) ||
        regexA.test(mensaje) ||
        regexO.test(mensaje) ||
        regexU.test(mensaje)){
            
            mensajeReal = mensaje.replace(regexE,'e').replace(regexI,'i').replace(regexA,'a').replace(regexO,'o').replace(regexU,'u');
            
    }

    mostrarResultado(mensajeReal)
}

// copia texto del parrafo
function copiarTexto(){
    let texto = document.querySelector('#resultado').innerText;
    navigator.clipboard
        .writeText(texto);
}

// imprime el resultado en pantalla
function mostrarResultado(resultado){
    let fragment = document.createDocumentFragment();
    let texto = document.querySelector('#resultado');
    let parrafo = document.createElement('p');
    // borra resultados anteriores
    if(texto.childNodes.length >= 1){
        let child = texto.lastElementChild;
        texto.removeChild(child);
    }

    parrafo.innerText = resultado;
    fragment.appendChild(parrafo);
    texto.appendChild(fragment);
}

// borrar textarea
function borrarMensaje(){
    let texto = document.querySelector('#textarea');
    texto.value = '';
}

// mensaje alerta
function alertMensaje(){
    let alerta = document.querySelector('h2');
    alerta.style.fontSize = '25px';
    alerta.style.backgroundColor = '#f8d7da'
    alerta.style.padding = '5px';
    setTimeout(()=>{
        alerta.style.fontSize = '16px';
        alerta.style.backgroundColor = '#fff'
        alerta.style.padding = '0';
    },3000);
}
