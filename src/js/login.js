let email = document.getElementById('email');
let senha = document.getElementById('senha');
let button = document.getElementById('btn-login');

button.addEventListener('click', () => {
    let userEmail = email.value;
    let userSenha = senha.value;

    if ( !userEmail || !userSenha) {
        alert("os campos de email e senha devem ser preenchidos")
    }
      autenticar(userEmail,userSenha)
});

function autenticar(email,senha) {
    const urlBase = `http://localhost:3400`;

    fetch(`${urlBase}/login`, {
     method:'POST',
     headers:{
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({email, senha})
    })
    .then(response => response = response.json())
    .then(response => {
 
        if(!!response.mensagem){
         alert(response.mensagem);
         return;
 
        }else{
 
         
         salvarToken(response.token);
         salvarUsuario(response.usuario);
         
         window.open('clientes.html', '_self');
        }
     });
}

