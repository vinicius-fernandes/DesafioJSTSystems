window.addEventListener("load", myInit, true); function myInit(){ 

    refreshCarrinhoInfos()
}; 

function popularCarrinho(){
    const carrinho = getCarrinho()

    carrinho.forEach((c)=>{
        gerarCardProdutoCarrinho(c)
    })
}


function totalItensCompra(){
    const carrinho = getCarrinho()
    const total = carrinho.reduce((prev,curr)=>prev+curr.total,0)

    totalItensElem.innerText=total
}
function valorTotalCompra(){
    const carrinho = getCarrinho()
    const total = carrinho.reduce((prev,curr)=>prev+(curr.total*curr.valor),0)
    valorTotalElem.innerText=total
}

function refreshCarrinhoInfos(){
    carrinhoContainer.innerHTML=''
    popularCarrinho()
    totalItensCompra()
    valorTotalCompra()
}