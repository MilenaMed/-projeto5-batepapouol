// VERIFICAR NOME NA API
let nome = prompt("Qual seu lindo nome?");

const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
const name = {name:nome};

promessa.then(tratarSucesso); 
promessa.catch(tratarErro);

// var hr    = data.getHours();
// var min     = data.getMinutes();
// var seg     = data.getSeconds();

function tratarSucesso(resposta) { 
    lista = document.querySelector("ul")
    const item = 
        `<li id="login" class="entrou">
            <p class="horario">(00:00:00)</p> <p class="usuario">${nome}</p>entrou na sala...
        </li>
`
    lista.innerHTML += item;
 }

function tratarErro(erro) {
  alert("Usuário existente, tente outro")
  nome = prompt("Qual seu lindo nome?")
  const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
promessa.then(tratarSucesso); 
promessa.catch(tratarErro);
}

