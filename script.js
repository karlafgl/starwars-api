let lista= document.getElementById('lista');
let inputUser = document.getElementById('search')

// class StarWars {
//   constructor(starwarsCaracters, searchField){
//     this.starwarsCaracters = [],
//     this.searchField = searchField
//   }

  let starwarsCaracters = fetch('https://swapi.co/api/people')
  .then(function(response) {
    return response.json();
  })
  .then(function (myJson) {
    // console.log(myJson.results);
    updateList(myJson.results)
  })
  .catch(function(error){
    console.log(error)
  })

  function updateList(arr){
    for(let i = 0; i < arr.length; i++){
      lista.innerHTML += `
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>${arr[i].name}</strong>
                <br>
                  <em>Height: </em> ${arr[i].height}
                  <br>
                  <em>Hair color: </em> ${arr[i]['hair_color']}
                  <br>
                  <em>Eye color: </em> ${arr[i]['eye_color']}
                  <br>
                  <em>Gender: </em> ${arr[i].gender}
                  <br>
                  <em>Homeworld: </em> ${arr[i].homeworld}
              </p>
            </div>
          </div>
        </article>
        </div>
        `
    }
  }

  let searchField=0;
  let onSearchChange = (event) => {
    return searchField= event.target.value;
  }

  inputUser.addEventListener("change", onSearchChange)



  function CaractersFiltered(){
    starwarsCaracters.filter(user => {
      return starwarsCaracters.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
      lista.innerHTML += `
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>${starwarsCaracters[i].name}</strong>
                <br>
                  <em>Height: </em> ${starwarsCaracters[i].height}
                  <br>
                  <em>Hair color: </em> ${starwarsCaracters[i]['hair_color']}
                  <br>
                  <em>Eye color: </em> ${starwarsCaracters[i]['eye_color']}
                  <br>
                  <em>Gender: </em> ${starwarsCaracters[i].gender}
                  <br>
                  <em>Homeworld: </em> ${starwarsCaracters[i].homeworld}
              </p>
            </div>
          </div>
        </article>
        </div>
        `
    )
  }
