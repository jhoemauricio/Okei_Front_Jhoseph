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
          
            console.log(dados);
            
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