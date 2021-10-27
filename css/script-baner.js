let time = 8000;
    currentImageIndex = 0;
    images = document.querySelectorAll("#slider img");
    max= 3;

function nextImag(){
    
    images[currentImageIndex]
        .classList.remove("selected")
 

    currentImageIndex ++

    if(currentImageIndex>=max)
        currentImageIndex=0
        
    images[currentImageIndex]
        .classList.add("selected")

}

function start(){
    setInterval(()=>{
        nextImag()
    }, time)
}

window.addEventListener("load", start)