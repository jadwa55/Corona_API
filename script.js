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
    console.log(obj)
    // obj.data.name
    document.querySelector("#title").innerText      = obj.data.name;
    document.querySelector("#deaths").innerText     = obj.data.latest_data.deaths;
    document.querySelector("#deaths").innerText     = obj.data.latest_data.deaths;
    document.querySelector("#recovered").innerText  = obj.data.latest_data.recovered;
    document.querySelector("#population").innerText = obj.data.population;
    document.querySelector("#time").innerText       = obj.data.timeline.date;
    document.querySelector("#new-deaths").innerText = obj.data.timeline.new_deaths;


    document.getElementsByClassName("card")[0].style.display = "block";
    document.getElementsByClassName("card")[1].style.display = "none";
}
