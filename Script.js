function cerrar(){
    const sidebar = document.getElementById("sidebar");
    const currentDisplay = window.getComputedStyle(sidebar).display;

    if (currentDisplay == "block") {
        sidebar.style.display= "none";
    } else {
        sidebar.style.display= "block";
    }  
}

const parentSection = document.getElementById('foco');

parentSection.style.width = "auto";