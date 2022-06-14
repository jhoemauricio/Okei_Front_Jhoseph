function consultaCep() {

    //Url consulta de Cep
    var hostCep = "https://api.okei.online/enderecos";

    cep = $("#cep").val();

    //País do user
    var pais = localStorage.getItem("pais");

    var dados_consulta_cep = '{"pais": "' + pais + '","cdg_postal": "' + cep + '"}';


    $.ajax({
        url: hostCep,
        type: 'POST',

        xhrFields: {

            withCredentials: true

        },

        data: dados_consulta_cep,
        success: function (dados) {

            console.log(dados);

            if (dados === "O CEP informado não é válido") {
                //funcao de loading
                loadingCep();

                setTimeout(function() {

                    cepInvalido();

                }, 2500);

                document.getElementById("endereco").value = '';
                document.getElementById("bairro").value = '';
                document.getElementById("cidade").value = '';
                document.getElementById("uf").value = '';

            } else {
                //funcao de loading
                loadingCep();
                //tempo para exibir a mensagem de cepValido
                setTimeout(function() {

                    cepValido();

                }, 2500);

              

                localStorage.setItem("endereco", dados.Logradouro);
                localStorage.setItem("bairro", dados.Bairro);
                localStorage.setItem("cidade", dados.Localidade);
                localStorage.setItem("uf", dados.UF);

                //Resultado de consulta ao Cep
                document.getElementById("endereco").value = localStorage.getItem("endereco");
                document.getElementById("bairro").value = localStorage.getItem("bairro");
                document.getElementById("cidade").value = localStorage.getItem("cidade");
                document.getElementById("uf").value = localStorage.getItem("uf");

            }

        },

    }).fail(function (jqXHR, errorThrown) {

        console.log(jqXHR.status);

    });


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

    //carrega o cep
    function loadingCep(){

        //texto e tipo da animação
        $("#body").loadingModal({ text: 'Buscando Cep...', animation: 'chasingDots' });

        setTimeout(function() {
            //destroy o loading após 2500 milisegundos
            $("#body").loadingModal('destroy');
            
        }, 2500);

    }

