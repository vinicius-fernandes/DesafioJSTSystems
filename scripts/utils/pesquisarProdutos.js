





function showPesquisa(){

    const textoPesquisa = inputPesquisa.value
    containerProdutos.innerHTML=''

    if(textoPesquisa!=''){
        const produtos = getProdutos();
        const produtosFiltrados = produtos.filter((p)=>p.descricao.toLowerCase().includes(textoPesquisa.toLowerCase()))
        if(produtosFiltrados.length>0){
            produtosFiltrados.forEach((p)=>{
                gerarCardProduto(p)
            })
        }
        else{
            containerProdutos.innerHTML=`
            <div class="alert alert-warning" role="alert">
            Sua pesquisa não encontrou nenhum produto :(
            Tente pesquisar outros termos ou recarregar a página
            </div>
            `
        }
    }
    else{
        popularRandomProdutos()
    }

}

btnPesquisar.addEventListener('click',showPesquisa)