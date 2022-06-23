
hostEnviaCod = "https://api.okei.online/enviar_codigo_v2";

function enviarCodigo(){

    var tel = "+55"+$("#fone_contato").val();
    tel = JSON.stringify(tel);

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