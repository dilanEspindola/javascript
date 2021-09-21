//querySelector: puede retornar uno o ningun elemento que estas seleccionando
let heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo heading';
//console.log(heading);

//querySelectorAll: retorna de 0 a muchos elementos

setTimeout(() => {
    function getLink() {
        return new Promise((resolve) => {
            console.log('Getting new text...');
            let link = document.querySelectorAll('.navegacion a');            
            link.forEach( getLinks => getLinks.textContent = 'Getting new text...');            

            setTimeout(() => {                           
                for(let i = 0; i < link.length; i++) {
                    if(i == 0) {
                        link[i].textContent = 'NOSOTROS';                        
                    }
                    if(i == 1) {
                        link[i].textContent = 'CURSOS';                        
                    }
                    if(i == 2) {
                        link[i].textContent = 'CONTACTO';
                    }
                    if(i == 3) {
                        link[i].textContent = 'NOSOTROS';
                    }
                    if(i == 4) {
                        link[i].textContent = 'CURSOS';
                    }
                    if(i == 5) {
                        link[i].textContent = 'CONTACTO';
                    }                    
                }            
                resolve(link);
            }, 4000);
        });
    };
    
    const getResult = async () => {
        try {
            const result = await getLink();
            console.log(`Resultado ${result}`);
            console.log(result);    
        } catch (error) {
            console.log(error);                
        }
    };
    //getResult();
}, 2000)


//CREAR ELEMENTOS CON createElement()

let newLink = document.createElement('A');
newLink.href = 'https://www.youtube.com/';
newLink.textContent = 'Nuevo enlace';
newLink.classList.add('navegacion__enlace');
let navegacion = document.querySelector('.navegacion');
navegacion.appendChild(newLink);
console.log(navegacion);

let newText = document.createElement('P');
newText.textContent = 'Esto es nuevo texto agregado con JavaScript';
newText.classList.add('no-margin');
let addText = document.querySelector('.header__texto');
addText.appendChild(newText);
console.log(addText);

let ObtenerTexto = document.querySelectorAll('.header__texto p');
ObtenerTexto.forEach(txt => console.log('Etiquetas: ', txt));


//EVENTOS

window.addEventListener('load', function() { // se ejecuta cuando el html, js, css y otros archivos estan listos
    //console.log(2);
})
window.onload = function() {
    //console.log(3);
}

/*document.addEventListener('DOMContentLoaded', function() { // se ejecuta cuando solo el HTML esta listo
    console.log(5);
})*/

document.addEventListener('DOMContentLoaded', () => { // se ejecuta cuando solo el HTML esta listo
    window.onscroll = () => {
        //console.log('Scrolling...');
    }
    
    window.onmousemove = () => {
        //console.log('mouse moving...');
    }
})

//REACCIONAR A CLICKS

let clickTexto = document.querySelector('.header__texto p');
clickTexto.addEventListener('click', (evt) => {    
    setTimeout(() => {
        if('click') {
        console.log(evt.type);
        clickTexto.textContent = "Se ha modificado haciendo click :D";
        clickTexto.style.color = 'aqua';        
        }        
        else {
            console.log('Ha ocurrido un error');
        }
    }, 1000)
})

// EVENTOS CON EL TECLADO

const nombre_input = document.querySelector('#nombre');
const email = document.querySelector('#email');
const textarea = document.querySelector('#mensaje');

/*nombre_input.addEventListener('input', (event) => {    
    //console.log(event.target.value);    
});

email.addEventListener('input', (event) => {    
    //console.log(event);    
});

textarea.addEventListener('input', (event) => {    
    //console.log(event.target.value;
})*/

nombre_input.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
textarea.addEventListener('input', leerTexto);

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

function leerTexto(e) {
    //console.log(e.target);

    datos[e.target.id] = e.target.value;

    console.log(datos);
};


// EVENTO DE SUBMIT

//let Enviar = document.querySelector('.boton--primario');

/*Enviar.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('enviando formulario');
})*/

let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('ENVIANDO FORMULARIO');
});

//VALIDACION DE FORMULARIO
