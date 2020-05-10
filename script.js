let div = document.querySelector("#cards");


window.addEventListener("load", ()=>{
    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72").then((r)=>{

    r.json().then( (dados)=>{
        console.log(dados);
        
        criarCard(dados);
    

        });
    });
});


function codigoCard(arrayDeDados, posicao, novaPhoto){
    let codigo = document.createElement("codigo");
    codigo.innerHTML = ` 
    <div class="card" style="width: 16rem;" id="cardProduto">
    <img class="card-img-top" src="${novaPhoto}" alt="Card image cap">
    <div class="card-body">
    <p class="card-text"> ${arrayDeDados[posicao].name.toLowerCase()} </p>
    <p class="card-text"><small class="text-muted"> ${arrayDeDados[posicao].property_type} </small></p>
      <p id="preco"> R$${arrayDeDados[posicao].price}/noite </p>
    </div>
  </div>  `;

  div.appendChild(codigo);
}

function criarCard(dado){

    for(let i = 0; i < dado.length; i++){
       
        photoRendimensionada = tamanhoPhoto(dado[i].photo);

        codigoCard(dado, i, photoRendimensionada);

    }
}


function tamanhoPhoto (photo){
    
    let photoModificada = photo.substring(0, photo.indexOf("policy"));

    console.log(photoModificada + "policy=medium");

    return photoModificada + "policy=medium";
}

