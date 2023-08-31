const botao = document.getElementById('btnResposta');
const mensagem = document.getElementById('mensagem');
const pergunta = document.getElementById("pergunta");
const paragrafo = document.getElementById('paragrafo');
const div = document.getElementById('divPrincipal');
const botao2 = document.createElement ('button');
let primeiroEvento = false;

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

    mensagem.style.display = 'none';

    paragrafo.textContent = `Olá ${resposta.nome}, você tem ${resposta.idade} anos e já está aprendendo ${resposta.linguagem}!`
    pergunta.textContent = `Você gosta de estudar ${resposta.linguagem}?`

      div.appendChild(botao2);
      botao2.classList.add ('btnResposta2');
      botao2.textContent = 'Sim';
      botao2.style.display = 'block';

      botao.textContent = ('Não');

      primeiroEvento = true;

      if (primeiroEvento) {
         botao2.addEventListener("click", () => {
            paragrafo.textContent = "Muito bom! Continue estudando e você terá muito sucesso."
            pergunta.style.display = "none";
            botao2.style.display = "none";
            botao.style.display = "none";
         })
         
            
         botao.addEventListener("click", () => {
            paragrafo.textContent = "Ahh que pena... Já tentou aprender outras linguagens?"
            pergunta.style.display = "none";  
            botao.style.display = "none";
            botao2.style.display = "none";
         })
      }
      
   }
})



