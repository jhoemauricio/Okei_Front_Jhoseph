
$(document).ready(function () {
    
    // -------------------Meus dados usuário------------------

    document.getElementById("tipoUser").innerText = localStorage.getItem("tipoUser");
    //innerText obtem o conteudo da localStorage e Atribui no getElementById
    document.getElementById("nomePerfil").innerText = localStorage.getItem("nomePerfil");
    //value obtem o conteudo da localStorage e Atribui no getElementById
    document.getElementById("nomeUsuario").value = localStorage.getItem("nome");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("nascimento").value = localStorage.getItem("nascimento");
    document.getElementById("nif").value = localStorage.getItem("nif");
    document.getElementById("pais").value = localStorage.getItem("pais");

    // ---------------------------- Endereco------------------------
    
    document.getElementById("cep").value = localStorage.getItem("cdg_postal");
    document.getElementById("endereco").value = localStorage.getItem("endereco");
    document.getElementById("numero").value = localStorage.getItem("numero");



    //percorre o select
    $("#selecioneSexo option").each(function () {
        
      // compara o valor do option com o que é retornado do localStorage
        if (this.value == localStorage.getItem("sexo")) {
          $(this).attr('selected', true);

        }


    });

    
    //-----------Endereco com bairro e complemento

    hostEnd = "https://api.okei.online/enderecos";
        
        //getItem de Endereco Usuario
        pais = localStorage.getItem("pais");
        cdg_postal = localStorage.getItem("cdg_postal");


        enderecoUser = '{"pais":"'+pais+'","cdg_postal":"'+cdg_postal+'"}';

            $.ajax({

              type: 'POST',
              url: hostEnd,
          
              xhrFields: {
                withCredentials: true
              },
          
              data : enderecoUser,
          
              success: function(dados){

              Object.keys(dados).forEach(function(){

                  //atribui ao getElementById de perfilUsuario
                  document.getElementById("bairro").value = dados.Bairro;
                  document.getElementById("cidade").value = dados.Localidade;
                  document.getElementById("uf").value = dados.UF;

              })

              
        
              }
          
            }).fail(function(jqXHR, errorThrown){
          
              console.log(jqXHR.status);
          
            });


});






