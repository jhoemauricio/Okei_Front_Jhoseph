var hostEditar = "https://api.okei.online/users/";


function update(){

  var user_id = localStorage.getItem("user_id");


  var dados = {

                endereco:{

                    cdg_postal: $("#cep").val(),
                    morada: $("#endereco").val(),
                    numero_porta: $("#numero").val(),
                    
                }   
     
   }

  var dados_update = JSON.stringify(dados);



    $.ajax({

        url: hostEditar+user_id,
        type: 'PUT',
        xhrFields: {
      
            withCredentials: true
         },
         dataType: 'json',

         data: dados_update,

         success: function(dados){

          console.log(dados);

        },
        contentType: "application/json"

      


    }).fail(function(jqXHR,errorThrown){
        
        console.log(jqXHR.status);

    });
}
