function somaVolts(){
    var re = parseInt(document.getElementById("revo").value);
    var co = parseInt(document.getElementById("amvo").value);

    var volts = re * co;

    document.getElementById("volt").value = volts;
}

function calc_Amper(){
    var vo = parseInt(document.getElementById("inpvo").value);
    var re =  parseInt(document.getElementById("inpre").value);

    var corrente =  vo / re;

    document.getElementById("inpam").value = parseInt(corrente);
}

