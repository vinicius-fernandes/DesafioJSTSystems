
window.addEventListener("load", myInit, true); function myInit(){ 

    primeiroCarregamentoCategorias()
    primeiroCarregamentoProdutos()
    popularFiltrosCategoria()
    popularRandomProdutos()
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