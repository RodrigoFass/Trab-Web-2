init()

function init(){
    document.getElementById("nome").addEventListener("keyup", proximo)
    document.getElementById("cpf").addEventListener("keyup", proximo)
    document.getElementById("email").addEventListener("keyup", proximo)
    document.getElementById("endereco").addEventListener("keyup", proximo)
    document.getElementById("senha").addEventListener("keyup", proximo) 
}

        function proximo() {
        var nome = document.getElementById("nome").value
        var cpf = document.getElementById("cpf").value
        var email = document.getElementById("email").value
        var endereco = document.getElementById("endereco").value
        var senha = document.getElementById("senha").value

        localStorage.setItem("nome", nome)
        localStorage.setItem("cpf", cpf)
        localStorage.setItem("email", email)
        localStorage.setItem("endereco", endereco)
        localStorage.setItem("senha", senha)
      }
    
      function validarEmail(){
        var email = document.querySelector('#email');
        var error = document.querySelector('#error-email');
        
        if(!email.checkValidity()){
          error.innerHTML = "Email invalido";  
        }
         
      }
      
      function redefinirMsg(){
        var error = document.querySelector('#error-email');
        if (error.innerHTML == "Email invalido"){
          error.innerHTML = "";
        }
      }