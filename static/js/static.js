window.addEventListener('load', ()=> {
  let long;
  let lat;

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition
  (position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
    const proxy = "https://cors-anywhere.herokuapp.com/";    
    const api = `${proxy}https://api.darksky.net/forecast/a546186dad3fadcf9c239fad818c2292/${lat},${long}`;
    fetch(api)
  .then(response =>{
      return response.json();
    })
      .then (data => {
          console.log(data);
      });
  });
} 
});