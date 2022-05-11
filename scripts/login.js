
//Url
var host = "https://api.okei.online/entrar";


//O evento é disparado quando a pagina HTML é carregada 
$(document).ready(function(){

    //evento click atribuido ao botao com id enviar
    $("#enviar").click(function(e){

    //evita a ação padrão do evento
    e.preventDefault();

   //opacidade do painel de login
   $("#painel-login").css('opacity','0.6');
   //mostra o loading
   $("#loading").show();

 
        $.ajax({

            type: 'POST',
            url: host,
            data: '{"identificador": "' + $("#inputEmailAddress").val() + '","senha": "' + $("#inputChoosePassword").val() + '"}',
      
          success: function (dados) {

              //converterá os dados em uma string antes de analisá-los
              dados = JSON.stringify(dados);

              dados = JSON.parse(dados);
              // console.log(dados.roles);
            
             var array = dados.roles;

              //percorre o array
               Object.keys(array).forEach(function(key){

              // console.log(array[key].nome);

              switch(array[key].nome) {

              
                case "administrador":
                  
                  // console.log(dados);
              
                  nome = dados.nome;
                  //dois parametos o separador e limite de divisões
                  nome = nome.split(" ",2);

                  //converte para string
                  nomeNew = nome.toString();

                  //procura por regex virgula, substitui pelo espaço
                  nomeNew = nomeNew.replace(/,/g," ");

                  //console.log(nomeNew);
                  
                  //chave e o valor a ser setado
                  localStorage.setItem("tipoUser",array[key].nome);
                  localStorage.setItem("nomePerfil",nomeNew);
                  localStorage.setItem("nome", dados.nome);
                  localStorage.setItem("email", dados.email);
                  localStorage.setItem("nascimento", dados.data_nascimento);
                  localStorage.setItem("nif", dados.nif);
                  localStorage.setItem("pais", dados.pais);
                  localStorage.setItem("sexo",dados.sexo);
                
                
                
                  top.location.href =  "perfil-administrador.html";

                  break;

              }
            
          });

                },
                //chamada após a requisição terminar
                complete: function(){
                  //esconde o loading
                  $("#loading").hide();
                  //torna visivel o painel de login
                  $("#painel-login").css('opacity','1.0');

                },
              
                contentType: "application/json",
                dataType: 'json',

        }).fail(function (jqXHR, errorThrown) {

                //armazena o valor do erro
                $erro = jqXHR.status;

                if ($erro === 401) {
                  
                  //exibe o erro de sennha ou email
                 $("#alerta").fadeIn("slow");
              
                } else if($erro === 404){

                  top.location.href = 'pagina404.html';

                }else if($erro === 500){

                  top.location.href = 'pagina500.html';

                }

            });

      
          
  });

});



