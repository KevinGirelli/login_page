
window.onload = () => {
	const formulario = document.querySelector('form')

	formulario.addEventListener("submit", event =>{
		event.preventDefault();

      const name = document.getElementById("nameInput").value
      const logar = document.getElementById("userInput").value
      const password = document.getElementById("passwordInput").value
	
			const dadosLogin = {
          nome: name,
          login: logar,
          senha: password
      }

	fetch("http://localhost:8080/api/cadastro",{
		method: 'POST',
		headers: new Headers({'content-type': 'application/json'},"Access-Control-Allow-Origin: http://localhost:8080"),
      "Access-Control-Allow-Methods": "GET, POST, PUT",
      "Access-Control-Allow-Headers": "Content-Type",
			body: JSON.stringify(dadosLogin)
	}).then(response =>{
    if(response.status = 201){
      Swal.fire({
      title: "Sucesso",
      text: "Usúario cadastrado com sucesso.",
      icon: "success"
    }); 
    }
  })
	})
}
