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
         
        success: function(data){

      
       
          Object.keys(data).forEach(function(item){

                localStorage.setItem("data",data[item]);

                localStorage.setItem("nomeTreinamento",data[item].nome);
                localStorage.setItem("valorTreinamento",data[item].valor);
                localStorage.setItem("descricaoTreinamento",data[item].descricao);
                localStorage.setItem("imagemTreinamento",data[item].imagem);
                
                //chama a função de imagem Treinamento
                imagemTreinamento();
          });

        },

        contentType: "application/json",
        dataType: 'json',


    }).fail(function(jqXHR, errorThrown){

        console.log(jqXHR.status);

    });


  }
   