video = "";
function setup(){
    canvas = createCanvas(400,350);
    canvas.position(500,250);
}
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = Object Detecting";
}
function modelLoaded(){
    console.log("cocossd initialised");
    status = true;
    video.speed(1);
    video.loop();
    video.volume(0);
}
function draw(){
    image(video,0,0,400,350);
}