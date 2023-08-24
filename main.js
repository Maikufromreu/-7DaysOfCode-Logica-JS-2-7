const botao = document.getElementById('btnResposta');
const mensagem = document.getElementById('mensagem');

const resposta = ['nome', 'idade', 'linguagem'];

botao.addEventListener ('click', () => {
resposta['nome'] = mensagem.value;
mensagem.value = '';
})

