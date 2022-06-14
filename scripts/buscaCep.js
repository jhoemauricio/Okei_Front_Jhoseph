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


