
$(document).ready(function () {
  document.getElementById("tipoUser").innerText = localStorage.getItem("tipoUser");
  //innerText obtem o conteudo da localStorage e Atribui no getElementById
  document.getElementById("nomePerfil").innerText = localStorage.getItem("nomePerfil");
  //value obtem o conteudo da localStorage e Atribui no getElementById
  document.getElementById("nomeUsuario").value = localStorage.getItem("nome");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("nascimento").value = localStorage.getItem("nascimento");
  document.getElementById("nif").value = localStorage.getItem("nif");
  document.getElementById("pais").value = localStorage.getItem("pais");

});






