    
    function imagemTreinamento(){


    var hostImgTreinamento = "https://okei.online/uploads/treinamentos/";


    //Nome da imagem de treinamento
    nome  = localStorage.getItem("imagemTreinamento");

    var divTreinamento = document.getElementById('imgTreinamento');
    
    //cria div
    const divCol =  document.createElement('div');
    //atribui a classe
    divCol.classList.add('col');
  
    //insere o elemento divCol a divTreinamento
    divTreinamento.appendChild(divCol);

    divCard = document.createElement('div');
    divCard.classList.add('card');
   

    divCol.appendChild(divCard);

    //cria elemento image
    imgTre = document.createElement('img');

    imgTre.setAttribute('style','object-fit: contain');

    //atribui classe
    imgTre.classList.add('card-img-top');

    //caminho da imagem
    imgTre.src =  hostImgTreinamento+nome;

    //proporção do Card
    divRatio = document.createElement('div');
    divRatio.classList.add('ratio');
    divRatio.classList.add('ratio-4x3');

    //anexa imgTre a divRatio
    divRatio.appendChild(imgTre);
    //atribui divRatio ao divCard
    divCard.appendChild(divRatio);

 

    divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    divCard.appendChild(divCardBody);

    h5 = document.createElement('h5');
    h5.classList.add('card-title');
    //nome do treinamento
    nome = localStorage.getItem("nomeTreinamento");
    valor = localStorage.getItem("valorTreinamento");
    h5.innerText = nome+" R$"+valor;

    divCardBody.appendChild(h5);

    p = document.createElement('p');
    p.classList.add('card-text');
    //descricao do treinamento
    descricao = localStorage.getItem("descricaoTreinamento");

    p.innerText = descricao;

    divCardBody.appendChild(p);

    a = document.createElement('a');
    a.setAttribute('href','#');
    //classe btn btn-primary adicionada uma a uma
    a.classList.add('btn');
    a.classList.add('btn-primary');
   
    a.innerText = 'Adquira já';

    divCardBody.appendChild(a);


}
