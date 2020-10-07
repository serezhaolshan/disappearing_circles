document.getElementById("check").onclick = () => {
    let fingersEntered = document.getElementById("text").value;
    let fingerCount = Math.floor(Math.random() * 6);
    if(fingersEntered == fingerCount){
        alert("You got it!");
    }
    else {
        alert(`Nope! The number was ${fingerCount}`);
    }
    console.log(fingerCount);
};