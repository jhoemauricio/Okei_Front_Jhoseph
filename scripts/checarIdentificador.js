function ident(){

    loadingAguarde();

    if($("#email").val() != ""){

    

        var identificador = $("#email").val();
    
                var dados = {

                identificador: identificador

                }

                dados = JSON.stringify(dados);

                $.ajax({
                url: "https://api.okei.online/checar_identificador",
                type: 'POST',
                data: dados,

                success: function(dados, jqXHR){
                    
                    resultEmail = true;
                    // console.log(jqXHR+' Email');
                    emailJaCadastrado();

                }


                }).fail(function(jqXHR, errorThrow){

                    resultEmail = false;
                     mostrarTab2();

                });
                        
    
    }

    if($("#phone").val() != ""){


        var identificador1 = $("#phone").val();
    
                var dados = {

                identificador: identificador1

                }

                dados = JSON.stringify(dados);

                $.ajax({
                url: "https://api.okei.online/checar_identificador",
                type: 'POST',
                data: dados,

                success: function(dados, jqXHR){

                     resultTel = true;
                    // console.log(jqXHR+' Telefone');
                    telJaCadastrado();
                    
                }


                }).fail(function(jqXHR, errorThrow){

                    resultTel = false;
                     mostrarTab2();

                });
            

    }


}

function mostrarTab2(){

    var valDataNasc = validarDataNasc();
    var valSen = validarSenha();
    var valCpf = validarCpf();

        if((resultTel != true) && (resultEmail != true) && (valDataNasc == true) && (valSen == true) && (valCpf == 'Cpf válido') && (localStorage.getItem("pais") == "BR")){

            var tab1 = document.querySelector('#tab1');
            var tab2 = document.querySelector('#tab2');
            tab1.style.display = 'none';
            tab2.style.display = 'block';

        }

        if((resultTel != true) && (resultEmail != true) && (valDataNasc == true) && (valSen == true) && (localStorage.getItem("pais") != "BR")){

            var tab1 = document.querySelector('#tab1');
            var tab2 = document.querySelector('#tab2');
            tab1.style.display = 'none';
            tab2.style.display = 'block';
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