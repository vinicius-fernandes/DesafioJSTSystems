
function gerarCardProdutoCarrinho(produtoCarrinho){

    const card = `
    <div class="col-12 w-100  m-1 bg-white border rounded p-2">

        <h5 class="card-title">${produtoCarrinho.descricao}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Total no carrinho : ${produtoCarrinho.total}</h6>
        <p class="card-text">Valor unitário: R$ ${produtoCarrinho.valor} | Valor total: R$ ${(produtoCarrinho.total)*(produtoCarrinho.valor)}</p>
        <a href="#" class="btn btn-danger" onclick="removerProdutoCarrinho(${produtoCarrinho.id})"><i class="bi bi-trash"></i></a>
 
  </div>
    `
    carrinhoContainer.innerHTML += card
}