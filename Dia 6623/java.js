//Selecionando eventos
let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdicionar = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');

//Adicionando eventos
botaoAdicionar.addEventListener('click', adicionarTarefa);

//Adicionando tarefa com tecla enter
campoTarefa.addEventListener('keyup', function(enter) {
    if(enter.key === "Enter") {
        adicionarTarefa();
    }
})

//Criando e adicionando elementos
function adicionarTarefa() {
    //Pegar o valor do campo de texto
    let nomeTarefa = campoTarefa.value;

    //Criando um elemento li
    let novaTarefa = document.createElement('li');

    //Definindop o conteúdo do elemento
    novaTarefa.innerText = nomeTarefa;

    //Adicionar um ouvinte 
    novaTarefa.addEventListener('click', function() {
        //Quando o item da lista é clicado adicionamos à classe concluída
        novaTarefa.classList.toggle("concluida");
    });

    //Removendo elementos
    //Criar botão para retirar
    let botaoExcluir = document.createElement("button");

    //Definir o texto 
    botaoExcluir.innerText = "Remover";

    //Adicionar um ouvinte ao botão excluir
    botaoExcluir.addEventListener('click', function(){
        listaTarefas.removeChild(novaTarefa);
    })

    //Adicionando o item da lista ao final da lista
    listaTarefas.appendChild(novaTarefa);

    //Adicionar o botão excluir
    novaTarefa.appendChild(botaoExcluir);

    //Limpar o campo de texto
    campoTarefa.value = "";

    //Adicionar classe para o botão excluir
    botaoExcluir.className = "botao-excluir";
}