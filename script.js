function insert(num)
{
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('display').innerHTML =  "";
}

function del()
{
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = eval(resultado);
}