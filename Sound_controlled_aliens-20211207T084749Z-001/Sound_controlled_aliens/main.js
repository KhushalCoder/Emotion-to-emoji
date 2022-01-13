function start() {
    navigator.mediaDevices.getUserMedia({audio : true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wPdyY-Cb9/model.json",modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error,results) {
if (error) {
    console.error(error);
}
else{
    console.log(results);
    red = Math.floor(Math.random()*255)+1;
    green =  Math.floor(Math.random()*255)+1
    blue = Math.floor(Math.random()*255)+1
    
    document.getElementById("sound").innerHTML = "I can hear : " + results[0].label
    document.getElementById("accuracy").innerHTML = "Accuracy : " + (results[0].confidence * 100).toFixed(2) + "%"
    document.getElementById("accuracy").style.color = "rgb(" + red+"," +green+","+blue+")"
    document.getElementById("sound").style.color = "rgb(" + red+"," +green+","+blue+")"

    Image1 = document.getElementById("alien1")
    Image2 = document.getElementById("alien2")
    Image3 = document.getElementById("alien3")
    Image4 = document.getElementById("alien4")

    if (results[0].label == "Clap") {
        Image1.src = "aliens-01.gif"
        Image2.src = "aliens-02.png"
        Image3.src = "aliens-03.png"
        Image4.src = "aliens-04.png"
    }
    else if (results[0].label == "Bell") {
        Image1.src = "aliens-01.png"
        Image2.src = "aliens-02.gif"
        Image3.src = "aliens-03.png"
        Image4.src = "aliens-04.png"
    }
    else if (results[0].label == "Snap") {
        Image1.src = "aliens-01.png"
        Image2.src = "aliens-02.png"
        Image3.src = "aliens-03.gif"
        Image4.src = "aliens-04.png"
    }
    else  {
        Image1.src = "aliens-01.png"
        Image2.src = "aliens-02.png"
        Image3.src = "aliens-03.png"
        Image4.src = "aliens-04.gif"
    }

}
}


 