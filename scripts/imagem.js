$(document).ready(function (){

    img = localStorage.getItem("img_perfil");

    hostImg = "https://okei.online/uploads/img-perfil/"+img;

    $.ajax({

        type : 'GET',
        url: hostImg,

        xhrFields: {
            withCredentials: true
          },

          data: img,

          success: function(data){
         
      

          }
      
    }).fail(function(jqXHR, errorThrown){
        console.log(jqXHR.status);

    });

});