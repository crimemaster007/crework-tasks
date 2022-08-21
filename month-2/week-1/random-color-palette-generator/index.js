const buttonCont = document.querySelector("#button-cont");
const colorArr = document.querySelectorAll(".color-container");
const colorParent = document.querySelectorAll(".color-parent");
const notificationBar=document.querySelector(".notification-container")


buttonCont.addEventListener("click", handleRandomColor);


function handleRandomColor() {
    // console.log(colorArr)
    for (let i = 0; i < 4; i++){
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        colorArr[i].style.backgroundColor = "#" + randomColor;
        let hexCode = colorParent[i].querySelector(".hex-code-container");
        hexCode.innerText = "#" + randomColor;
        
    }
}

for (let i = 0; i < 4; i++){
    colorParent[i].addEventListener("mouseover", (e) => {
        let cpyContainer = colorParent[i].querySelector(".copy-container");
        // console.log(cpyContainer);
        cpyContainer.style.display = "block";
    })
    colorParent[i].addEventListener("mouseout", (e) => {
        let cpyContainer = colorParent[i].querySelector(".copy-container");
        // console.log(cpyContainer);
        cpyContainer.style.display = "none";
    })
    colorParent[i].addEventListener("click", (e) => {
        let colorVal = colorParent[i].querySelector(".hex-code-container").innerText;
        document.body.style.backgroundColor = colorVal;
        navigator.clipboard.writeText(colorVal);// copy to clipboard

        setTimeout(() => {
            notificationBar.innerText = "Color " + colorVal + " copied to your clipboard.";
            notificationBar.style.display="block"
        },1)
        setTimeout(() => {
            notificationBar.style.display="none"
        },1000)
    })
}