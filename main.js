nosex=0;
nosey=0;
squaresize=50;

function setup(){
    canvas=createCanvas(450,380);
    video=createCapture(VIDEO);
    video.size(450,380);
    canvas.position(800,120);
    video.position(50,120);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotResults);
}

function modelLoaded(){
    console.log("Model is loaded.")
}

function gotResults(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        squaresize=leftwrist-rightwrist;
    }
    
}

function draw(){
    stroke("blue");
    fill("red");
    background("white");
    square(nosex,nosey,squaresize);
}
i=0;

function stop1(){
    // document.getElementById("circlediv").style.animationName="animation2";
    if(i==0){
        document.getElementById("circlediv").style.animationName="animation2";
        i=1;
    }
    if(i==1){
        document.getElementById("circlediv").style.animationName="animation1";
        i=0;
    }
    console.log(i);
}

