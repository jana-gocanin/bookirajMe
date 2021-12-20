function showAlert() {
    var myText = "Rezervisali ste hotel, čestitamo!";
    alert (myText);
}

function nemaKom(){
    var nema = "Nema više komentara";
    alert(nema);
}

function check(){
    const x = document.forms["myform"];
    let text = "Izabrali ste sledeći let (mesto polaska, mesto sletanja, datum, broj putnika): <br>";
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

const x = document.getElementById("demo1");
function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}

// jquery

  $(document).ready(function() {
    $(".rslides").responsiveSlides();
  });

  function showAlert2(){
    var myText = "Izabrali ste vozilo!";
    alert (myText);
  }
 
    function validate1() {
        if (document.getElementById('vehicle1').checked) {
            alert("Izabrali ste Ekonomsku klasu");
        }
    }
    function validate2(){
     if(document.getElementById('vehicle2').checked){
        alert("Izabrali ste Luksuznu klasu");
    
    } 
}
function validate3(){

 if(document.getElementById('vehicle3').checked){
    alert("Izabrali ste Mini");
}
}
function validate4(){

 if(document.getElementById('vehicle4').checked){
    alert("Izabrali ste Kombi");

}
} 
function validate5(){
 if(document.getElementById('vehicle5').checked){
alert("Izabrali ste Motor");
}
} 

function check2(){
    const x = document.forms["kontakt_forma"];
    let text = "Napravili ste nalog  sa email-om i lozinkom: \n ";
    for (let i = 0; i < x.length-1 ;i++) {
        text += x.elements[i].value + '\n';
    }
    if(confirm("Da li ste uneli ispravan email i lozinku?")==1){
        alert(text);
    }
    
}

function check3(){
    
    let text =document.getElementById("comment").value ;
   

 document.getElementById("com").innerHTML = text;
    
    
}

  
        
    
  