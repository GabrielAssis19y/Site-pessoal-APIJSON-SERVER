

Este é um projeto de site pessoal desenvolvido utilizando HTML, CSS e JavaScript, com integração de APIs para exibição de informações dinâmicas. O objetivo foi criar um site pessoal apresentando informações reais sobre as atividades realizadas no ambiente do GitHub e outras informações obtidas a partir de um servidor JSON Server, assim como a API rest do GitHub.

🚀 Tecnologias Utilizadas

HTML, CSS, JavaScript - Estrutura e estilização do site.

API do GitHub - Utilizada para exibir informações do perfil (bio, avatar, etc.).

JSON Server - Utilizado para armazenar e exibir repositórios, slides e colegas de trabalho.

📌 Funcionalidades

Exibição automática de informações do usuário via API do GitHub.

Listagem de repositórios, slides e colegas de trabalho via JSON Server.

Design responsivo e dinâmico.

🔧 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/GabrielAssis19y/Site-pessoal-APIJSON-SERVER.git

Acesse a pasta do projeto:

cd Site-pessoal-APIJSON-SERVER

Instale e inicie o JSON Server:

npm install -g json-server
json-server --watch db.json

Abra o arquivo index.html no navegador.

📂 Estrutura do Projeto

📁 Site-pessoal-APIJSON-SERVER
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
├── 📄 db.json  (dados simulados com JSON Server)
└── 📄 README.md
