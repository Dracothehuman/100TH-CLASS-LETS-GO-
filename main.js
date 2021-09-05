var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("speak").innerHTML = " ";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var see = event.results[0][0].transcript;
    console.log(see);
    document.getElementById("speak").innerHTML = see;
    if (see == "take my selfie"){
        console.log(see)
        speak()
    }
    
}

function speak()
{
    var synth = window.speechSynthesis;

    var storing = "Preparing to take photo. This should take 5 seconds.";

    var utterThis = new SpeechSynthesisUtterance(storing);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        takesnapshot();
        save();
    },5000);

}

camera = document.getElementById("camera");

Webcam.set({
    width:400,
    height:400,
    image_format:"png",
    png_quality:90
});

function takesnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("selfie").innerHTML='<img id="selfie_boi" src="'+data_uri+'">';
    });
}

function save()
{
    link=document.getElementById("pog");
    image=document.getElementById("selfie_boi").src;
    link.href=image;
    link.click()
}
