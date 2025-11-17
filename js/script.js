function entrar() {
  const input = document.getElementById('userId');
  const id = input && input.value.trim();

  if (!id) {
    alert('Por favor, informe o ID do usuário.');
    
    return;
  }

  localStorage.setItem('currentUserId', id);

  window.location.href = '../pages/perfil.html';
}

function iniciarPerfil() {
  const current = localStorage.getItem('currentUserId');

  if (!current) {
    window.location.href = '../pages/index.html';

    return;
  }

  carregarDadosDoUsuario(current);
}

function carregarDadosDoUsuario(id) {
  const nome = localStorage.getItem(id + '_nome') || '';
  const idade = localStorage.getItem(id + '_idade') || '';
  const email = localStorage.getItem(id + '_email') || '';
  const tema = localStorage.getItem(id + '_tema') || 'light';
  const corDaFonte = localStorage.getItem(id + '_cor_fonte') || '#111827';
  const foto = (localStorage.getItem(id + '_foto') || '../pictures/default.png').split('/').pop();

  const nomeElement = document.getElementById('nome');
  const idadeElement = document.getElementById('idade');
  const emailElement = document.getElementById('email');
  const temaElement = document.getElementById('tema');
  const corElement = document.getElementById('corFonte');
  const fotoSelect = document.getElementById('fotoSelect');

  if (nomeElement) nomeElement.value = nome;
  if (idadeElement) idadeElement.value = idade;
  if (emailElement) emailElement.value = email;
  if (temaElement) temaElement.value = tema;
  if (corElement) corElement.value = corDaFonte;
  if (fotoSelect) fotoSelect.value = foto;

  const fotoPerfil = document.getElementById('fotoPerfil');
  
  if (fotoPerfil) fotoPerfil.src = '../pictures/' + foto;

  const displayNome = document.getElementById('displayNome');
  const displayEmail = document.getElementById('displayEmail');
  const displayIdade = document.getElementById('displayIdade');

  if (displayNome) displayNome.innerText = nome || id;
  if (displayEmail) displayEmail.innerText = email || '—';
  if (displayIdade) displayIdade.innerText = (idade || '—') + ' anos';

  if (tema === 'dark') {
    document.body.classList.add('dark-theme');

  } else {
    document.body.classList.remove('dark-theme');
  }

  const card = document.getElementById('card');

  if (card) card.style.color = corDaFonte;
}

function mudarTema() {
  const temaElement = document.getElementById('tema');
  const corElement = document.getElementById('corFonte');

  const tema = temaElement ? temaElement.value : 'light';
  const corDaFonte = corElement ? corElement.value : '#111827';

  if (tema === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  const card = document.getElementById('card');

  if (card) card.style.color = corDaFonte;
}

function cadastrar() {
  const id = localStorage.getItem('currentUserId');

  const nome = document.getElementById('nome').value.trim();
  const idade = String(document.getElementById('idade').value).trim();
  const email = document.getElementById('email').value.trim();
  const tema = document.getElementById('tema').value;
  const cor = document.getElementById('corFonte').value;
  const foto = (document.getElementById('fotoSelect').value || '../pictures/default.png').split('/').pop();

  localStorage.setItem(id + '_nome', nome);
  localStorage.setItem(id + '_idade', idade);
  localStorage.setItem(id + '_email', email);
  localStorage.setItem(id + '_tema', tema);
  localStorage.setItem(id + '_cor_fonte', cor);
  localStorage.setItem(id + '_foto', foto);

  carregarDadosDoUsuario(id);

  alert('Dados salvos com sucesso!');
}

function sair() {
  alert('Volte Sempre!');

  localStorage.removeItem('currentUserId');

  window.location.href = '../pages/index.html';
}

function criarExemplos() {
  localStorage.setItem('chico_nome', 'Chico Silva');
  localStorage.setItem('chico_idade', '30');
  localStorage.setItem('chico_email', 'chico@example.com');
  localStorage.setItem('chico_tema', 'dark');
  localStorage.setItem('chico_cor_fonte', '#FF0000');
  localStorage.setItem('chico_foto', 'chico.jpg');

  localStorage.setItem('maria_nome', 'Maria Souza');
  localStorage.setItem('maria_idade', '25');
  localStorage.setItem('maria_email', 'maria@example.com');
  localStorage.setItem('maria_tema', 'light');
  localStorage.setItem('maria_cor_fonte', '#065f46');
  localStorage.setItem('maria_foto', 'maria.jpg');

  localStorage.setItem('joao_nome', 'João Pereira');
  localStorage.setItem('joao_idade', '28');
  localStorage.setItem('joao_email', 'joao@example.com');
  localStorage.setItem('joao_tema', 'light');
  localStorage.setItem('joao_cor_fonte', '#7c3aed');
  localStorage.setItem('joao_foto', 'joao.jpg');

  alert('Exemplos criados. Use os IDs: chico, maria, joao.');
}