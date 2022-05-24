  //Retorna os dados do usuário
  function mostrarDados(dados) {

    //converterá os dados em uma string antes de analisá-los
    dados = JSON.stringify(dados);

    dados = JSON.parse(dados);
    // console.log(dados.roles);

    var array = dados.roles;

    //percorre o array
    Object.keys(array).forEach(function(key){

    // console.log(array[key].nome);

    // switch(array[key].nome) {

    
    //  case "administrador":
        
        // console.log(dados);
    
        nome = dados.nome;
        //dois parametos o separador e limite de divisões
        nome = nome.split(" ",2);

        //converte para string
        nomeNew = nome.toString();

        //procura por regex virgula, substitui pelo espaço
        nomeNew = nomeNew.replace(/,/g," ");

        //console.log(nomeNew);
        
        //chave e o valor a ser setado
        localStorage.setItem("tipoUser",array[key].nome);
        localStorage.setItem("nomePerfil",nomeNew);
        localStorage.setItem("nome", dados.nome);
        localStorage.setItem("email", dados.email);
        localStorage.setItem("nascimento", dados.data_nascimento);
        localStorage.setItem("nif", dados.nif);
        localStorage.setItem("pais", dados.pais);
        localStorage.setItem("sexo",dados.sexo);

        top.location.href = 'perfilUsuario.html';
                          
      // break;

    //}

  });  

}