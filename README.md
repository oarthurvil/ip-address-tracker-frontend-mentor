# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). 
Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

Mobile: <br/>
<img src="https://github.com/oarthurvil/IP-Address-Tracker-Challenge-03-Frontend-Mentor/blob/main/screenshot/mobile.png" alt="screenshot app" style="width:200px;"/>

<br/>

1440px: <br/>
<img src="https://github.com/oarthurvil/IP-Address-Tracker-Challenge-03-Frontend-Mentor/blob/main/screenshot/1440px.png" alt="screenshot app" style="width:600px;"/>

### Links

- Live Site URL: [IP Address Tracker](https://oarthurvil.github.io/IP-Address-Tracker-Challenge-04-Frontend-Mentor/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- 

### What I learned


```js
let address = function () {
  let addressFetch = 'http://ip-api.com/json/' + inputValue.value;
  
  fetch(addressFetch)
  .then(response => response.json())
  .then(result => {
  
    //content of project...

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
```

## Author

- LinkedIn - [@oarthurvil](www.linkedin.com/in/oarthurvil)
- Frontend Mentor - [@oarthurvil](https://www.frontendmentor.io/profile/oarthurvil)
