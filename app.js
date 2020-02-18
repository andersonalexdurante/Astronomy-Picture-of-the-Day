const apod = 'https://api.nasa.gov/planetary/apod?api_key=TsPbQtElaFs5xkuOrCjUlbOx46X0UHpLBZpGYHRc';
const request = new XMLHttpRequest;

request.open('GET', apod);
request.responseType = 'json';
request.send();

request.onload = function() {
    let image = request.response;
    
    console.log(image.response)
  }


