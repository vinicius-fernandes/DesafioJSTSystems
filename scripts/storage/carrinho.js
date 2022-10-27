const carrinhoKey = "CARRINHO"


function addProdutoCarrinho (produto){

    let carrinho = getCarrinho()

    if(!Array.isArray(carrinho)){
        carrinho=[]
    }
    carrinho.push(produto)
    localStorage.setItem(carrinhoKey,JSON.stringify(carrinho))
}


function getCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem(carrinhoKey))

    if(typeof carrinho === 'undefined' || carrinho === null){
        return []
    }

    return carrinho
}