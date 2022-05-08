
var host = "https://api.okei.online/current_user";

$(document).ready(function(){

        $.ajax({
          type: 'GET',
          url: host,
        
          data:  '{"identificador": "' + $("#inputEmailAddress").val() + '","senha": "' + $("#inputChoosePassword").val() + '"}',
        
          success: function(dat){
            
            dat = JSON.parse(dat);

            console.log(dat);
       
        
          },
        
          
          contentType: "application/json",
          dataType: 'json',
        
        });
  

});




