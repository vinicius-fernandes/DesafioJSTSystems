const categoriasKey = "Categorias"





function primeiroCarregamentoCategorias(){
    if(getCategorias().length==0){
        const categorias = [
            {
                id:0,
                descricao:'Camisetas'
            },
            {
                id:1,
                descricao:'Calçados'
            },
            {
                id:2,
                descricao:'Bermudas'
            },
 
        ]


        localStorage.setItem(categoriasKey,JSON.stringify(categorias))

    }

}


function getCategoria(id){
    let categorias = getCategorias();
    return categorias.find((c)=>c.id===id);
}


function getCategorias(){
    let categorias = JSON.parse(localStorage.getItem(categoriasKey))

    if(typeof categorias === 'undefined' || categorias === null){
        return []
    }

    return categorias
}