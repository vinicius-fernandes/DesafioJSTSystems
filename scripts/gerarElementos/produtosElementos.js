


function gerarCardProduto(produto) {

  const categoria = getCategoria(produto.categoriaId)

  let categoriaNome = ""
  let categoriaId = ""
  if (typeof categoria !== 'undefined') {
    categoriaId = categoria.id
    categoriaNome = categoria.descricao
  }

  const cardProduto = `
    <div class="col-12 col-md-3 m-1">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${produto.descricao}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Categoria : ${categoriaNome}</h6>
          <p class="card-text">Valor: R$ ${produto.valor}</p>
          <a href="#" class="btn btn-success" onclick="addProdutoCarrinho(${produto.id})">Adicionar ao carrinho</a>
        </div>
      </div>
    </div>
    `
  containerProdutos.innerHTML += cardProduto;


}