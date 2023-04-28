var vdisplay = [];

function insert(num) {
    if (num == '+' || num == '-' || num == '*' || num == '/') {
        if (vdisplay.length == 0) {
            vdisplay.push(document.getElementById('display').innerHTML);
            vdisplay.push(num);
            document.getElementById('display').innerHTML = '';
        } else if (vdisplay[vdisplay.length - 1] !=
            document.getElementById('display').innerHTML &&
            document.getElementById('display').innerHTML != '') {
            vdisplay.push(document.getElementById('display').innerHTML);
            vdisplay.push(num);
            document.getElementById('display').innerHTML = '';
        } else if (vdisplay[vdisplay.length - 1] != "+" &&
            vdisplay[vdisplay.length - 1] != "-" &&
            vdisplay[vdisplay.length - 1] != "/" &&
            vdisplay[vdisplay.length - 1] != "*") {
            vdisplay.push(num);
            document.getElementById('display').innerHTML = '';
        }
    }

    else if (num == '=') {
        if (vdisplay[vdisplay.length - 1] == "+" ||
            vdisplay[vdisplay.length - 1] == "-" ||
            vdisplay[vdisplay.length - 1] == "/" ||
            vdisplay[vdisplay.length - 1] == "*") {
            vdisplay.push(document.getElementById('display').innerHTML);
            calcular();
        }
    }

    else {
        if (!(num == '.' && document.getElementById('display').innerHTML.includes('.'))) {
            if (vdisplay.length == 1) {
                clean();
                document.getElementById('display').innerHTML += num;
            } else {
                document.getElementById('display').innerHTML += num;
            }
        }
    }
}

function clean() {
    document.getElementById('display').innerHTML = "";
    vdisplay = [];
}

function del() {
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let resultado = '';

    try {
        for (let i = 0; i < vdisplay.length; i++) {
            resultado += vdisplay[i];
        }
        resultado = eval(resultado);
        document.getElementById('display').innerHTML = resultado;
        vdisplay = [];
        vdisplay.push(resultado);
    } catch (e) {
        document.getElementById('display').innerHTML = '---  ERRO  ---';
    }
}