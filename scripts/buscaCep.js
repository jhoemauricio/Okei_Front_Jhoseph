function consultaCep() {

    //Url consulta de Cep
    var hostCep = "https://api.okei.online/enderecos";

    cep = $("#cep").val();

    //País do user
    var pais = localStorage.getItem("pais");

    if(pais == "BRA"){

        pais = "BR";



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
                    // funcao de loading
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
    
    if(pais == "PT"){


        var dados_consulta_cep = '{"pais": "' + pais + '","cdg_postal": "' + cep + '"}';


        $.ajax({
            url: hostCep,
            type: 'POST',
    
            xhrFields: {
    
                withCredentials: true
    
            },
    
            data: dados_consulta_cep,
            success: function (dados) {
    
                // console.log(dados);

                var d = JSON.stringify(dados);

                console.log(d);
    
                // if (dados === "O CEP informado não é válido") {
                //     //funcao de loading
                //     loadingCep();
    
               
                  
                //     document.getElementById("endereco").value = '';
                //     document.getElementById("bairro").value = '';
                //     document.getElementById("cidade").value = '';
                //     document.getElementById("uf").value = '';

    
                // } else {


                //    Object.keys(dados).forEach(function(){
                    
                //     console.log(dados[0].Concelho);
                //    });
                    
                   









                    // //funcao de loading
                    // loadingCep();
                  
                    // localStorage.setItem("morada", dados.Morada);
                    // localStorage.setItem("concelho", dados.Concelho);
                    // localStorage.setItem("distrito", dados.Distrito);
                    // localStorage.setItem("freguesia", dados.Freguesia);
                    // localStorage.setItem("localidade", dados.Localidade);
    
                    // //Resultado de consulta ao Cep
                    // document.getElementById("endereco").value = localStorage.getItem("morada");
                    // document.getElementById("uf").value = localStorage.getItem("concelho");
                    // document.getElementById("cidade").value = localStorage.getItem("distrito");
                    // document.getElementById("bairro").value = localStorage.getItem("freguesia");
                    // document.getElementById("complemento").value = localStorage.getItem("localidade");
                
                    // console.log(dados.Freguesia);
                


    
                }
    
            // },
    
        }).fail(function (jqXHR, errorThrown) {
    
            console.log(jqXHR.status);
    
        });
    

    
    
    
    
    }


}


