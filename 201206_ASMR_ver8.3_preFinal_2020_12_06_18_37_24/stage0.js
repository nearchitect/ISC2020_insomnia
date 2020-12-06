
function Stage0(){
  let stageNum = 0;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let angle = 0;
  let x = 0;
  let a = 10;
  let pointXList = [];
  let pointYList = [];
  let cur;
  let audioList = [];
  
  this.setup=function(){
    audioList = [audio_COUNTRY, audio_CLASSIC, audio_EDM, audio_CAFE];
    button0 = new Clickable();
    button1 = new Clickable();
    button2 = new Clickable();
    button3 = new Clickable();
    // question = new Question();
    setButton(button0,0);
    setButton(button1,1);
    setButton(button2,2);
    setButton(button3,3);
    
  }
  this.draw=function(){
    image(this.sceneManager.q1Image, 0, 0, width, height);
    textSize(25);
    fill(255);
    textFont(uhbeeBold);
    push();
    rotate(-30);
    text("오늘 하루도 다 갔네...",-15,180);
    pop();
     textSize(40);
    text(questions[stageNum].question,width/2+140,60);
    button0.draw();
    button1.draw();
    button2.draw();
    button3.draw();
     
    //
    ///
     push();
    translate(-10, 150);
    rotate(-29);
    strokeWeight(4);
    angleMode(DEGREES);
    if (x < 127) {
      pointXList[x] = x;
      pointYList[x] = 180 - a * sin(angle);
        for (let i=0; i<x;i++){
          stroke((255 -x/2*3),255,(255 -x/2*3));
          point(pointXList[i],pointYList[i]);
        }
      angle += 12;
      a += 0.05;
      x += 1;
    } 
  if(x == 127) {
    a = random(8,12);
    angle = random(0,180);
    x = 0;
  }
   pop();
    noStroke();
      textSize(24);
    textFont(uhbeeBold);
    fill(255);
    textAlign(CENTER);
    text("* 선택한 음악이 재생됩니다!",452,385);
    push();
 cur = new Cursor();
 cur.display();
   cur.shine();
    pop();
  
  }
  function setButton(button, index){
    button.resize(250, 50);
    button.locate(width * 7/13, height/4.5 + button.height*index*1.2);
    button.cornerRadius = 10;
    button.textSize = 18;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category]+=result;
      audioList[index].play();
      me.sceneManager.showNextScene();
    }
    // button0.onPress = function(){
    //   if(audio_COUNTRY.isPlaying()) audio_COUNTRY.stop();
    //   if(audio_CLASSIC.isPlaying()) audio_CLASSIC.stop();
    //   if(audio_EDM.isPlaying()) audio_EDM.stop();
    //    if(audio_CAFE.isPlaying()) audio_CAFE.stop();
    //   audio_COUNTRY.play(); 
    //   me.sceneManager.showNextScene();
    // }
    // button1.onPress = function(){
    //   if(audio_COUNTRY.isPlaying()) audio_COUNTRY.stop();
    //   if(audio_CLASSIC.isPlaying()) audio_CLASSIC.stop();
    //   if(audio_EDM.isPlaying()) audio_EDM.stop();
    //    if(audio_CAFE.isPlaying()) audio_CAFE.stop();
    //   audio_CLASSIC.play(); 
    //   me.sceneManager.showNextScene();
    // }
    // button2.onPress = function(){
    //   if(audio_COUNTRY.isPlaying()) audio_COUNTRY.stop();
    //   if(audio_CLASSIC.isPlaying()) audio_CLASSIC.stop();
    //   if(audio_EDM.isPlaying()) audio_EDM.stop();
    //    if(audio_CAFE.isPlaying()) audio_CAFE.stop();
    //   audio_EDM.play();
    //   me.sceneManager.showNextScene();
    // }
    // button3.onPress = function() {
    //   if(audio_COUNTRY.isPlaying()) audio_COUNTRY.stop();
    //   if(audio_CLASSIC.isPlaying()) audio_CLASSIC.stop();
    //   if(audio_EDM.isPlaying()) audio_EDM.stop();
    //    if(audio_CAFE.isPlaying()) audio_CAFE.stop();
    //   audio_CAFE.play(); 
    //   me.sceneManager.showNextScene();
    //  }
    
    button.onHover = function() {
      button.stroke = color(190,180,180);
      button.color = color(84,77,75);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(190,180,180);
      button. color = color(190,180,180);
      button.textColor = color(0);
    }
  }
}