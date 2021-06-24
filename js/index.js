var btnRecuperar = document.querySelector('#recuperar');
var btnVoltar = document.querySelector('#voltar');

var body = document.querySelector('body');

btnRecuperar.addEventListener('click', function () {
  body.className = 'recuperar-senha-js';
});

btnVoltar.addEventListener('click', function () {
  body.className = 'voltar-js';
});
