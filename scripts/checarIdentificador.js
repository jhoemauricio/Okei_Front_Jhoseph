function identificador(){



    if($("#phone").val() != ''){

       var ident = $("#phone").val();

    }

    if($("#email").val() != ''){

        var ident = $("#email").val();

    }

    dados = {

        identificador : ident

    }

    dados = JSON.stringify(dados);

    $.ajax({
        url: "https://api.okei.online/checar_identificador",
        type: 'POST',
        data: dados,

        success: function(dados){
            console.log(dados);

        },


    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });
}
