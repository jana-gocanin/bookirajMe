function showAlert() {
    var myText = "Rezervisali ste hotel, cestitamo!";
    alert (myText);
}

function check(){
    const x = document.forms["myform"];
    let text = "Izabrali ste sledeci let: <br>";
    for (let i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    if(confirm("Da li je to let koji zelite?")==1){
        document.getElementById("f1").innerHTML = text;
    }
    
}

function obrisi(){
    document.getElementById('f1').innerHTML=" ";
}