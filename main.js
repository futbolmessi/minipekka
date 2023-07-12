xnariz=0;
ynariz=0;

function preload() {
    balonfcb=loadImage("mini-7288447_640.webp");
}
function setup() {
    canvas=createCanvas(399,299);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,ok);
    poseNet.on("pose", grl)
}
function ok() {
    console.log("activada");
}
function grl(parametro) {
    if (parametro.length>0) {
        xnariz=parametro[0].pose.nose.x-160;
        ynariz=parametro[0].pose.nose.y-250;
    }
}

function draw() {
    image (video,0,0,399,299);
    image(balonfcb,xnariz,ynariz,50,60)
}

function boton() {
    save("guardar.jpg")    
}