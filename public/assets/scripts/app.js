
const bio = document.getElementById("bio")

fetch('https://api.github.com/users/GabrielAssis19y')
.then(res=>(res.json()))
.then(data =>{
  const conteudo = 
    `
    <div class="row">
        <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="bg-body-secondary bg-gradient text-dark mx-0 my-2 px-4 py-2 rounded border border-2 border-info text-center fs-3">
                Gabriel Assis
            </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3"></div>
        <div class="col-sm-12 col-md-2 col-lg-2 mx-0 my-2 px-4 py-2 text-center fs-3">
            <p>Seção 1</p>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 mx-0 my-2 px-4 py-2 text-center fs-3">
            <p>Seção 2</p>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 mx-0 my-2 px-4 py-2 text-center fs-3">
            <p>Seção 3</p>
        </div>
    </div>
    <div class="fs-2 mx-5">
        <p>Perfil</p>
    </div>
    <hr class="border border-primary border-1 mx-5">
    <div class="row">
        <div class="col-sm-12 col-md-2 col-lg-2 py-3">
            <img src="${data.avatar_url}" class="img-fluid rounded-circle rounded float-start" alt="perfil">
        </div>
        <div class="col-sm-12 col-md-10 col-lg-10 ps-5">
            <div class="text-info">
                <h2>${data.name}</h2>
            </div>
            <p>${data.bio}</p>
            <p><strong>Localidade:</strong> ${data.location}</p>
            <p><strong>Site:</strong> <a href="${data.blog}" target="_blank">${data.blog}</a></p>
            <p><img src="./assets/images/user.png" class="img-fluid mx-2" alt="seguidores"> ${data.followers}</p>
            <p><strong>Seguindo:</strong> ${data.following}</p>
            <a href="https://www.facebook.com/ZangadoGames/"> <img src="./assets/images/facebook.png" class="img-fluid mx-2" alt="Facebook"> </a>
              <a href="https://twitter.com/BillGates"> <img src="./assets/images/twitter.png" class="img-fluid mx-2" alt="Twitter"> </a>  
              <a href="https://www.instagram.com/gustavoguanabara/"> <img src="./assets/images/instagram.jpg" class="img-fluid mx-2" alt="Instagram"> </a>
        </div>
    </div>`
  bio.innerHTML = conteudo;
})
.catch(error => console.error('Error fetching the GitHub user data:', error));

const repositorios = document.getElementById("repositorios");

const urlrepo = '/repositorio';
fetch(urlrepo)
  .then(res => res.json())
  .then(data => {
    let reposHTML = '';
    data.forEach(repo => {
      reposHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <div class="card">
            <img src="${repo.urlcapa}" class="card-img-top" alt="${repo.titulo}">
            <div class="card-body">
              <h5 class="card-title">${repo.titulo}</h5>
              <p class="card-text">${repo.descricao}</p>
              <a href="repo.html?id=${repo.id}" class="btn btn-primary">Ver Detalhes</a>
            </div>
          </div>
        </div>`;
    });
    repositorios.innerHTML = reposHTML;
  })
  .catch(error => console.error('Erro ao buscar os dados dos repositórios:', error));


document.addEventListener('DOMContentLoaded', function () {
  
  let slidesContainer = document.querySelector(".carousel-inner");
  let indicatorsContainer = document.querySelector(".carousel-indicators");


  const destaque = '/destaque';

  
  fetch(destaque)
    .then(response => response.json())
    .then(data => {
      
      let slidesHTML = '';
      let indicatorsHTML = '';

      
      data.forEach((slide, index) => {
       
        indicatorsHTML += `
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-current="${index === 0 ? 'true' : ''}" aria-label="Slide ${index + 1}"></button>
        `

        
        let content = slide.urlcapa.endsWith('.mp4')
          ? `<video src="${slide.urlcapa}" class="d-block w-100" muted autoplay loop></video>`
          : `<img src="${slide.urlcapa}" class="d-block w-100" alt="${slide.titulo}">`

       
        slidesHTML += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            ${content}
            <div class="carousel-caption d-none d-md-block">
              <h5>${slide.titulo}</h5>
              <p>${slide.descricao}</p>
              <a href="${slide.urlconteudo}" class="btn btn-info">Saiba mais</a>
            </div>
          </div>
        `
      })

      
      slidesContainer.innerHTML = slidesHTML
      indicatorsContainer.innerHTML = indicatorsHTML
    })
    .catch(error => console.error('Erro ao buscar dados:', error))
});

const colega = '/colegas'
fetch(colega)
.then(response => response.json())
.then(data => {
    const colegas = document.getElementById("colegas")
    let colegasHTML = `
      <div class="fs-2 mx-5 mt-5">
        <p>Colegas de trabalho</p>
      </div>
      <hr class="border border-primary border-1 mx-5">
      <div class="row justify-content-center">`
    
        data.forEach(colega => 
        {
            colegasHTML += `
            <div class="col-sm-12 col-md-2 col-lg-2 mx-0 my-2 px-4 py-2 fs-3 text-info text-center">
              <a href="${colega.urlgithub}">
                <img src="${colega.urlfoto}" class="img-fluid mx-2" alt="${colega.nome}">
              </a>
              <p>${colega.nome}</p>
            </div>`     
        })
    colegasHTML += `</div>`
    colegas.innerHTML = colegasHTML
    
})

