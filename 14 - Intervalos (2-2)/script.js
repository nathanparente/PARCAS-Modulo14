let timer;

function comecar(){
    timer = setTimeout(function(){
        alert("Rodou!!")
    }, 5000)

}

function parar(){
    clearTimeout(timer)
}
