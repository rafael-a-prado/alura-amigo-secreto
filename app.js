let amigos = [];

// Função principal para adicionar amigo
function adicionarAmigo() {
  const nomeAmigo = obterNomeDoInput();
  if (!nomeAmigo) {
    exibirAlerta('Por favor, insira um nome.');
    return;
  }

  amigos.push(nomeAmigo);
  limparInput();
  atualizarListaAmigos();
}

// Função principal para sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    exibirAlerta('Adicione seus amigos antes de sortear!');
    return;
  }

  const amigoSorteado = obterAmigoAleatorio();
  exibirResultado(amigoSorteado);
}

// Função auxiliar para obter nome do input
function obterNomeDoInput() {
  return document.getElementById('amigo').value.trim();
}

// Função auxiliar para limpar o input
function limparInput() {
  document.getElementById('amigo').value = '';
}

// Função auxiliar para exibir alertas
function exibirAlerta(mensagem) {
  alert(mensagem);
}

// Função auxiliar para obter amigo aleatório
function obterAmigoAleatorio() {
  const indice = Math.floor(Math.random() * amigos.length);
  return amigos[indice];
}

// Função auxiliar para atualizar a lista na tela
function atualizarListaAmigos() {
  const listaHTML = document.getElementById('listaAmigos');
  listaHTML.innerHTML = '';

  amigos.forEach(nome => {
    const item = document.createElement('li');
    item.textContent = nome;
    listaHTML.appendChild(item);
  });
}

// Função auxiliar para exibir resultado do sorteio
function exibirResultado(nome) {
  document.getElementById('resultado').innerHTML = nome;
}