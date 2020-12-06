function Stage11() {
  let stageNum = 11;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let x = 3; //add
  let me = this;
  let cur;
  let time;
  let startTime = 0;
  let song = audio_foot;
  let audioPlay = true;
  let stageStart = false;
  this.setup = function() {
    button0 = new Clickable();
    button1 = new Clickable();
    button2 = new Clickable();
    button3 = new Clickable();
    // question = new Question();
    setButton(button0, 0);
    setButton(button1, 1);
    setButton(button2, 2);
    setButton(button3, 3);
  }
  this.draw = function() {
      background(255);
    if (!stageStart) startTime = millis();
     time = millis() - startTime;
    stageStart = true;
    
    if (audioPlay) audio_foot.play();
        audioPlay = false;
    
    if (time> 3000){
    textFont(uhbeeBold);
    textSize(140);
    fill(173,160,220);
    textAlign(CENTER);
    text("이거 받아!",width/2,height/2);
    }
    if (time > 4000){
      background(255);
    image(this.sceneManager.q12Image, 0, 0, width, height);
      push();
               translate(-10, 150);
    rotate(-23);
    textFont(uhbeeBold);
   // stroke(211, 207, 218, 200);
  //  strokeWeight(5);
    textSize(30);
    fill(57, 51, 66);
    text(questions[stageNum].question, width / 2 -85, height/2-100 );
      pop();
    button0.draw();
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
  }
  }

  function setButton(button, index) {
    button.resize(150, 60);
    button.locate(width / 2 +105 ,  height/2 + 215 + button.height * index);
    button.cornerRadius = 30;
    button.textSize = 23;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      stageStart = !stageStart
      audioPlay = !audioPlay;
       textFont(uhbeeBold)
      me.sceneManager.timer = millis();//누를때 밀리스 저장해놓고 나중에 타이머로 사용
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
     button.color = color(255,10);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(255);
      button.color = color(255,100);
      button.textColor = color(255);
    }
  }
}