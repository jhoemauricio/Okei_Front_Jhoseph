//Url da imagem de perfil
var hostImg = "https://okei.online/uploads/img-perfil/";

$(document).ready(function (){

    //nome da imagem
    nome_img = localStorage.getItem("img_perfil");

    //id de img perfil do html
    const img_perfil = document.getElementById("img_perfil");
    
    //atribui o caminho com o nome da url +nome do arquivo jpeg
    img_perfil.src = hostImg+nome_img;

    //img menu perfil
    const img_perfil_menu = document.getElementById("img_perfil_menu");
    //atribui menu img perfil
    img_perfil_menu.src = hostImg+nome_img;


});