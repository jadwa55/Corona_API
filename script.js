function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //   document.getElementById("demo").innerHTML = this.responseText;
    var  obj = JSON.parse(this.responseText);
    // console.log(this.responseText);
    // console.log(obj.data);
    see(obj);
    }

  };
  xhttp.open("GET", "https://corona-api.com/countries/ma", true);
  xhttp.send();
}

function see(obj) {
    
}

loadDoc();