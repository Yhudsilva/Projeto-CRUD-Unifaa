let email = document.getElementById('email');
let senha = document.getElementById('senha');
let button = document.getElementById('btn-login');

button.addEventListener('click', () => {
    let userEmail = email.value;
    let userSenha = senha.value;

    if ( !userEmail || !userSenha) {
        swal("Os campos de E-mail e senha devem ser preenchidos!","", "info");
        return
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

       swal((response.mensagem),"", "error");
        
         return;
 
        }else{
 
         
         salvarToken(response.token);
         salvarUsuario(response.usuario);
         
         window.open('clientes.html', '_self');
        }
     });
}

