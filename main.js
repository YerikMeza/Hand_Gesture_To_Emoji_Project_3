Webcam.set({
    height: 280,
    width: 330,
    image_format: "png",
    image_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(" #camera ")

function take_snapshot() {
    console.log("Inside Take Snapshot")
    Webcam.snap(function (data_uri){
       document.getElementById("result").innerHTML = "<img id= 'captured_image' src='" + data_uri + "'/>";
    });
}

console.log("ml5 version:", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/w9Gqr798l/model.json",modelLoaded)

function modelLoaded() {
    console.log("Model Loaded!")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Perfect") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }

        if(results[0].label == "Thumbs Up") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }

        if(results[0].label == "Thumbs Down") {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }

        if(results[0].label == "Fist") {
            document.getElementById("update_emoji").innerHTML = "&#9994;";
        }

        if(results[0].label == "Hand") {
            document.getElementById("update_emoji").innerHTML = "&#128400;";
        }

        if(results[0].label == "Up") {
            document.getElementById("update_emoji").innerHTML = "&#128070;";
        }

        if(results[0].label == "Down") {
            document.getElementById("update_emoji").innerHTML = "&#128071;";
        }



        if(results[1].label == "Perfect") {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }

        if(results[1].label == "Thumbs Up") {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }

        if(results[1].label == "Thumbs Down") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }

        if(results[1].label == "Fist") {
            document.getElementById("update_emoji2").innerHTML = "&#9994;";
        }

        if(results[1].label == "Hand") {
            document.getElementById("update_emoji2").innerHTML = "&#128400;";
        }

        if(results[1].label == "Up") {
            document.getElementById("update_emoji2").innerHTML = "&#128070;";
        }

        if(results[1].label == "Down") {
            document.getElementById("update_emoji2").innerHTML = "&#128071;";
        }
    }
}