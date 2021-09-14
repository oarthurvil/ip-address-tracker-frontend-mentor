let btn = document.querySelector(".btn_search");
let inputValue = document.querySelector(".input_address")

let resultIp = document.querySelector(".result_ip");
let resultLocation = document.querySelector(".result_location");
let resultTime = document.querySelector(".result_time");
let resultIsp = document.querySelector(".result_isp");


let address = function () {
  let addressFetch = 'https://geo.ipify.org/api/v1?apiKey=at_yJq4UOLGrmSqTN3xxaM7iVeeZD4KG&domain=' + inputValue.value;
  
  fetch(addressFetch)
  .then(response => response.json())
  .then(result => {
  
    console.log(result); 
    
    /////////////////////////////////
    // Write information on DOM //
    ////////////////////////////////
  
    resultIp.innerHTML = result.ip;
    resultLocation.innerHTML = `${result.location.city}-${result.location.region}, ${result.location.country}`;
    resultTime.innerHTML = result.location.timezone;
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

    let lati = result.location.lat;
    let long = result.location.lng;  


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
