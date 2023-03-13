var modal = document.getElementById("myModal");// obter o modal
var btn = document.getElementById("myBtn"); // obté, o otão que abre o modal
var span = document.getElementsByClassName("close")[0];//obtém o elemento <span> que fecha o modal

//Quando o usuário clicar no botâo,abre o modal
btn.onclick = function(){
    modal.style.display = "block"
} 

//quando o usuario clicar np <span> (x), fecha o modal
span.onclick = function(){
    modal.style.display = "none"
}

//quando o usuario clicar fora do modal, fecha o modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}