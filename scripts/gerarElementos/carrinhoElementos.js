
function gerarCardProdutoCarrinho(produtoCarrinho){

    const card = `
    <div class="col-12 w-100  m-1 bg-white border rounded p-2">

        <h5 class="card-title">${produtoCarrinho.descricao}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Total no carrinho :</h6>
        <div class="d-inline-flex ">
        <button class="btn btn-dark btn-sm rounded-circle m-1" onclick="alterarTotalProduto(${produtoCarrinho.id},-1,true)"><i class="bi bi-arrow-down"></i></button>
        <input type="number" class="col-3  id="exampleFormControlInput1" min="0" onchange="alterarTotalProduto(${produtoCarrinho.id},this.value,false)" value="${produtoCarrinho.total}">
       
        <button class="btn btn-dark btn-sm rounded-circle m-1" onclick="alterarTotalProduto(${produtoCarrinho.id},1,true)"><i class="bi bi-arrow-up"></i></button>
        </div>
        <p class="card-text">Valor unitário: R$ ${produtoCarrinho.valor} | Valor total: R$ ${(produtoCarrinho.total)*(produtoCarrinho.valor)}</p>
        <a href="#" class="btn btn-danger" onclick="removerProdutoCarrinho(${produtoCarrinho.id})"><i class="bi bi-trash"></i></a>
 
  </div>
    `
    carrinhoContainer.innerHTML += card
}