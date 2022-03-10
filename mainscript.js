var selectedProject = document.getElementById("project1");
var selectedSlide = document.getElementById("project1-body");

selectFolioPage("project1");


function selectFolioPage(str) {
  
    selectedProject.classList.remove("c-purple");
    selectedProject.classList.add("c-light-purple");
    selectedSlide.classList.add("animation-lock");
    selectedSlide.classList.add("not-visible");
    
    
    selectedProject = document.getElementById(str);
    selectedSlide = document.getElementById(str+"-body");
 
    selectedProject.classList.remove("c-light-purple");
    selectedProject.classList.add("c-purple");
    selectedSlide.classList.remove("not-visible");
    selectedSlide.classList.remove("animation-lock");


  }