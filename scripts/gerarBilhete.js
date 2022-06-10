function gerarBilhete(){

    //seleciona div bilhete
    var divBilhete = document.getElementById('bilhete');
    //cria elemento divCol
    const divCol = document.createElement('div');
    //adiciona a classe col a divCol
    divCol.classList.add('col');

    divBilhete.appendChild(divCol);

    divCcard = document.createElement('div');
    divCcard.classList.add('ccard');
    divCcard.classList.add('radius-10');
    divCcard.classList.add('bg-orange');
    //atribui a divCcard a divCol
    divCol.appendChild(divCcard);


    divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');


    divCcard.appendChild(divCardBody);

    divFlex = document.createElement('div');
    divFlex.classList.add('d-flex');
    divFlex.classList.add('align-items-center');

    divCardBody.appendChild(divFlex);



    divVazio = document.createElement('div');
    divFlex.appendChild(divVazio);



    p = document.createElement('p');
    p.classList.add('mb-1');
    p.classList.add('text-white');
    nome = localStorage.getItem("nomeTreinamentoBilhete");
    p.innerText = nome;

  
    h4 = document.createElement('h4');
    h4.classList.add('mb-0');
    h4.classList.add('text-white');
    //id de inscricao
    id_inscricao = localStorage.getItem("id_inscricao_treinamento");
    h4.innerText = id_inscricao;

    divVazio.appendChild(p);
    divVazio.appendChild(h4);

    divMsAuto = document.createElement('div');
    divMsAuto.classList.add('ms-auto');
    divMsAuto.classList.add('fs-2');
    divMsAuto.classList.add('text-white');

    divFlex.appendChild(divMsAuto);

    //ícone do card
    i = document.createElement('i');
    i.classList.add('fadeIn');
    i.classList.add('animated');
    i.classList.add('bx');
    i.classList.add('bx-wink-smile');


    divMsAuto.appendChild(i);


    hr = document.createElement('hr');
    hr.classList.add('my-2');
    hr.classList.add('border-top');
    hr.classList.add('border-light');

    divCardBody.appendChild(hr);

    smallInicio = document.createElement('small');
    smallInicio.classList.add('mb-0');
    smallInicio.classList.add('text-white');

    smallFim = document.createElement('small');
    smallFim.classList.add('mb-0');
    smallFim.classList.add('text-white');

    hr.appendChild(smallInicio);
    hr.appendChild(smallFim);

    spanInicio = document.createElement('span');
    data_inicio = localStorage.getItem("data_inicio");
    //cria um br
    br = document.createElement('br');
    spanInicio.innerText = "Data Inicio: "+data_inicio;
    //atribui br a spanInicio
    spanInicio.appendChild(br);

    spanFim = document.createElement('span');
    //data de encerramento
    data_encerramento = localStorage.getItem("data_encerramento");
    spanFim.innerText = "Encerramento: "+data_encerramento;

    smallInicio.appendChild(spanInicio);
    smallFim.appendChild(spanFim);

    divCardBody.appendChild(smallInicio);
    divCardBody.appendChild(smallFim);
   

}