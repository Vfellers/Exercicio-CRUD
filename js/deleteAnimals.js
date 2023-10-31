function deleteAnimals(event) {
    const id = event.target.dataset.id;

    fetch("http://cafepradev.com.br:21020/animals/delete", {
        method: "DELETE",
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        },
    
        body : JSON.stringify({
            id: id
        })
    })
    
        .then(retorna => retorna.json())
        .then((ret) => {
            if(ret.error){
                alert(ret.error.message);   
            } else {
                alert(ret.message);
                listAnimals();
            }
        })
    
        .catch(erro => {
            console.log(erro)
        })

}
