const botao = document.getElementById('btnResposta');
const mensagem = document.getElementById('mensagem');
const pergunta = document.getElementById("pergunta");

const resposta = {};

botao.addEventListener ('click', () => {
   if (pergunta.textContent === 'Como você se chama, humano??') {
    resposta.nome = mensagem.value;

   } else if (pergunta.textContent=== 'Quantos anos você tem?') {
    resposta.idade = mensagem.value;

   } else if (pergunta.textContent === 'Qual linguagem de programação você está estudando?') {
    resposta.linguagem = mensagem.value;
   }

   mensagem.value = '';

   if (pergunta.textContent === 'Como você se chama, humano??') {
    pergunta.textContent = 'Quantos anos você tem?';

   } else if (pergunta.textContent === 'Quantos anos você tem?') {
    pergunta.textContent = 'Qual linguagem de programação você está estudando?';

   } else {
    console.log('Resposta:', resposta);
   }
})
