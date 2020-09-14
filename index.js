var slider=document.getElementById("myRange");
var valueOfSlider=document.querySelector(".value");
var dataLeft=document.getElementsByClassName("dialogBoxContent");
document.querySelector("input").addEventListener("change",function(){
    valueOfSlider.innerHTML=this.value;
    dataLeftContent=1000-(this.value)+" GB Left";
    dataLeft[0].innerHTML=dataLeftContent;
});



document.getElementById("myRange").addEventListener("mousemove",function(){
    var x=(slider.value)*(0.1);
    var color="linear-gradient(90deg, hsl(6, 100%, 80%) ,  hsl(335, 100%, 65%) "+x+ "%"+", hsl(229, 57%, 11%) "+ x+"%)"; 
   
    slider.style.background=color;
});
