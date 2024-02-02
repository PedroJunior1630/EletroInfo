function somaVolts(){
    var re = parseInt(document.getElementById("RE"));
    var co = parseInt(document.getElementById("AM"));

    var volts = re * co;

    document.getElementById("resulta").value = volts;
}
