const apod = 'https://api.nasa.gov/planetary/apod?api_key=TsPbQtElaFs5xkuOrCjUlbOx46X0UHpLBZpGYHRc';
const request = new XMLHttpRequest;

request.open('GET', apod);
request.responseType = 'json';
request.send();

request.onload = function() {
    let image = request.response;
   
    main(image);
}

function main(json){
  const data = document.querySelector('.date')
  data.textContent = json.date
  //const explanation = document.querySelector('.explanation')
  //explanation.textContent = json.explanation
  if(data.hdurl != null){
    const image = document.querySelector('.image')
    image.src = json.hdurl
    const 
  }
  else{
    const image = document.querySelector('.image')
    image.src = json.url
    
  }
}
