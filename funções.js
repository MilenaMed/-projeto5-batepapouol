// VERIFICAR NOME NA API E ENTRAR NA SALA
let nome = prompt("Qual seu lindo nome?");
const name = {name: nome};

const promessa1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", name);
let data = new Date()
data = data.toLocaleTimeString('pt-br');

promessa1
.then(tratarSucesso)
.then(setInterval(veririfique_status, 5000)).then(setInterval(pegarMensagens, 3000))
.catch(tratarErro);

function tratarSucesso(resposta) { 
    lista = document.querySelector("ul")
    const item = 
        `<li id="login" class="entrou">
            <p class="horario">(${data})</p> <p class="usuario">${nome}</p>entrou na sala...
        </li>
`
    lista.innerHTML += item;
    pegarMensagens()
 }

function tratarErro(erro) {
  alert("Usuário existente, tente outro")
  nome = prompt("Qual seu lindo nome?")
  const promessa1 = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
promessa1.then(tratarSucesso)
promessa1.catch(tratarErro);
}
// VERIFICAR SE CONTINUA ONLINE

function veririfique_status(){ 
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

// ENVIAR MENSAGENS
// const enviarSMS = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages");

// function mensagem(texto){
//     const mensagemEnv = document.querySelector(".texto").value;
//     listaMensagem = document.querySelector("ul");


// const enviada=
// `<li id="mensagem" class="dialogo">
// <p class="horario">(${mensagem.time})</p> <p class="usuario">${mensagem.from}</p>para <p class="usuario"> todos </p>: ${text}
// </li> 
// `
// mensagemEnv.innerHTML += enviada
// }

// PEGAR MENSAGENS
function pegarMensagens(){
const promessa3 = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
promessa3
.then(printarMensagens)
.catch(tratarErro2);
}
let mensagens =[]

function printarMensagens(resposta) {
let mensagens = resposta.data;
mensagens.forEach((mensagem)=>{
    if(mensagem.type == "status"){
    saidaeentrada = document.querySelector("ul")

    const entrouounão =
    `<li id="login" class="entrou">
    <p class="horario">(${mensagem.time})</p> <p class="usuario">${mensagem.from}</p>${mensagem.text}
   </li>
   `
   saidaeentrada.innerHTML += entrouounão;
    }

    else if(mensagens.type == "message"){
    sms = document.querySelector("ul")
    const mensagen =
    `<li id="mensagem" class="dialogo">
    <p class="horario">(${mensagem.time})</p> <p class="usuario">${mensagem.from}</p>para <p class="usuario"> todos </p>: ${text}
    </li> 
   `
     sms.innerHTML += mensagen;
    }else{
        smsprivada = document.querySelector("ul")
        const privadas =
    `<li id="privada" class="mensagemprivada">
    <p class="horario">(${mensagem.time})</p> <p class="usuario">${mensagem.from}</p>para <p class="usuario">${mensagem.to}:</p> ${text}
    </li> 
    `
    smsprivada.innerHTML += privadas
    }
});
}

function tratarErro2(erro) {
}