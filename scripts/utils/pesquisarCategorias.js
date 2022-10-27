


function filtrarCategorias(){
    const categoriasSelecionadas = document.querySelectorAll('input[name="filtroCategorias"]:checked');
    const categoriasSelecionadasIds = []
    containerProdutos.innerHTML=''

    for(let i=0;i<categoriasSelecionadas.length;i++){
        categoriasSelecionadasIds.push(parseInt(categoriasSelecionadas[i].value))
    }

    if(categoriasSelecionadasIds.length>0){
        const produtosCategorias = getProdutos().filter((p)=>categoriasSelecionadasIds.includes(p.categoriaId))
        produtosCategorias.forEach((produto)=>{
            gerarCardProduto(produto)
        })
    }
    else{
        popularRandomProdutos()
    }
}