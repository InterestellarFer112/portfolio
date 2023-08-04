let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
   if(menuVisible) {
   document.getElementById("nav").classList="";
    menuVisible = false;
}else{
    document.getElementById("nav").classList= "responsive";
    menuVisible = true;
        }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;

}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("PythonJr");
        habilidades[1].classList.add("Technical-Support");
        habilidades[2].classList.add("Siebel-Telco");
        habilidades[3].classList.add("Office");
        habilidades[4].classList.add("Comunicacion");
        habilidades[5].classList.add("Trabajo-en-equipo");
        habilidades[6].classList.add("Office");
        habilidades[7].classList.add("Office");
        habilidades[8].classList.add("Office");

    }
}


window.onscroll = function(){
    efectoHabilidades();

}