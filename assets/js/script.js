const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');

});
function verificarCadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    

      var re = /\S+@\S+\.\S+/;
      var teste = re.test(email);

    if (nome === '' || email === '' || senha === '') {
      alert("Coloque as informações necessárias.");
    } else if (teste === true) {
      alert("Registrado com sucesso!");
    } else if(teste === false) {
      alert("Insira um email válido.");
    }
  }