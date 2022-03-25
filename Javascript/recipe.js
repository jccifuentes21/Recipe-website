$(document).ready(function(){
    $('.scroll').click(function(){
     $('html, body').animate({scrollTop : 0},800);
     return false;
    });
    
   });

   function recipe(evt, recipeTabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('show')
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(recipeTabs).style.display = "block";
    evt.currentTarget.className += " active";
  }
   