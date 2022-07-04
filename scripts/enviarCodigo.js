
hostEnviaCod = "https://api.okei.online/enviar_codigo_v2";

function enviarCodigo(){

    telemovel = {
        identificador : $("#phone").val()
    }

    tel = JSON.stringify(telemovel);

    $.ajax({

        url : hostEnviaCod,
        type : 'POST',
        
        xhrFields : {
            withCredentials : true
          },

        data: tel,

        success: function(dados){
            console.log(dados);
        

        }

    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });
}