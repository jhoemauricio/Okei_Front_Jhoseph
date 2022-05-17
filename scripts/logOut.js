
function logOut(){

    //Url 
    var host = 'https://api.okei.online/sair';

        $.ajax({

            url: host,
            type: 'GET',
            xhrFields: {
                //inclua cookies e cabeçalhos de autenticação 
                withCredentials: true
             },
    
    
             success: function (){
             
              $("#formulario-dados")[0].reset();
               // console.log('logoff');
               top.location.href =  'login.html';
             
    
             },
            
        }).fail(function(jqXHR, errorThrown){
    
            console.log(jqXHR.status);
    
           
        });



  
}
  


   