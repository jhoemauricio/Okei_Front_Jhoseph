
//URL
var host = "https://api.okei.online/entrar";



//O evento é disparado quando a pagina HTML é carregada 
$(document).ready(function(){


            //Retorna os dados do usuário
            function mostrarDados(dados) {

                    //converterá os dados em uma string antes de analisá-los
                    dados = JSON.stringify(dados);

                    dados = JSON.parse(dados);
                    // console.log(dados.roles);

                    var array = dados.roles;

                    //percorre o array
                    Object.keys(array).forEach(function(key){

                    // console.log(array[key].nome);

                    // switch(array[key].nome) {

                    
                    //  case "administrador":
                        
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

                        top.location.href = 'perfilUsuario.html';
                                          
                      // break;

                    //}

                  });  



            }
                             
        
            //evento click do botao com id "enviar"
            $("#enviar").click(function(e){

                    //evita a ação padrão do evento
                    e.preventDefault();
            
                    //opacidade do painel de login
                    //  $("#painel-login").css('opacity','0.6');
                    //mostra o loading
                    //  $("#loading").show();
              
                    email_tel = $("#inputEmailAddress").val();
                    senha = $("#inputChoosePassword").val();
            
                  
                    str = email_tel.toString();

                    //regex
                    $simbolo = /@/;
                  
                    email = str.match($simbolo);
                  
                    //se tiver @
                    if(email){
                    
                      $("#senha").fadeIn("slow");

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
                                
                                //retorna os dados do usuario
                                mostrarDados(dados);
                                
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
                  
                    }
                    

                    if(!email) {


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
                                              //retorna os dados do usuario
                                              mostrarDados(dados);

                                          }


                                      });

                                    });      

                                  }

                            });
                    
                          
                        }
                      
                  }).fail(function(jqXHR, errorThrown){

                    // // console.log(jqXHR.status);
                    // var host2 = "https://api.okei.online/enviar_codigo_v2";

                    // $.ajax({
                    //   type: 'POST',
                    //   url : host2,
                    //   xhrFields :{
                    //     withCredentials: true
                    //   },

                    //   data: dados_user,

                    //   success: function (dados){

                    //     console.log("Codigo Enviado com Sucesso");

                    //   }

                    // });

                  });



                  // var host = "https://api.okei.online//enviar_codigo_v2";

                  // $.ajax({
                  //   type :  'POST',
                  //   url : host ,
                  //   xhrFields : {
                  //     withCredentials : true
                  //   },
                  //   data: dados_user,

                  //   success: function(){
                  //     console.log('enviado com sucesso');
                  //   }

                  // }).fail(function (jqXHR, errorThrown){

                  //     console.log(jqXHR.status);
                  // });
              
                }
                

          
       });

});



