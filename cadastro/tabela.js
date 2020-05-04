var contador = 1;
var table = document.querySelector('table');
var button = document.getElementsByTagName('button')[0];
    
function calcularTotal(a,b){
            return a.value * b
        }


button.addEventListener('click', function(event){
    event.preventDefault();
       
    addLine();
    
    contador++;
});

function addLine(){
    var linha = document.createElement('tr');
    
    var colContador = createColumn(contador)
    adicionaRemoverTd(colContador);
    linha.appendChild(colContador);
    
    var colProduto = createColumn(produtox.value);
    adicionaRemoverTd(colProduto);
    linha.appendChild(colProduto);

    var colDescricao = createColumn(descricaox.value);
    adicionaRemoverTd(colDescricao);
    linha.appendChild(colDescricao);
    
    var colQuantidade = createColumn(quantidadex.value);
    adicionaRemoverTd(colQuantidade);
    linha.appendChild(colQuantidade);
    
    var colValor = createColumn(valorx.value);
    adicionaRemoverTd(colValor);
    linha.appendChild(colValor);
 
    var coldesc = createColumn(descontox.value);
    adicionaRemoverTd(coldesc);
    linha.appendChild(coldesc);

    table.appendChild(linha);
    
}

function createColumn(valor){
    var coluna = document.createElement('td');
    coluna.textContent = valor;
    return coluna;
}

function adicionaRemoverTd(elemento) {
    elemento.addEventListener('dblclick', function (item) {
        var retorno = confirm('Deseja Remover?');

        if (retorno) {
                item.target.parentNode.remove();

        }

    });
}
