fetch('/api/verificarLogin', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ login: 'seuLogin', senha: 'suaSenha' }),
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    window.location.href = data.redirectUrl;
  } else {
    console.error(data.message);
  }
})
.catch(error => {
  console.error('Erro ao processar a solicitação:', error);
});
