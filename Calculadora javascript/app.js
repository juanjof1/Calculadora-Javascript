function preencher (valor){
    document.getElementById('visor').value +=
    valor;
}

function clear () {
    document.getElementById('visor').value = '';

}

function calculo (valor) {

    try {
        var result = 0;
        result = document.getElementById('visor').value;
        document.getElementById('visor').value = '';
        document.getElementById('visor').value = eval(result);
    } catch (err) {
        
        alert("Invalid expression");
    }

}


function maiz () {

    const root = 0;
    root = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    document.getElementById('visor').value = Math.sqrt(root);

}

function percent () {
   
    const pecert = 0;
    perct = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    perct = eval (perct);
    document.getElementById('visor').value = perct/100;
}

