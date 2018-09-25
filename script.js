let listView = document.getElementById('lista');
let inputUser = document.getElementById('search');

let caracters=[];

fetch('https://swapi.co/api/people')
.then(function(response) {
  return response.json();
})
.then(function (data) {
  console.log(data.results);
  drawListCaracters(data.results)
  caracters = data.results
})
.catch(function(error){
  console.log(error)
})


function drawListCaracters(data){
  for(let i = 0; i < data.length; i++){
    listView.innerHTML += `
    <div id='box' class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${data[i].name}</strong>
              <br>
                <em>Height: </em> ${data[i].height}
                <br>
                <em>Hair color: </em> ${data[i]['hair_color']}
                <br>
                <em>Eye color: </em> ${data[i]['eye_color']}
                <br>
                <em>Gender: </em> ${data[i].gender}
                <br>
                <em>Homeworld: </em> ${data[i].homeworld}
            </p>
          </div>
        </div>
      </article>
      </div>
      `
  }
}

inputUser.addEventListener("keyup", caractersFiltered)

function caractersFiltered(){
    const filtered = caracters.filter(i => {
      return i.name.toLowerCase().includes(inputUser.value.toLowerCase())
    })
    console.log(filtered);
    clear();
    drawListCaracters(filtered);
}

function clear(){
  document.getElementById("lista").innerHTML="";
}
