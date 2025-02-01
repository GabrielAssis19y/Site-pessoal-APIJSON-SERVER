document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const repoId = urlParams.get('id');

  if (repoId) {
    const urlrepo = '/repositorio';
    fetch(urlrepo)
      .then(res => res.json())
      .then(data => {
        const repo = data.find(r => r.id == repoId);
        if (repo) {
          const repoDetails = document.getElementById('repo-details');
          const detailsHTML = `
            <div class="hstack gap-3">
              <div class="p-2"><h2>Repositório: ${repo.titulo}</h2></div>
            </div>

            <div class="border-top border-5 custom-border"></div>
            <div class="p-2">
              <div class="TextoTopicos"><strong>Descrição</strong></div>
              <div>${repo.descricao}</div>
              <div class="hstack gap-3">
                <div class="p-2 "><strong class="TextoTopicos">Data Criação</strong></div>
                <div class="p-2 ms-auto"><img width="24" height="24" src="./assets/images/estrela.png" alt="estrela"/></div>
                <div class="p-2">${repo.estrelas}</div>
                <div class="p-2 ms-auto"><img width="24" height="24" src="./assets/images/fork.png" alt="fork"/></div>
                <div class="p-2">${repo.forks}</div>
              </div>
              <div class="hstack gap-3 Topicos-espaco">
                <div class="p-2 TextoDiverso">${new Date().toLocaleDateString()}</div>
              </div>

              <div class="hstack gap-3 Topicos-espaco">
                <div class="p-2"><strong class="TextoTopicos">Linguagens</strong></div>
                <div class="p-2 ms-auto"><img width="30" height="30" src="./assets/images/user.png" alt="seguidores"/></div>
                <div class="p-2">${repo.seguidores}</div>
              </div>
              <div class="hstack gap-3">
                <div class="p-2 TextoDiverso">${repo.linguagem}</div>
              </div>
              <div class="hstack gap-3">
                <div class="p-2"><strong class="TextoTopicos">Link de Acesso</strong></div>
              </div>
              <div class="hstack gap-3">
                <a href="${repo.urlconteudo}" target="_blank"><div class="p-2 TextoDiverso">${repo.urlconteudo}</div></a>
              </div>
              <div class="hstack gap-3">
                <div class="p-2"><strong class="TextoTopicos">Linguagens/Topicos</strong></div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="p-2 TextoDiverso"><button type="button" class="btn btn-primary mb-2">${repo.topico}</button></div>
                  </div>
                </div>
              </div>
            </div>`;
          repoDetails.innerHTML = detailsHTML;
        } else {
          document.getElementById('repo-details').innerHTML = '<p>Repositório não encontrado.</p>';
        }
      })
      .catch(error => console.error('Erro ao buscar os dados dos repositórios:', error));
  } else {
    document.getElementById('repo-details').innerHTML = '<p>Repositório não especificado.</p>';
  }
});

