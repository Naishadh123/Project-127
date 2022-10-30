music="";
music_2="";

function preload()
{
music=loadSound("music.mp3");
music_2=loadSound("music2.mp3");
}

function setup()
{
canvas=createCanvas(600,500);
canvas.position(450,225);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,0,0,600,500);
}