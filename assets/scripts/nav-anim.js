const animationElements = document.getElementsByClassName("anim");

for(let i=0; i < animationElements.length; i++){
    animationElements[i].onmouseenter = function(){
        this.classList.add("animated", "infinite" ,"pulse", "fast");
    }
    animationElements[i].onmouseleave = function(){
        this.classList.remove("animated", "infinite", "pulse", "fast");
    }
}