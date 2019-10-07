var lista = document.querySelector("#teste");
var input = document.querySelector("#novo-item");
var btnAdicionar = document.querySelector("#btn-adicionar");
var cursos = ['Java', 'JavaScript', 'Conhecer Vue.js', 'PHP', 'BOOTSTRAP',"VICTOR", "LUAN", "WILLIAM"];

function mostrarCursos(){
    lista.innerHTML = '';
    for(curso of cursos){
        var cursoElement = document.createElement("li");
        var cursoText = document.createTextNode(curso);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = cursos.indexOf(curso);
        linkElement.setAttribute("onclick", 'deleteCurso(' + pos + ')');

        linkElement.setAttribute('href', "#");
        linkElement.appendChild(linkText);

        cursoElement.appendChild(cursoText);
        cursoElement.appendChild(linkElement);
        lista.appendChild(cursoElement);
    }
}

mostrarCursos();

function addCurso(){
    var cursoText = input.value;
    cursos.push(cursoText);
    input.value = '';
    mostrarCursos();
}


btnAdicionar.addEventListener('click', function(event){
    if(input.value == ''){
        console.log("digite algo!");
    }else{
        event.preventDefault();
        addCurso();
    }
});

function deleteCurso(pos){
    cursos.splice(pos, 1);
    mostrarCursos();
}


lista.addEventListener("dblclick", function(event){
    event.target.classList.add("fadeOut");

    setTimeout(function() {
        event.target.remove();
    }, 500);

});