

var hostEditar = "https://api.okei.online/users/";



function update() {

    //validacao para cep vazio 
    if(($("#cep").val() == '') || ($("#cep").val() == null) ){
        //funcao de cepObrigatorio
        cepObrigatorio();

    }else{

        var user_id = localStorage.getItem("user_id");

        img = localStorage.getItem("imgBase64");
    
        var dados = {
    
            img_perfil: img,
    
            endereco: {
    
                cdg_postal: $("#cep").val(),
                morada: $("#endereco").val(),
                numero_porta: $("#numero").val(),
    
            }
    
        }
    
        var dados_update = JSON.stringify(dados);
    
    
        $.ajax({
    
            url: hostEditar + user_id,
            type: 'PUT',
            xhrFields: {
    
                withCredentials: true
            },
    
            dataType: 'json',
    
            data: dados_update,
    
            success: function (dados) {
    
                console.log(dados.img_perfil);
                //seta o localStarage com o novo valor de img_perfil que substituirá  o get nomeImagem no script "IMAGEM"
                localStorage.setItem("img_perfil", dados.img_perfil);
                
                //loading de atualizacao
                loadingUpdate();
    
                //duracao da mensagm de sucesso
                setTimeout(function() {
                    //funcao de atualziado com sucesso
                    updateSuccess();
                    
                }, 2500);
    
            },
            contentType: "application/json"
    
    
        }).fail(function (jqXHR, errorThrown) {
    
            console.log(jqXHR.status);
    
        });


    }


  
}

