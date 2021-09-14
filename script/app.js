let btn = document.querySelector(".btn_search");
let inputValue = document.querySelector(".input_address")

let resultIp = document.querySelector(".result_ip");
let resultLocation = document.querySelector(".result_location");
let resultTime = document.querySelector(".result_time");
let resultIsp = document.querySelector(".result_isp");


let address = function () {
  let addressFetch = 'http://ip-api.com/json/' + inputValue.value;
  
  fetch(addressFetch)
  .then(response => response.json())
  .then(result => {
  
    console.log(result); 
    
    /////////////////////////////////
    // Write information on DOM //
    ////////////////////////////////
  
    resultIp.innerHTML = result.query;
    resultLocation.innerHTML = `${result.city}-${result.region}, ${result.country}`;
    resultTime.innerHTML = result.timezone;
    resultIsp.innerHTML = result.isp;

    if(result.status === "fail"){
      resultIp.innerHTML = "Invalid address";
      resultLocation.innerHTML = "Invalid address";
      resultTime.innerHTML = "Invalid address";
      resultIsp.innerHTML = "Invalid address";
    }


    /////////////////////////////////
    // Show coordinates in the map //
    ////////////////////////////////

    let lati = result.lat;
    let long = result.lon;  


    let coordinates = {lat: lati, lng: long};

    let mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: coordinates 
    });
  
    let marker = new google.maps.Marker({
      position: coordinates,
      map: mapa
    });

  })
  .catch(err => {
    console.error("Failed", err);
  })

}

document.addEventListener("load", address());

btn.addEventListener("click", function(){
  address()
})
