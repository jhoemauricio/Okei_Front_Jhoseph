var hostTreinando = "https://api.okei.online/treinando";

function cadastrar(){

    
   
    var dados = {

        nome : $("#nome").val(),
        email : $("#data_nascimento").val(),
        sexo : $("#sexo").val(),
        pais : localStorage.getItem("pais"),
        data_nascimento : $("#data_nascimento").val(),
        nif: $("#cpf").val(),
        rg_numero: $("#rg_passaporte").val(),
        validade : $("#validade").val(),
        email : $("#email").val(),
        senha : $("#senha").val(),
        conf_senha: $("#conf_senha").val(),
      
        endereco : {
          
            cdg_postal: $("#cep").val(),
            concelho: $("#uf").val(),
            distrito: $("#cidade").val(),
            freguesia: $("#bairro").val(),
            localidade: $("#complemento").val(),
            morada: $("#endereco").val(),
            numero_porta: $("#numero").val()
        },

        contato : {

            codigo : $("#codigo").val(),
            numero_telefone: $("#fone_contato").val()

        }
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
            alert('salvou');

        },
        

    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });

}