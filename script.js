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

function calc_Resis(){
    var vo = parseInt(document.getElementById("vore").value);
    var co =  parseInt(document.getElementById("amre").value);

    var resistencia =  vo / co;

    document.getElementById("res").value = parseInt(resistencia);
}

function calc_Watts(){
    var vo = parseInt(document.getElementById("vowa").value);
    var co = parseInt(document.getElementById("amwa").value);

    var pot = vo * co;

    document.getElementById("watts").value = pot;
}

