const authForm = document.querySelector('#authForm');
const authFormTitle = document.querySelector('#authFormTitle');
const register = document.querySelector('#register');
const access = document.querySelector('#access');
const loading = document.querySelector('#loading');
const authing = document.querySelector('#authing');
const userContent = document.querySelector('#userContent');
const userEmail = document.querySelector('#userEmail');
const sendEmailVerificationd = document.querySelector('#sendEmailVerificationDiv');
const emailVerified = document.querySelector('#emailVerified');
const passwordReset = document.querySelector('#passwordReset');
const userName = document.querySelector('#userName');
const userImg = document.querySelector('#userImg');

function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta';
  authFormTitle.innerHTML = 'Cadastrar uma nova conta';
  hideItem(register); // esconde o formulário de login
  hideItem( passwordReset); // esconde o formulário de recuperação de senha
  showItem(access); // mostra o formulário de acesso
}

function toggleToAccess() {
  submitAuthForm.innerHTML = 'Acessar conta';
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar';
  hideItem(access);   // esconde o formulário de acesso
  showItem(register); // mostra o formulário de cadastro
  showItem(passwordReset); // mostra o formulário de recuperação de senha
}

function showItem(element) {
  element.style.display = 'block';
}
function hideItem(element) {
  element.style.display = 'none';
}

function showUserContent(user) {
  console.log(user);
  if (user.emailVerified) {
    emailVerified.innerHTML = 'Verificado';
    hideItem(sendEmailVerificationd)
  } else {
    emailVerified.innerHTML = ' Não Verificado ';
    showItem(sendEmailVerificationd)
  }
  // aqui adiciona a foto e o nome do usuário
  userImg.src = user.photoURL ? user.photoURL : './../assets/imagens/unknownUser.png'; 
  userName.innerHTML = user.displayName 
  userEmail.innerHTML = user.email;
  hideItem(authing);
  showItem(userContent);
}
function showAuth() {
  authForm.email.value = '';
  authForm.password.value = '';
  hideItem(userContent);
  showItem(authing);
}
// exibindo botão de redirecionamento para o login na verificação de email
const actionCodeSettings = {
  url: 'https://p4lad1n030.github.io/Firebase-Completo/index.html'
}