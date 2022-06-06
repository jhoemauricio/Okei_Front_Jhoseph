function carregar(pagina){

    $("#perfil-usuario-conteudo").hide();

      $("#mostrar-carrossel").fadeIn('slow');

     $("#mostrar-carrossel").load(pagina);


    var n = 1;
    var qtd = 1100;

  
    $.ajax({

        url: "https://api.okei.online/treinamentos?pagina="+n+"&qtdpag="+qtd+"",
        type: 'GET',
        
        xhrFields: {
            withCredentials: true
          },
         
        success: function(){

            console.log('funcionouuu');



          

        },

        contentType: "application/json",
        dataType: 'json',


    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });


 

  }
   