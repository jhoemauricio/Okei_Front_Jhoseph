
//Url
var host = "https://api.okei.online/entrar";

var a;

 

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

          a : '{"identificador": "' + $("#inputEmailAddress").val() + '","senha": "' + $("#inputChoosePassword").val() + '"}',
            success: function (dados) {

              //converterá os dados em uma string antes de analisá-los
              dados = JSON.stringify(dados);

              dados = JSON.parse(dados);
              // console.log(dados.roles);
             // console.log(dados.roles);
             var array = dados.roles;


               Object.keys(array).forEach(function(key){
              // console.log(array[key].nome);

              // if(array[key].nome === "administrador"){

              //   //console.log(dados.nome+" é um "+array[key].nome);
               
              //   top.location.href = 'perfil-administrador.html';

              // }else if(array[key].nome === "captador"){
              //   top.location.href = '';

              // }

              switch(array[key].nome){

              
                case "administrador":
                
                 // alert('funcionou o case');
                // $("#teste").html($(array[key].nome));
               
                  top.location.href =   'perfil-administrador.html';
                  break;

                case "captador":
                  top.location.href = '';
                  break;
                
                case "treinando":
                  top.location.href = '';


              }
            
          });


                },

                complete: function(){
                  //esconde o loading
                  $("#loading").hide();
                  //torna visivel o painel de login
                  $("#painel-login").css('opacity','1.0');

                },
              
                contentType: "application/json",
                dataType: 'json',

        }).fail(function (jqXHR, errorThrown) {

                $erro = jqXHR.status;

                if ($erro === 401) {

                 $("#alerta").fadeIn("slow");
                

                 
                 // $("#spinner").show();

                // $("#btn2").click(function () {
               // swal("Ops!", "Email ou Senha incorretos");
                // });

                } else if($erro === 404){

                  top.location.href = 'pagina404.html';

                }

            });

      
          
  });

});


// registerForm.addEventListener("submit",function(e){
//   e.preventDefault();

//   console.log(this.elements);

 



  


// });





  // function login() {

      // $.ajax({

      //   type: 'POST',
      //   url: host,
      //   data: '{"identificador": "' + $("#inputEmailAddress").val() + '","senha": "' + $("#inputChoosePassword").val() + '"}',

      //   success: function (msg) {

      //     // alert('BEM VINDO' + msg.nome);
      //     // swal(":)","Bem Vindo");
      //     // top.location.href = 'painel.html';


      //     swal({
      //       title: "Bem Vindo! :)",
      //       icon: "success",
      //       text: "",
        
      //     }).then((value) =>{
      //       top.location.href = 'perfil.html';
      //     });   
      //   },

      //   contentType: "application/json",
      //   dataType: 'json',

      // }).fail(function (jqXHR, errorThrown) {

      //   $erro = jqXHR.status;

      //   if ($erro === 401) {

      //    // $("#btn2").click(function () {
      //       swal("Ops!", "Email ou Senha incorretos");
      //    // });

      //   }

      // });

//   }


