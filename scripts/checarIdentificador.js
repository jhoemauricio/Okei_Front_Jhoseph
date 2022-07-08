function identificador(){

    if(($("#phone").val() != '')){

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
            numeroOuEmailJaCadastrado();

        },


    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });
}


function numeroOuEmailJaCadastrado(){

    if($("#phone").val() != ''){

            Lobibox.notify('warning', {
            pauseDelayOnHover: true,
            icon: '',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            size: 'mini',
            msg: 'Numero já cadastrado'
    
        });

    }

    if($("#email").val() != ''){

        Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        icon: '',
        continueDelayOnInactiveTab: false,
        position: 'bottom right',
        size: 'mini',
        msg: 'Email já cadastrado'
            
        });
    }
}
