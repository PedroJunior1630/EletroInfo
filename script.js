function somaVolts(){
    var re = parseInt(document.getElementById("revo").value);
    var co = parseInt(document.getElementById("amvo").value);

    var volts = re * co;

    document.getElementById("volt").value = volts;
}
