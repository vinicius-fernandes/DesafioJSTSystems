const produtosKey = "Produtos"





function primeiroCarregamentoProdutos(){
    if(getProdutos().length==0){
        const produtos = [
            {
                id:0,
                descricao:'Camiseta Branca',
                valor: 20,
                estoque:10,
                categoriaId:0
            },
            {
                id:1,
                descricao:'Camiseta Preta',
                valor: 20,
                estoque:15,
                categoriaId:0
            },
            {
                id:2,
                descricao:'Camiseta Marrom',
                valor: 20,
                estoque:30,
                categoriaId:0
            },
            {
                id:3,
                descricao:'Camiseta Azul',
                valor: 20,
                estoque:5,
                categoriaId:0
            },
            {
                id:4,
                descricao:'Camiseta Vermelha',
                valor: 20,
                estoque:2,
                categoriaId:0
            },
            {
                id:5,
                descricao:'Camiseta DryFit Branca',
                valor: 40,
                estoque:5,
                categoriaId:0
            },
            {
                id:6,
                descricao:'Camiseta Regata Branca',
                valor: 15,
                estoque:20,
                categoriaId:0
            },
            {
                id:7,
                descricao:'Camiseta Regata Preta',
                valor: 15,
                estoque:10,
                categoriaId:0
            },
            {
                id:8,
                descricao:'Camiseta Regata Azul',
                valor: 15,
                estoque:10,
                categoriaId:0
            },
            {
                id:9,
                descricao:'Camiseta DryFit Preta',
                valor: 40,
                estoque:10,
                categoriaId:0
            },

            {
                id:10,
                descricao:'Tênis Casual Branco',
                valor: 200,
                estoque:10,
                categoriaId:1
            },
            {
                id:11,
                descricao:'Tênis Casual Preto',
                valor: 250,
                estoque:15,
                categoriaId:1
            },
            {
                id:12,
                descricao:'Tênis Casual Marrom',
                valor: 280,
                estoque:30,
                categoriaId:1
            },
            {
                id:13,
                descricao:'Tênis de Corrida Azul',
                valor: 400,
                estoque:5,
                categoriaId:1
            },
            {
                id:14,
                descricao:'Tênis de Corrida Vermelho',
                valor: 450,
                estoque:2,
                categoriaId:1
            },
            {
                id:15,
                descricao:'Tênis de Corrida Branco',
                valor: 490,
                estoque:5,
                categoriaId:1
            },
            {
                id:16,
                descricao:'Chinelo Branco',
                valor: 15,
                estoque:20,
                categoriaId:1
            },
            {
                id:17,
                descricao:'Chinelo Preto',
                valor: 15,
                estoque:10,
                categoriaId:1
            },
            {
                id:18,
                descricao:'Chinelo Azul',
                valor: 15,
                estoque:10,
                categoriaId:1
            },
            {
                id:19,
                descricao:'Chinelo Amarelo',
                valor: 40,
                estoque:10,
                categoriaId:1
            },



            {
                id:20,
                descricao:'Bermuda Casual Branca',
                valor: 90,
                estoque:10,
                categoriaId:2
            },
            {
                id:21,
                descricao:'Bermuda Casual Preta',
                valor: 90,
                estoque:15,
                categoriaId:2
            },
            {
                id:22,
                descricao:'Bermuda Casual Marrom',
                valor: 90,
                estoque:30,
                categoriaId:2
            },
            {
                id:23,
                descricao:'Bermuda Jeans',
                valor: 80,
                estoque:5,
                categoriaId:2
            },
            {
                id:24,
                descricao:'Bermuda Esportiva Vermelho',
                valor: 20,
                estoque:2,
                categoriaId:2
            },
            {
                id:25,
                descricao:'Bermuda Esportiva Branca',
                valor: 15,
                estoque:5,
                categoriaId:2
            },
            {
                id:26,
                descricao:'Bermuda Esportiva Preta',
                valor: 15,
                estoque:20,
                categoriaId:2
            },
            {
                id:27,
                descricao:'Bermuda Praia Azul',
                valor: 15,
                estoque:10,
                categoriaId:2
            },
            {
                id:28,
                descricao:'Bermuda Praia Preta',
                valor: 15,
                estoque:10,
                categoriaId:2
            },
            {
                id:29,
                descricao:'Bermuda Praia Amarela',
                valor: 40,
                estoque:10,
                categoriaId:2
            },
 
        ]


        localStorage.setItem(produtosKey,JSON.stringify(produtos))

    }

}


function getProdutos(){
    let produtos = JSON.parse(localStorage.getItem(produtosKey))

    if(typeof produtos === 'undefined' || produtos === null){
        return []
    }

    return produtos
}

function getRandomProdutos(){
    let arr = [];
    while(arr.length < 12){
        var r = Math.floor(Math.random() * 30) ;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    let produtos = getProdutos();

    let random12Produtos = produtos.filter((p)=>arr.includes(p.id))

    return random12Produtos;
}