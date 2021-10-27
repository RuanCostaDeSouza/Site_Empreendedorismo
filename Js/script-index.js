let time = 4000;
    currentImageIndex = 0;
    images = document.querySelectorAll("#slider img");
    max= images.length;

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