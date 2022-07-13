const auth = firebase.auth()
// traduz o email de verificação
auth.languageCode = 'pt-BR'
// função para logar usuário
authForm.onsubmit = function (event) {
  showItem(loading);
  event.preventDefault()
  if (authForm.submitAuthForm.innerHTML == 'Acessar') {
    auth.signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
      console.log('Falha no acesso')
      console.log(error)
      hideItem(loading)
    })
  } else {
    // função para cadastrar usuário
    auth.createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
      console.log('Falha no cadastro')
      console.log(error)
      
    })
  }
}
// função para checar se o usuário está logado ou não
auth.onAuthStateChanged(function (user) {
  // função que chama o loading enquanto o usuário está logando
  hideItem(loading)
  // ===========================================================
  if (user) {
    showUserContent(user)
  } else {
    showAuth()
  }
})

function signOut() {
  window.alert('Você saiu do sistema')
  auth.signOut().catch(function (error) {
  console.log('Falha ao deslogar')
  console.log(error)
})}
// função para enviar email de verificação
function sendEmailVerification() {
  showItem(loading);
  let user = firebase.auth().currentUser;
  user.sendEmailVerification(actionCodeSettings).then(function () { 
    alert(`Email de verificação enviado para ${user.email}`)
  }).catch(function (error) {
    console.log('Falha ao enviar email de verificação')
    console.log(error)
  }).finally(function () {
    hideItem(loading)
  })
}
// função para recuperar senha
function sendPasswordResetEmail() {
  const email = prompt('Digite o email para recuperação de senha', authForm.email.value)
  if (email) {
    showItem(loading);
    auth.sendPasswordResetEmail(email, actionCodeSettings).then(function () {
      alert(`Email de recuperação enviado para ${email}`)
    }).catch(function (error) {
      alert('Falha ao enviar email de recuperação')
      console.log(error)
    }).finally(function () {
      hideItem(loading)
    })
  }else{
    alert('Email não informado')
  }
}
// função que permite a autenticação através do Google
function signInWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider()
  showItem(loading);
  // o metodo signInWithPopup pode ser substituido por signInWithRedirect, que leva a pagina do google de login e depois retorna a nossa aplicação.
  auth.signInWithPopup(provider).then(function (result) {
    console.log(result)
  }).catch(function (error) {
    alert('Falha ao logar com o Google')
    console.log(error)
  }).finally(function () {
    hideItem(loading)
  })
}