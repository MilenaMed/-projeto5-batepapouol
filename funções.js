// VERIFICAR NOME NA API E ENTRAR NA SALA
let nome = prompt("Qual seu lindo nome?");
const name = {name: nome};

const promessa1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", name);
let data = new Date()
data = data.toLocaleTimeString('pt-br');

promessa1
.then(tratarSucesso)
.then(setInterval(veririfique_status, 5000))
.catch(tratarErro);

function tratarSucesso(resposta) { 
    lista = document.querySelector("ul")
    const item = 
        `<li id="login" class="entrou">
            <p class="horario">(${data})</p> <p class="usuario">${nome}</p>entrou na sala...
        </li>
`
    lista.innerHTML += item;
 }

function tratarErro(erro) {
  alert("Usuário existente, tente outro")
  nome = prompt("Qual seu lindo nome?")
  const promessa1 = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
promessa1.then(tratarSucesso); 
promessa1.catch(tratarErro);
}
// VERIFICAR SE CONTINUA ONLINE

function veririfique_status(){ 
    console.log("executou");

    const promessa2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", name);
        promessa2.catch(tratarErro1);

    function tratarErro1(erro) {
        saida = document.querySelector("ul")
            const saiu = 
                `<li id="login" class="entrou">
                 <p class="horario">(${data})</p> <p class="usuario">${nome}</p>saiu na sala...
                </li>
                `
        saida.innerHTML += saiu;
    }
}

// PEGAR MENSAGENS
// const promessa3 = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
// promessa3.then(tratarSucesso2); 
// promessa3.catch(tratarErro2);

// function tratarSucesso2(resposta) { 
//     mensagens = document.querySelector("ul")
// if ()

//     mensagens.innerHTML += mensagem;
// }

// function tratarErro2(erro) {
//    const saiu = 
//    `<li id="login" class="entrou">
//        <p class="horario">(${data})</p> <p class="usuario">${nome}</p>saiu na sala...
//    </li>
// `
// }