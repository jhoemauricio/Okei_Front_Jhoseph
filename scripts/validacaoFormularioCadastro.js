//Valida data de nascimento
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

//Valida email
function checkEmail() {

  var email = document.querySelector('#email');
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email.value)) {

      // alert('Please provide a valid email address');
      // email.focus;
      // return false;
      Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        icon: '',
        continueDelayOnInactiveTab: false,
        position: 'bottom right',
        size: 'mini',
        msg: 'Email em formato Inválido'
  
    });

  }else{
    return true;
  }
}


//--------------------------------------Validação CARTAO CIDADÃO PORTUGAL ---------------------------

function valPTPassaPorteCC(){

  var pais = localStorage.getItem("pais");
  var input = document.querySelector('#rg_passaporte').value;

          //converete para string
          str = input.toString();
          //Validar passaporte
          numero = /^([A-Z]{2})(\d{6})$/;
         
          //procura pelo Validar passaporte
          pass = str.match(numero);

          //validar Cartão Cidadão Portugal
          numLetra = /^(\d{9}[A-Z]{2}\d{1}||\d{8}[A-Z]{2}\d{1})$/;

          cc = str.match(numLetra);
             
      if(pass && input.length == 8 && pais == "PT"){

          console.log("Tem 2 letras e 6 numeros e PT é PASSAPORTE");
          // var p = document.createElement('p');
          // p.innerText = "Tem 2 letras e 6 numeros e PT é PASSAPORTE";
          // var div = document.querySelector('#div');
          // div.appendChild(p);

          return true;

      }else if((input.length == 11 || input.length == 12) && cc && pais == "PT"){
          
          console.log("9 digitos, 2 letras, 1 digito ou 8 digitos, 2 digitos, 1 digito CC");
          // var p = document.createElement('p');
          // var div = document.querySelector('#div');
          // p.innerText = "9 digitos, 2 letras, 1 digito ou 8 digitos, 2 digitos, 1 digito CC";
          // div.appendChild(p);
          
          return true;

      }else{

            Lobibox.notify('warning', {
              pauseDelayOnHover: true,
              icon: '',
              continueDelayOnInactiveTab: false,
              position: 'bottom right',
              size: 'mini',
              msg: 'Nº de Passaporte/CC inválido'
        
          });
      }
}


//------------------------------------------ Validação RG BRASIL----------------------------------------------------------

function validarRgBrasil(){

  var pais = localStorage.getItem("pais");
  var input = document.querySelector('#rg_passaporte').value;


        numero = /^([A-Z]{2})(\d{6})$/;
        //converete para string
         str = input.toString();
              
        //procura pelo Validar passaporte
        pass = str.match(numero);

        numRg = /^(\d{6,12})$/;

        rg = str.match(numRg);

        if(((pais == "BR") && (input.length >= 6) && (input.length <=12) && rg)){

          console.log("RG BRASIL");
          return true;
          // var div = document.querySelector('#div');
          // var p = document.createElement('p');
          // p.innerText = "RG brasil"
          // div.appendChild(p);

        }else if(pais == "BR" && input.length == 8 && pass){

          console.log("PASSAPORTE BRASIL");
          // var div = document.querySelector('#div');
          // var p = document.createElement('p');
          // p.innerText = "PASSAPORTE BRASIL"
          // div.appendChild(p);

          return true;

        }else{

          Lobibox.notify('warning', {
            pauseDelayOnHover: true,
            icon: '',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            size: 'mini',
            msg: 'Nº de RG/Passaporte inválido'
      
        });

        }

}
         
      
//------------------------------------------------------- Validação NIF -------------------------------------------

function validaContribuinte(){

  var contribuinte = document.querySelector('#cpf').value;
  var temErro=0;
      if (
          contribuinte.substr(0,1) != '1' && // pessoa singular
          contribuinte.substr(0,1) != '2' && // pessoa singular
          contribuinte.substr(0,1) != '3' && // pessoa singular
          contribuinte.substr(0,2) != '45' && // pessoa singular não residente
          contribuinte.substr(0,1) != '5' && // pessoa colectiva
          contribuinte.substr(0,1) != '6' && // administração pública
          contribuinte.substr(0,2) != '70' && // herança indivisa
          contribuinte.substr(0,2) != '71' && // pessoa colectiva não residente
          contribuinte.substr(0,2) != '72' && // fundos de investimento
          contribuinte.substr(0,2) != '77' && // atribuição oficiosa
          contribuinte.substr(0,2) != '79' && // regime excepcional
          contribuinte.substr(0,1) != '8' && // empresário em nome individual (extinto)
          contribuinte.substr(0,2) != '90' && // condominios e sociedades irregulares
          contribuinte.substr(0,2) != '91' && // condominios e sociedades irregulares
          contribuinte.substr(0,2) != '98' && // não residentes
          contribuinte.substr(0,2) != '99' // sociedades civis

      ) { temErro=1;}
      var check1 = contribuinte.substr(0,1)*9;
      var check2 = contribuinte.substr(1,1)*8;
      var check3 = contribuinte.substr(2,1)*7;
      var check4 = contribuinte.substr(3,1)*6;
      var check5 = contribuinte.substr(4,1)*5;
      var check6 = contribuinte.substr(5,1)*4;
      var check7 = contribuinte.substr(6,1)*3;
      var check8 = contribuinte.substr(7,1)*2;

      var total= check1 + check2 + check3 + check4 + check5 + check6 + check7 + check8;
      var divisao= total / 11;
      var modulo11=total - parseInt(divisao)*11;
      if ( modulo11==1 || modulo11==0){ comparador=0; } // excepção
      else { comparador= 11-modulo11;}


      var ultimoDigito=contribuinte.substr(8,1)*1;
      if ( ultimoDigito != comparador ){ temErro=1;}

      if (temErro==1){
        
          Lobibox.notify('warning', {
            pauseDelayOnHover: true,
            icon: '',
            continueDelayOnInactiveTab: false,
            position: 'bottom right',
            size: 'mini',
            msg: 'Nº NIF inválido'
      
        });
          
      }else{
          return true;
      }

}
