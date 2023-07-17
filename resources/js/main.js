$(document).ready(function(){
    //STICKY MENU
    $(".js-photoapp-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });
});

//Humberger menu open-close

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}