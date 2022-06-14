var hostEditar = "https://api.okei.online/users/";



function update() {



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

                updateSuccess();
                
            }, 2500);

        },
        contentType: "application/json"


    }).fail(function (jqXHR, errorThrown) {

        console.log(jqXHR.status);

    });
}


    //loading de atualizacao
    function loadingUpdate() {

        $("#body").loadingModal({ text: 'Atualizando seus dados...', animation: 'chasingDots' });
        setTimeout(function () {

            $("#body").loadingModal('destroy');

        }, 2500);


    }

    //mensagem de sucesso de atualização
    function updateSuccess(){
        Lobibox.notify('success', {
            pauseDelayOnHover: true,
            size: 'mini',
            icon: 'fadeIn animated bx bx-wink-smile',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            msg: 'Atualizado com sucesso!'
        });
    }

