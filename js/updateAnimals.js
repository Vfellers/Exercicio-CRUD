var url_string = window.location.href; 
var url = new URL(url_string);
var id = url.searchParams.get("id");       //pegar o id do url

fetch("http://cafepradev.com.br:21020/animals/search/" + id, {      // api search do professor
    method : "GET",
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
}) 

//trazer com os dados preenchidos
.then(response => response.json())                                                    
.then( (animal) => {            
    document.querySelector('input[name="name"]').value = animal.name;
    document.querySelector('input[name="species"]').value = animal.species;
    document.querySelector('input[name="color"]').value = animal.color;
    document.querySelector('input[name="size"]').value = animal.size;
})
.catch(erro => {
    console.log(erro)
})


//UPDATE, alterar os campos
document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault(); //Evita o comporamento padrao, que é puxar o action do form
    let formulario = new FormData(event.target)


    var url_string = window.location.href; 
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    fetch("http://cafepradev.com.br:21020/animals/update", {
        method : "PUT",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    
        body : JSON.stringify({
            id: id,
            name: formulario.get("name"),
            species: formulario.get("species"),
            color: formulario.get("color"),
            size: formulario.get("size")
        })
    })
    
    .then(response => response.json())                                                     // Fetch é uma promisse, volta algo, logo then
    .then( (res) => {
        if(res.error){
            alert(res.error.message);                                                 // Se der erro, vai dizer: Verifique sua request
        } else {
            alert(res.message);
            window.location.href = "index.html";
        }
    
    })
    .catch(erro => {
        console.log(erro)
    })
  });


