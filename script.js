function somaVolts(){
    var re = document.getElementById("RE");
    var co = document.getElementById("AM");

    var r = re.innerText;
    var i = co.innerText;
    var volts = parseInt(r) * parseInt(i);

    document.getElementById("resulta").textContent = volts;
}
