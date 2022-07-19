function validarDataNasc(){

    var dataAtual = new Date();
    dataAtual = JSON.stringify(dataAtual);

    var data = dataAtual.replace(" ",'');

    var dataAno = data.split('-');
    dataFor = dataAno[0].replace('"',"");

    //console.log(dataFor);
    var data_nascimento= $("#data_nascimento").val();
    var data_nascimento = data_nascimento.split('-');
    var idadeUsuario =  dataFor - data_nascimento[0];

    if(idadeUsuario>=5){

      // console.log(idadeUsuario);
      // validarSenha();

      //Retorna True se estiver certo
      return true;

    }else{
       
      //  console.log('nao pode se inscrever data'+$("#data_nascimento").val());
      Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        icon: '',
        continueDelayOnInactiveTab: false,
        position: 'bottom right',
        size: 'mini',
        msg: 'Ainda não possui idade mínima'

    });
    }

}


 
function validarSenha(){

  var email = $("#email").val();
  var senha = $("#senha").val();
  var conf_senh = $("#conf_senha").val();
  var senha1 = JSON.stringify(senha);
 
  // /[a-zA-Z0-9/\W|_/]/g;
  var regex = /[a-z]/g;
  var regex1 = /[A-Z]/g;
  var regex2 = /[0-9]/g;
 
 var s = senha1.match(regex);
 var s1 = senha1.match(regex1);
 var s2 = senha1.match(regex2);

 if((s != null && s.length >=1 && senha.length >=6 && email != '') && (s1 != null && s1.length >=1 && senha.length >=6 && email != '') && (s2 != null && s2.length >=1 && senha.length >=6 && email != '') && (senha == conf_senh)){
    // console.log('senha Forte');

    // Se a senha for validada entao permite ir pra o proxima tab
    // var tab1 = document.querySelector('#tab1');
    // var tab2 = document.querySelector('#tab2');
    // tab1.style.display = 'none';
    // tab2.style.display = 'block';

    return true;

 }else{
  
    senhaInvalida();

 }

}

function senhaInvalida(){

  if((($("#senha").val() != '') && $("#email").val() != '') && ($("#senha").val() == $("#conf_senha").val())){

    // $("#senha").css('border-color',' #fa0202');
    // $("#senha").css('box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075), 0 0 8px rgb(248, 134, 146);');

    Lobibox.notify('warning', {
          pauseDelayOnHover: true,
          icon: '',
          continueDelayOnInactiveTab: false,
          position: 'bottom right',
          size: 'mini',
          msg: 'Senha deve ter no minimo 6 digitos, uma letra Maiuscula, minuscula e um numero'
  
      });

  }

  if($("#senha").val() != $("#conf_senha").val() && $("#email").val() != ''){

    msgSenhaIguais();

  }

 
}

function msgSenhaIguais(){

  if($("#senha").val() != ''){

      Lobibox.notify('warning', {
          pauseDelayOnHover: true,
          icon: '',
          continueDelayOnInactiveTab: false,
          position: 'bottom right',
          size: 'mini',
          msg: 'A senha de confirmacao deve ser igual a senha informada'
  
      });
  }
 
}

// function senhaIguais(){

//   if($("#senha").val() != $("#conf_senha").val() && $("#email").val() != ''){

//     msgSenhaIguais();

//   }

// }

//Válida CPF
function validarCpf(){

  //Se o país selecionado for BRASIL
  if($("#country_selector").val() == "Brazil (Brasil)"){

    var cpf = document.querySelector('#cpf').value;

    var i;
    s = cpf;
    var cpf = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = false;
 
    for (i = 0; i < 9; i++){
        d1 += cpf.charAt(i)*(10-i);
    }
    if (d1 == 0){
        // alert("CPF Inválido");

          Lobibox.notify('warning', {
          pauseDelayOnHover: true,
          icon: '',
          continueDelayOnInactiveTab: false,
          position: 'bottom right',
          size: 'mini',
          msg: 'CPF inválido'
  
      });

        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){

      Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        icon: '',
        continueDelayOnInactiveTab: false,
        position: 'bottom right',
        size: 'mini',
        msg: 'CPF inválido'

    });

        v = true;
        return false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += cpf.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        // alert("CPF Inválido")
        
        Lobibox.notify('warning', {
          pauseDelayOnHover: true,
          icon: '',
          continueDelayOnInactiveTab: false,
          position: 'bottom right',
          size: 'mini',
          msg: 'CPF inválido'
  
      });
        v = true;
        return false;
    }
    if (!v) {

      return cpfValido  = 'Cpf válido';
        // alert(cpf + "CPF Válido");
        
      //   Lobibox.notify('success', {
      //     pauseDelayOnHover: true,
      //     icon: '',
      //     continueDelayOnInactiveTab: false,
      //     position: 'bottom right',
      //     size: 'mini',
      //     msg: 'CPF válido'
  
      // });
    }
  }
}


// function validarRgBr(){

//   var rg_pass = $("#rg_passaporte").val();

//   if((rg_pass.length >= 6) || (rg_pass.length <= 12)){

//     // console.log(rg_pass.length);

//      return true;

//   }else{

//     Lobibox.notify('warning', {
//       pauseDelayOnHover: true,
//       icon: '',
//       continueDelayOnInactiveTab: false,
//       position: 'bottom right',
//       size: 'mini',
//       msg: 'RG Passaporte inválido'

//   });

//   }

// }

function validarRg(){

  var rg_pass = $("#rg_passaporte").val();

  if(localStorage.getItem("pais") == "BR"){

    if((rg_pass.length >= 6) && (rg_pass.length <= 12)){
  
      return true;
  
    }else{
  
          Lobibox.notify('warning', {
            pauseDelayOnHover: true,
            icon: '',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            size: 'mini',
            msg: 'RG Passaporte inválido'
      
        });
 
    }

  }

  if(localStorage.getItem("pais") != "BR"){

    if((rg_pass.length == 11) || (rg_pass.length == 12)){

      return true;

    }else{

      Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        icon: '',
        continueDelayOnInactiveTab: false,
        position: 'bottom right',
        size: 'mini',
        msg: 'RG Passaporte inválido'
  
    });

    }

  }

}