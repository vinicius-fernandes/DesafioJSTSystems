
window.addEventListener("load", myInit, true); function myInit(){ 

    primeiroCarregamentoCategorias()
    primeiroCarregamentoProdutos()

    popularRandomProdutos()
}; 




function popularRandomProdutos(){

    const randomProdutos = getRandomProdutos();

    randomProdutos.forEach((produto)=>{
        gerarCardProduto(produto)
    })
}