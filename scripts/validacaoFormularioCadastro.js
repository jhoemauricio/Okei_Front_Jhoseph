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

  var senha = $("#senha").val();
  var senha1 = JSON.stringify(senha);

 
  // /[a-zA-Z0-9/\W|_/]/g;
  var regex = /[a-z]/g;
  var regex1 = /[A-Z]/g;
  var regex2 = /[0-9]/g;
 
 var s = senha1.match(regex);
 var s1 = senha1.match(regex1);
 var s2 = senha1.match(regex2);


 if((s != null && s.length >=1) && (s1 != null && s1.length >=1) && (s2 != null && s2.length >=1)){
  console.log('senha Forte');

 }else{
  console.log('nao é forte');
 }



}

      

