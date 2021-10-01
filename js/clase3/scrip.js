/* var dato = [];

var nombre = 'Reynaldo';
var edad = 29;
var soltero = true;
var estatura = 1.65;

dato = [nombre, edad, soltero, estatura]
 */
/* for (let i = 0; i < dato.length; i++) {
    document.writeln(dato[i] + '</br>');    
} */

/* 
var img  = [
    '1780',
    '27499',
    '27500',
    '34876',
    '82333',
    '82488',

];


for (let index = 0; index < img.length; index++) {
    var template = '<img src="img/' + img[index] + '.jpg" alt="">';

    document.write(template);
} */

var respuesta = [];
var pregunta = [];

pregunta = ['¿Que haces aqui perro?', '¿Como te llamas sabandija?',  '¿Eres mujer?', '¿Cuantas enchiladas quieres?', '¿Tienes mascotas?'];

for (let index = 0; index < pregunta.length; index++) {
    respuesta[index] =  prompt(pregunta[index]);  
}


for (let index = 0; index < respuesta.length; index++) {
    
    document.write(pregunta[index] + ' ' + respuesta[index] + ' <br> ');
}
