function toggleMenu(){
    // console.log(document.getElementById("primaryNav").classList);
     document.getElementById("primaryNav").classList.toggle("hide");
     
  }
  function toggleMenuClosed(){
    document.getElementsByClassName("primaryNav")[0].classList.remove("showmenu");
  }