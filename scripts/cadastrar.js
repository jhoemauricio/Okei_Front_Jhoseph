var hostTreinando = "https://api.okei.online/treinando";

$(document).ready(function(){

   
    var dados = {

        nome : $("#nome").val(),
        email : $("#data_nascimento").val(),
        sexo : $("#sexo").val(),
        pais : localStorage.getItem("pais"),
        data_nascimento : $("#data_nascimento").val(),
        nif_cpf: $("#cpf").val(),
        rg_passaporte: $("#rg_passaporte").val(),
        validade : $("#validade").val(),
        fone_contato : $("#fone_contato").val(),
        email : $("#email").val(),
        senha : $("#senha").val(),
        conf_senha: $("#conf_senha").val(),
      
        endereco = {
            andar: "",
            cdg_postal: "69086020",
            concelho: "",
            distrito: "AM",
            freguesia: "São José Operário",
            lado: "",
            localidade: "Manaus",
            morada: "Rua Rio Napuiau",
            numero_porta: "325"
        },

    }

    var contato = {
        codigo : ,
        numero_telefone: 
    }

 

    dados = JSON.stringify(dados);

    $.ajax({

        url: hostTreinando,
        type: 'POST',
        xhrFields: {

                withCredentials: true

                },

        data: dados,

        success: function(dados){

            console.log(dados);



        },
        

    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });

});