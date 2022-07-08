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

      console.log(idadeUsuario);

    }else{
       
       console.log('nao pode se inscrever data'+$("#data_nascimento").val());
    }

}

function habilitarBt(){

  const nome = document.querySelector('#nome').value;
  const nascimento = document.querySelector('#data_nascimento').value;
  const pais = document.querySelector('#country_selector').value;
  const cpf = document.querySelector('#cpf').value;
  const rg_pass = document.querySelector('#rg_passaporte').value;
  const validade = document.querySelector('#validade').value;
  const tel = document.querySelector('#phone').value;
  const email = document.querySelector('#email').value;
  const sexo = document.querySelector('#sexo').value;
  const senha = document.querySelector('#senha').value;
  const senha_conf = document.querySelector('#conf_senha').value;

  if((nome != '') && (nascimento != '') && (pais != '') && (cpf != '') && (rg_pass != '') && (validade != '') && (tel != '') && (email != '') && (sexo != '') && (senha != '') && (senha_conf != '')){
    
    document.querySelector('#botaoIr').disabled = false;

  }

}

// function habilitarBtEnd(){

//   const cep = document.querySelector('#cep').value;
//   const numero = document.querySelector('#numero').value;
//   const bairro = document.querySelector('#bairro').value;
//   const cidade = document.querySelector('#cidade').value;
//   const uf = document.querySelector('#uf').value;

//   if((numero != '') && (bairro != '') && (cidade != '') && (uf != '') && (cep != '')){

//     document.querySelector('#botaoIrUltimo').disabled = false;

//   }
// }
 
function validarSenha(){

  var email = $("#email").val();
  var senha = $("#senha").val();
  var senha1 = JSON.stringify(senha);
 
  // /[a-zA-Z0-9/\W|_/]/g;
  var regex = /[a-z]/g;
  var regex1 = /[A-Z]/g;
  var regex2 = /[0-9]/g;
 
 var s = senha1.match(regex);
 var s1 = senha1.match(regex1);
 var s2 = senha1.match(regex2);

 if((s != null && s.length >=1 && senha.length >=6 && email != '') && (s1 != null && s1.length >=1 && senha.length >=6 && email != '') && (s2 != null && s2.length >=1 && senha.length >=6 && email != '')){
    console.log('senha Forte');

    // $("#senha").css('border-color','#7eca54');
    // $("#senha").css('box-shadow','inset 0 1px 1px rgb(220,245,222), 0 0 8px rgb(220,245,222)');

    // $("#senha").css('border-color','#28a745');
    // $("#senha").css('focus');
    // $("#senha").css('box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25)');


  //   focus {
  //     border-color: #28a745;
  //     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  // } 

 }else{
  
    msgSenhaErro();

 }

}

function msgSenhaErro(){

  if((($("#senha").val() != '') && $("#email").val() != '')){

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

function senhaIguais(){

  if($("#senha").val() != $("#conf_senha").val() && $("#email").val() != ''){

    msgSenhaIguais();

  }

}

function validarCpf(){
  
}