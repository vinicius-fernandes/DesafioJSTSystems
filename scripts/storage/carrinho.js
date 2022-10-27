const carrinhoKey = "CARRINHO"


function addProdutoCarrinho (produtoId){
    const produto = getProduto(produtoId)
    if(produto.estoque<1){
        toastr.error("O item está sem estoque :(");

        console.log("O produto não possui estoque suficiente :(")
        return;
    }

    let carrinho = getCarrinho()

    if(!Array.isArray(carrinho)){
        carrinho=[]
    }

    const indexProdutoCarrinho = carrinho.findIndex(c=>c.id==produto.id)

    if(indexProdutoCarrinho !== -1){
        carrinho[indexProdutoCarrinho].total = carrinho[indexProdutoCarrinho].total + 1;
    }
    else{
        produto.total = 1
        carrinho.push(produto)
    }
    decrementarEstoqueProduto(produtoId,1)
    localStorage.setItem(carrinhoKey,JSON.stringify(carrinho))
}


function removerProdutoCarrinho(produtoId){
    let carrinho = getCarrinho()

    if(!Array.isArray(carrinho)){
        carrinho=[]
    }

    const index = carrinho.findIndex(c=>c.id==produtoId)

    if(index!== -1){
        incrementarEstoqueProduto(produtoId,carrinho[index].total)
        carrinho.splice(index, 1)
        localStorage.setItem(carrinhoKey,JSON.stringify(carrinho))
        refreshCarrinhoInfos()
    }
    else{
        toastr.error("Ops não foi possível identificar o item a ser removido");
    }
}


function getCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem(carrinhoKey))

    if(typeof carrinho === 'undefined' || carrinho === null){
        return []
    }

    return carrinho
}