
window.onload = () => {
    const formulario = document.querySelector('form')

	formulario.addEventListener("submit", event =>{
		event.preventDefault();

        const logar = document.getElementById("userInput").value
        const password = document.getElementById("passwordInput").value
	
        const dadosLogin = {
            nome: "",
            login: logar,
            senha: password
        }

		fetch("http://localhost:8080/api/login",{
			method: 'POST',
			headers: new Headers({'content-type': 'application/json'},"Access-Control-Allow-Origin: http://localhost:8080"),
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
			body: JSON.stringify(dadosLogin)
		}).then(response => response.json())
        .then(data => {
          if (data) {
            localStorage.setItem("nomeUsuario", data.nome)
            window.location.replace("../loadScreen/ld.html")
          } else {
            console.error("erro");
          }
        })
        .catch(error => {
          Swal.fire({
            title: "Erro",
            text: "Usúario não encontrado",
            icon: "error"
          }); 
        });
	})
}
