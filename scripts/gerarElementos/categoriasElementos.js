

function gerarCheckFiltroCategoria(cat) {

    const check = `
    <div class="form-check form-check-inline m-1">
        <input class="form-check-input" type="checkbox" id="checkCat-${cat.id}" name="filtroCategorias" value="${cat.id}" onchange="filtrarCategorias()">
        <label class="form-check-label" for="checkCat-${cat.id}">${cat.descricao}</label>
    </div>
    `
    categoriasContainer.innerHTML += check
}