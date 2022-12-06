camera = document.getElementById("camera")
Webcam.set({
    width: 350, height: 300, image_format:'png', png_quality:90
})
Webcam.attach('#camera') 

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfieimg" src ="'+data_uri+'">'
    })

}

Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/imaaOH6Hq/model.json",modelloaded)
function modelloaded() {
    console.log("model is loaded")
}

function check(){
    img= document.getElementById("selfieimg")
    Classifier.classify(img,gotresult)
} 
var prediction1=""
var prediction2=""

function speak(){
    var synth=window.speechSynthesis
    data1 = "the first prediction is" + prediction1
    data2 = "the second prediction is" + prediction2
    var utterthis = new SpeechSynthesisUtterance (data1+data2)
    synth.speak(utterthis)
}
function gotresult(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    document.getElementById("resultone").innerHTML= results[0].label
    document.getElementById("resulttwo").innerHTML= results[1].label
    if(results[0].label=="happy"){
document.getElementById("emojione").innerHTML= "&#128512;"
    }
    if(results[0].label=="sad"){
        document.getElementById("emojione").innerHTML= "&#128533;"
            }
            if(results[0].label=="confused"){
                document.getElementById("emojione").innerHTML= "&#128559;"
                    }
                    if(results[1].label=="happy"){
                        document.getElementById("emojitwo").innerHTML= "&#128512;"
                            }
                            if(results[1].label=="sad"){
                                document.getElementById("emojitwo").innerHTML= "&#128533;"
                                    }
                                    if(results[1].label=="confused"){
                                        document.getElementById("emojitwo").innerHTML= "&#128559;"
                                            }
}
}
