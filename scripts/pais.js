$(document).ready(function(){

  $.ajax({
    //api de país
    url: "https://restcountries.com/v3.1/all",
    type: 'GET',

    success: function (data) {

      for (var i = 0; i < data.length; i++) {

        console.log(data[i]);
        console.log(data[i].idd.root + data[i].idd.suffixes);

        var select = document.getElementById("select");

        const option = document.createElement("option");

        option.setAttribute('data-img-src', data[i].flags.png);

        option.innerText = data[i].cca3 + " " + data[i].idd.root + data[i].idd.suffixes;

        select.appendChild(option);

      }

      $("#select").chosen(

        {
          width: "100%",
        
          no_results_text: "DDI de País não encontrado",
          disable_search: false,
          max_shown_results : 5
        }

      );

    }

  });
});