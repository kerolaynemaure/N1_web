const login = document.getElementById("login");
const senha = document.getElementById("senha");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const userLogin = login.value;
    const userSenha = senha.value;

    
    const usuarios = ["marcelo"];
    const senhas = ["123"];

    if (usuarios.includes(userLogin) && senhas[usuarios.indexOf(userLogin)] === userSenha) {
        alert("Login realizado com sucesso!");
        // Redirecionar ou carregar próxima página
        window.location.href = "sushitec-main.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});
