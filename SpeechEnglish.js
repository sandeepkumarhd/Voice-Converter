
let btn = document.querySelector("button");

function show(){

let rec = new webkitSpeechRecognition();
rec.lang="en-GB"
rec.onresult = function (event){
    document.getElementById("hindi").textContent=event.results[0][0].transcript;
}
rec.start();

}

btn.addEventListener("click",show)