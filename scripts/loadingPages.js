  
//------------------------------Loading Login de Usuario ---------------------------

    //loading de Login de usuario
    function loadingLogin(){

        $("#body-login").loadingModal({ text: 'Bem vindo ao Okei', animation: 'wanderingCubes' });

    }


 //-----------------------------Loading Perfil de Usuario ---------------------------
  
    //loading de atualizacao de dados usuario
    function loadingUpdate() {

        $("#body").loadingModal({ text: 'Atualizando seus dados...', animation: 'chasingDots' });
        setTimeout(function () {

            $("#body").loadingModal('destroy');

        }, 2500);


    }

    //mensagem de sucesso atualizacao dados do usuario
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


    //loading de cep
    function loadingCep(){

            //texto e tipo da animação
            $("#body").loadingModal({ text: 'Estamos buscando o Cep...', animation: 'chasingDots' });
    
            setTimeout(function() {
                //destroy o loading após 2500 milisegundos
                $("#body").loadingModal('destroy');
                
            }, 2500);
    
        }
    
    //mensagem de cep inválido
    function cepInvalido() {

        Lobibox.notify('warning', {
            pauseDelayOnHover: true,
            icon: 'lni lni-map',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            size: 'mini',
            msg: 'O Cep informado não é válido...'

        });
    }

    //mensagem de cep encontrado
    function cepValido() {
        Lobibox.notify('success', {
            pauseDelayOnHover: true,
            size: 'mini',
            icon: 'fadeIn animated bx bx-map',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            msg: 'Cep encontrado...'
        });
    }

    //mensagem de obrigatorio cep do usuario
    function cepObrigatorio() {
        Lobibox.notify('error', {
            pauseDelayOnHover: true,
            size: 'mini',
            icon: 'fadeIn animated bx bx-map-alt',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            msg: 'Cep nao pode ser vazio'
        });
    }

