
function consultarCep() {

       //Url consulta de Cep
       var hostCep = "https://api.okei.online/enderecos";

       cep = $("#cep").val();

      pais =  localStorage.getItem("pais");
   

    if(pais == "BR"){

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
                    loadingCepFormCadastro();

                    Lobibox.notify('warning', {
                        pauseDelayOnHover: true,
                        icon: '',
                        continueDelayOnInactiveTab: false,
                        position: 'bottom right',
                        size: 'mini',
                        msg: 'O CEP informado não é válido'
                
                    });
    
                    // setTimeout(function() {
    
                    //     cepInvalido();
    
                    // }, 2500);
    
                    document.getElementById("endereco").value = '';
                    document.getElementById("bairro").value = '';
                    document.getElementById("cidade").value = '';
                    document.getElementById("uf").value = '';
    
                } else {
                    // funcao de loading
                    loadingCepFormCadastro();
                    //tempo para exibir a mensagem de cepValido
                    // setTimeout(function() {
    
                    //     cepValido();
    
                    // }, 2500);
    
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

            loadingCepFormCadastro();
    
            console.log(jqXHR.status);
            Lobibox.notify('warning', {
                pauseDelayOnHover: true,
                icon: '',
                continueDelayOnInactiveTab: false,
                position: 'bottom right',
                size: 'mini',
                msg: 'O CEP informado não é válido'
        
            });
    
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
              
                console.log(dados);

                loadingCepFormCadastro();

                for(i =0; i< dados.length; i++){
                
                    localStorage.setItem("morada", dados[i].Morada);
                    localStorage.setItem("concelho", dados[i].Concelho);
                    localStorage.setItem("distrito", dados[i].Distrito);
                    localStorage.setItem("freguesia", dados[i].Freguesia);
                    localStorage.setItem("localidade", dados[i].Localidade);
                    
                }
                    document.getElementById("endereco").value = localStorage.getItem("morada");
                    document.getElementById("uf").value = localStorage.getItem("concelho");
                    document.getElementById("cidade").value = localStorage.getItem("distrito");
                    document.getElementById("bairro").value = localStorage.getItem("freguesia");
                    document.getElementById("complemento").value = localStorage.getItem("localidade");

                },
    
        }).fail(function (jqXHR, errorThrown) {
    
            console.log(jqXHR.status);
            loadingCepFormCadastro();
            Lobibox.notify('warning', {
                pauseDelayOnHover: true,
                icon: '',
                continueDelayOnInactiveTab: false,
                position: 'bottom right',
                size: 'mini',
                msg: 'O Codigo Postal informado não é válido'
        
            });
    
        });   
    
    }
   
}

function loadingCepFormCadastro(){

    //texto e tipo da animação
    $("#body-form-cadastro").loadingModal({ text: 'Estamos buscando o Cep...', animation: 'chasingDots' });

    setTimeout(function() {
        //destroy o loading após 2500 milisegundos
        $("#body-form-cadastro").loadingModal('destroy');
        
    }, 1700);

}


