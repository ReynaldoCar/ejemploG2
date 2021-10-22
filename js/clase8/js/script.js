var screen = '';
var dataNum = '';
var clicks = 0;
var result = 0;
var operador1 = 0;
var operador2 = 0;
var operacion = "";

function nums(dataNum){
    if(screen === '0'){
        screen = '';
    }
    screen += dataNum;
    document.getElementById('pantalla').innerHTML = screen;
}

function borrarTodo(){
    screen -= screen;
    document.getElementById('pantalla').innerHTML = screen;
    screen = '';
}

function deleteAll(){ 
    clicks = 0;
    result = 0;   
    screen ='0';
    document.getElementById('pantalla').innerHTML = screen;
}

function clear(){
    screen ='0';
    document.getElementById('pantalla').innerHTML = screen;
}


function suma(){
    operador1 = parseFloat(screen);
    operacion = "suma";

    if (clicks == 0) {
        result = operador1;
    }else{
        result += operador1;
    }

    clicks++;
    
    clear();
    document.getElementById('pantalla').innerHTML = result;
}

function resta(){
    operador1 = parseFloat(screen);
    operacion = "resta";

    if (clicks == 0) {
        result = operador1;
    }else{
        result -= operador1;
    }

    clicks++;
    
    clear();
    document.getElementById('pantalla').innerHTML = result;
}


function multiplicacion(){
    operador1 = parseFloat(screen);
    operacion = "multi";

    if (clicks == 0) {
        result = operador1;
    }else{
        result *= operador1;
    }

    clicks++;
    
    clear();
    document.getElementById('pantalla').innerHTML = result;
}

function division(){
    operador1 = parseFloat(screen);
    operacion = "division";

    if (clicks == 0) {
        result = operador1;
    }else{
        result /= operador1;
    }

    clicks++;
    
    clear();
    document.getElementById('pantalla').innerHTML = result;
}

function muestraResultado(){
    document.getElementById('pantalla').innerHTML = result;
}

function resolver(){
    operador2 = parseFloat(screen);

    switch (operacion) {
        case "suma":
            result = result + operador2;
            screen = result.toString();
            clicks = 0;
            operacion ="";    
            document.getElementById('pantalla').innerHTML = result;
            break;

        case "resta":
            result = result - operador2;
            screen = result.toString();
            clicks = 0;
            operacion ="";    
            document.getElementById('pantalla').innerHTML = result;
            break;

        case "multi":
            result = result * operador2;
            screen = result.toString();
            clicks = 0;
            operacion ="";    
            document.getElementById('pantalla').innerHTML = result;
            break;
    
        default:
            screen ='0';
            document.getElementById('pantalla').innerHTML = screen;
            break;
    
    }

    
}


/* function operacion(operacion, num1, num2){
    var numero1 = parseFloat(num1);
    var numero2 = parseFloat(num2);

    switch (operacion) {
        case "suma":
            
            break;
    
        default:
            break;
    }
} */