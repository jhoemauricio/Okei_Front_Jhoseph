function carregarBilhetes(pagina){

    $("#perfil-usuario-conteudo").hide();

    $("#mostrar-pagina").fadeIn('slow');

    $("#mostrar-pagina").load(pagina);

    $.ajax({

        url : "https://api.okei.online/bilhetes",
        type : 'GET',

        xhrFields : {
            withCredentials : true
        },

        success: function(data){

            
            // id_inscricao: "16"
            // nome: "Teste A"
            // data_encerramento: "2023-04-30 00:00:00"
            // data_inicio:
            
            Object.keys(data).forEach(function(item){

                localStorage.setItem("id_inscricao_treinamento",data[item].id_inscricao);
                localStorage.setItem("nomeTreinamentoBilhete",data[item].nome);
                
                //converte string data inicio
                var data_i = JSON.stringify(data[item].data_inicio);
                //retira " da string
                dt_i = data_i.replace(/"/g,"");
                //separa por espaço
                dt_in = dt_i.split(' ');
                //primeira posição separada pelo split
                dt_formato = dt_in[0];
                //separa a string por -
                dt_formato_br = dt_formato.split('-');
                //organiza as posições
                dt_inicio_formatado = dt_formato_br[2]+"/"+dt_formato_br[1]+"/"+dt_formato_br[0];
                //seta o localStorage
                localStorage.setItem("data_inicio",dt_inicio_formatado);

                //data de encerramento
                var data_f = JSON.stringify(data[item].data_encerramento);

                dt_f = data_f.replace(/"/g,"");
                dt_fim = dt_f.split(' ');
                dt_formato = dt_fim[0];
                dt_formato_br = dt_formato.split('-');
                dt_encerramento_formatado = dt_formato_br[2]+"/"+dt_formato_br[1]+"/"+dt_formato_br[0];

                localStorage.setItem("data_encerramento", dt_encerramento_formatado);


                gerarBilhete();


            });

        },
        contentType: "application/json",
        dataType: 'json',

    });


}