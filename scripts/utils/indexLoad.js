
window.addEventListener("load", myInit, true); function myInit(){ 

    primeiroCarregamentoCategorias()
    primeiroCarregamentoProdutos()
    popularFiltrosCategoria()
    popularRandomProdutos()
    checkTotalItensCarrinho()
}; 




function popularRandomProdutos(){

    const randomProdutos = getRandomProdutos();

    randomProdutos.forEach((produto)=>{
        gerarCardProduto(produto)
    })
}






function popularFiltrosCategoria(){

    const categorias = getCategorias()


    categorias.forEach((cat)=>{

        gerarCheckFiltroCategoria(cat)
    })

}

function checkTotalItensCarrinho(){
    const itensNoCarrinho = getTotalItensCompra()

    if(itensNoCarrinho>0){
        let text = `(${itensNoCarrinho})`
    

        totalCarrinhoMenu.innerText=text
    }
}