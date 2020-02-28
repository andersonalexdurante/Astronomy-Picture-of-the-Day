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
  const title = document.querySelector('.title')
  title.textContent = json.title
  const explanation = document.querySelector('.explanation')
  explanation.textContent = json.explanation
  if(json.media_type == 'video'){
    document.querySelector('.media').innerHTML += `<iframe class="video" src="${json.url}"></iframe>`
  }
  else {
    if(json.hdurl != null){
      document.querySelector('.media').innerHTML += `<img class="image" src="${json.hdurl}">`
    }
    else{
      document.querySelector('.media').innerHTML += `<img class="image" src="${json.url}">`
    }
    const image = document.querySelector('.image')
    image.src = json.hdurl
  }
  
}
