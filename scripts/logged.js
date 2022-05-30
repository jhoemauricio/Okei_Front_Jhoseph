//URL
var host = "https://api.okei.online/current_user"; 


$(document).ready(function(){


    $.ajax({
       
        url: host,
        type: 'GET',
       //usado para solicitacao
        xhrFields: {
            //inclua cookies e cabeçalhos de autenticação 
            withCredentials: true
         },
   
        success: function(dados){
       
            dados = JSON.stringify(dados);

            dados = JSON.parse(dados);

            Object.keys(dados).forEach(function(key){

                // console.log(key +" = "+dados[key]);

                if(key === 'id'){

                  localStorage.setItem("user_id",dados[key]);
                  
                //   console.log(key +" = "+dados[key]);


                }
        

            });
  

        
        },
        
        contentType: "application/json",
        dataType: 'json',

    }).fail(function (jqXHR, errorThrown) {

        $erro = jqXHR.status;

        if ($erro === 401) {
             //console.log($erro);
             $("#formulario-dados")[0].reset();
            top.location.href = 'login.html';
      
        }
    }
)});