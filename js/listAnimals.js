function redirectEditPage(event) {
    const id = event.target.dataset.id;
    window.location.href = "editar.html?id=" + id;
    //BUsca o id no clique do event, linha 33 e passa pelo url
}

function listAnimals(){ //CRIA A FUNÇAO

    // CHAMA A API
    fetch("http://cafepradev.com.br:21020/animals/list", {      
        method : "GET",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    })
    // FIM CHAMA API   
       
    
    // Repeticao atribuindo os dados as linhas
    .then(response => response.json())                                                     // Fetch é uma promisse, volta algo, logo then
    .then( (animals) => {
        
        let estrutura = '';
        for(pos in animals){
            estrutura += `
            <tr>
                <td>${animals[pos].id}</td>
                <td>${animals[pos].name}</td>
                <td>${animals[pos].species}</td>
                <td>${animals[pos].color}</td>
                <td>${animals[pos].size}</td>
                <td>
                    <button data-id="${animals[pos].id}" onclick="redirectEditPage(event)">Editar</button>
                    <button data-id="${animals[pos].id}" onclick="deleteAnimals(event)">Excluir</button>
                </td>
            </tr>
            `
        }
        //event = detalha o evento que eu estou chamando, nesse caso o click (tem hora, posição do click... tenho que pegar TARGET)
        //Linha 33 chama a função redirect lá de cima pra ir pra pagina editar já lavando o id na url
        //linha 34 leva o id pro delete atraves do event.target

        //carregar dados na tabela
        let tabela = document.querySelector("#listarAnimais") //puxa a tabela do html pelo id 
        tabela.innerHTML = estrutura

    })
    .catch(erro => {
        console.log(erro)
    })

}

//Chamar a função
listAnimals(); 

