function identificador(){

    //Verifica se telefone já esta cadastrado
    if(($("#phone").val() != '')){

       var ident = $("#phone").val();

       dados = {

        identificador : ident

    }

    dados = JSON.stringify(dados);

    $.ajax({

        url: "https://api.okei.online/checar_identificador",
        type: 'POST',
        data: dados,

        // caso exista um telefone ja cadastrado irá chamar a funcao de mensagem
        success: function(dados){
           
            console.log(dados);
            telJaCadastrado();

        },


    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });
    
    
    }

    //Verifica se email já esta cadastrado
    if($("#email").val() != ''){

        var ident = $("#email").val();

            
       dados = {

        identificador : ident

    }

    dados = JSON.stringify(dados);

    $.ajax({

        url: "https://api.okei.online/checar_identificador",
        type: 'POST',
        data: dados,
        // Caso já exista um endereco de email cadastrado ira chamar a funcao de email já cadastrado
        success: function(dados){
           
            console.log(dados);
            emailJaCadastrado();

        },


    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });

    }

    
}

// Notificacao de email ou telefone ja cadastrado
function emailJaCadastrado(){

   if($("#email").val() != ""){

    identi = $("#email").val();
           
            Lobibox.notify('warning', {

                pauseDelayOnHover: true,
                icon: '',
                continueDelayOnInactiveTab: false,
                position: 'bottom right',
                size: 'mini',
                msg: 'O '+identi+' já possui cadastro'
        
            });
        }
    }

function telJaCadastrado(){

    if($("#phone").val() != ""){

        identi = $("#phone").val();

        Lobibox.notify('warning', {
            pauseDelayOnHover: true,
            icon: '',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            size: 'mini',
            msg: 'O '+identi+' já possui cadastro'
    
        });

    }

}