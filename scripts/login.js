
//URL
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
                  xhrFields: {withCredentials: true},
                  data: '{"identificador": "' + $("#inputEmailAddress").val() + '","senha": "' + $("#inputChoosePassword").val() + '"}',
                  

            
                  success: function (dados) {

              
                    top.location.href =  'perfil-administrador.html';
              
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



