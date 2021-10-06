var elemento = document.createElement('h1');
var elemento2= document.createElement('h2');

var selec = document.getElementById('app');

var container = document.getElementsByTagName('div')[1];

elemento.innerHTML = 'Hola mundo';
elemento2.innerHTML = 'Que tranza';

/* container.appendChild(elemento);
container.appendChild(elemento2); */


function closePopUp(){
    document.getElementById('popUp').style.display = 'none';
    console.log('Hola mundo');
}