var selectedProject;


function selectFolioPage(str) {

    if(selectedProject != null) {
        selectedProject.classList.remove("c-purple");
        selectedProject.classList.add("c-light-purple");
    }
    
    selectedProject = document.getElementById(str);
 
    selectedProject.classList.remove("c-light-purple");
    selectedProject.classList.add("c-purple");


  }