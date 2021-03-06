
//URL
var host = "https://api.okei.online/entrar";

//O evento é disparado quando a pagina HTML é carregada 
$(document).ready(function(){

          // //carrega arquivo json
          // fetch("scripts/CountryCodes.json").then(function(response){


          //       return response.json();


          // }).then(function(data){
            
          //   Object.keys(data).forEach(function(key){
          
          //    // console.log(data[key].dial_code);
          //   //  console.log("Cod: "+data[key].code);

          //     var select = document.getElementById("lista");
          //     //cria elemento
          //     var option = document.createElement("option");
          //     //adiciona a option
          //     option.innerText = data[key].dial_code;
          
          //     select.add(option);
         


          //   });

          // });
         
           
            //evento click do botao com id "entrar"
            $("#entrar").click(function(e){

           
                    //evita a ação padrão do evento
                    e.preventDefault();
                   
                    
                    //esconde o botao entrar
                    $("#entrar").hide();
              
                    email_tel = $("#inputEmailAddress").val();
                    senha = $("#inputChoosePassword").val();

          
                  //verifica se campo email_tel esta vazio
                    if(email_tel === ''){
                            //exibe o alert
                            $("#alerta_email_tel").fadeIn();

                                  //define o tempo de exibicao do alert
                                  setTimeout(function(){
                                    
                                  $("#alerta_email_tel").fadeOut('slow');

                                  },1500);

                            //exibe o botao entrar        
                            $("#entrar").show();

                    }

                    //converete para string
                    str = email_tel.toString();
                    //regex para validar email
                    simbolo = /^[\w._-]+@[\w_.-]+\.[\w]+/;
                    //regex para validar numero de telefone
                    numero = /^[0-9]+$/;

                    //procura pelo @
                    email = str.match(simbolo);
                    //procura por digitos
                    numero = str.match(numero);

                                     
                    //se tiver no formato de e-mail
                    if(email){

                      //após ser preenchido o campo email este desabilita
                      document.getElementById('inputEmailAddress').disabled  = true;

                      //mostra a div acessar com o Novo Botao Entrar se for Email o modo de entrada
                      $("#acessar-div").show();
                      //exibe o campo senha
                      $("#senha").fadeIn("slow");

                      $("#acessar").click(function(e){

                        e.preventDefault();

                        senha = $("#inputChoosePassword").val();

                        //Regex Verifica senha
                        verificaSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w]).\S{7,}$/;

                        senhaVerificada = senha.match(verificaSenha);

                        //valida senha                    
                        if(senha === ''){

                          $("#senha_validate").fadeIn();
                       
                          setTimeout(function(){

                            $("#senha_validate").fadeOut('slow');

                          },1500);

                        }else if((senha.length < 8) || (!senhaVerificada)){

                          $("#alerta2").fadeIn();

                          setTimeout(function(){

                            $("#alerta2").fadeOut('slow');

                          },1500);

                        }
                        
                        
                      //string de dados
                      dados_user = '{"identificador": "' + email_tel + '","senha": "' + senha + '"}';

                      $.ajax({

                          type: 'POST',
                          url: host,

                          xhrFields: {
                            withCredentials: true
                          },

                          data : dados_user,

                          success: function (dados) {

                              //loading executado quando usuario fazer login
                              loadingLogin();
                              //tempo para redirecionar para a pagina de perfil de usuario pela funcao mostrarDados
                              setTimeout(function(){

                                mostrarDados(dados);
                                
                              }, 2500);
                            
                            },
                            
                              contentType: "application/json",
                              dataType: 'json',

                      }).fail(function (jqXHR, errorThrown) {

                      //armazena o valor do erro
                      $erro = jqXHR.status;

                      if ($erro === 401) {

                        //exibe o erro de senha ou email
                        $("#alerta").fadeIn("slow");

                        setTimeout(function (){

                          $("#alerta").fadeOut('slow');
          

                        },1500);
              

                      } else if($erro === 404){

                        top.location.href = 'pagina404.html';

                      }else if($erro === 500){

                        top.location.href = 'pagina500.html';

                      }

                      });  


                      });
                  
                    }
                    
                    //se for dígito
                    if(numero) {
                      //mostra DDI de países
                      $("#pais-ddi").fadeIn('slow');

                            //mostra div ddi com o botao de enviar
                            $("#ddi-div").show();


                    document.getElementById('inputEmailAddress').disabled = true;

                    
                    //ao clicar no botao entrar ddi 
                    $("#entrar_ddi").click(function(e){
         
                      e.preventDefault();

                      var  val =  $("#select").val();
                      novo = val.toString();

                      //procura numero maiusculo e minusculo e espaco
                      ddi = novo.replace(/[a-zA-z]+\s+/,'');

                      console.log(ddi);
                      //esconde div #pais-ddi
                       $("#pais-ddi").fadeOut('slow');

                      email_tel = ddi+email_tel;

                      dados_user = '{"identificador": "'+ email_tel + '"}';

                      //URL rota para checar se existe um identificador
                      var host1 = "https://api.okei.online/checar_identificador";

                      $.ajax({

                        type : 'POST',
                        url : host1,

                        xhrFields : {
                          withCredentials : true
                        },

                        data: dados_user,
                        
                        //Em caso de sucesso
                        success: function(dados){
                            
                            //Rota para enviar codigo
                            var host2 = "https://api.okei.online/enviar_codigo_v2";

                            $.ajax({

                              type : 'POST',
                              url: host2,

                              xhrFields: {
                                withCredentials: true
                              },

                              data : dados_user,

                              success: function(){

                                //mensagem de envio de codigo
                                $("#msgEnv").fadeIn('slow');

                                setTimeout(function(){

                                  $("#msgEnv").fadeOut('slow');

                                },1500);

                                  $("#entrar_ddi").hide();

                                  //esconde o botao entrar
                                    $("#btn-entrar").hide();

                                    //mostra o campo codigo
                                    $("#codigo").fadeIn('slow');
                                
                                    //mostra botao de confirmar no lugar do botao entrar
                                    $("#btn-confirmar").show();

                                    //evento click do botao confirmar codigo
                                    $("#btn-confirmar").click(function (e){

                                      e.preventDefault();

                                      email_tel = $("#inputEmailAddress").val(); 
                                      email_tel = ddi+email_tel;

                                      //Numero de telefone + codigo de acesso  
                                      dados_user_cod = '{"identificador": "' + email_tel + '","codigo": "' + $("#codigo_acesso").val() + '"}';
                
                                      $.ajax({

                                        type:  'POST',
                                        url: host,
                                        xhrFields : {
                                          withCredentials : true
                                        },

                                        data: dados_user_cod,

                                        success: function (dados){
                                          

                                            //loading executado quando usuario fazer login
                                            loadingLogin();

                                            //tempo para redirecionar para a pagina de perfil de usuario
                                            setTimeout(function(){

                                            mostrarDados(dados);
                                              
                                            }, 2500);

                                          }


                                      }).fail(function(jqXHR,errorThrown){

                                        console.log(jqXHR.status);
                                        
                                        //exibe mensagem de codigo invalido
                                        $("#codigo_invalido").fadeIn('slow');

                                        setTimeout(function(){
                                          //esconde mensagem de codigo invalido
                                          $("#codigo_invalido").fadeOut('slow');

                                        },1500);

                                      });

                                    });      

                                  }

                            });
                    
                          
                        }
                      
                  }).fail(function(jqXHR, errorThrown){


                  });


                });

              
              } 
                
            
                if((!numero) && (!email) && (email_tel !='' ) ){

                 
                  $("#numero_email").fadeIn('slow');

                  setTimeout(function(){

                    $("#numero_email").fadeOut('slow');

                  },1500);

                  $("#entrar").show();



              }
          
       });


});



