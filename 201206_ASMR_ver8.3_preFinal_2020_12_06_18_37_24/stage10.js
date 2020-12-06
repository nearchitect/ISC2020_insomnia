function Stage10() {
  let stageNum = 10;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let x = 3; //add
  let me = this;
  let cur;
  let circleR = 30;
  let audioPlay = true;
  let circleX = 85;
  let circleY = 529;
  let buttonUp = false;
  let song1 = audio_snore;
  
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
  
    image(this.sceneManager.q11Image, 0, 0, width, height);
    textFont(uhbeeBold)
    textSize(29);
    fill(255);
    text(questions[stageNum].question, width / 2, 60);
    if(buttonUp){
    button0.draw();
    button1.draw();
    }
    fill(255);
    textFont(uhbeeBold);
    textSize(25);
    textAlign(CENTER);
    text("코골이를 멈추기 위해 이불을 클릭해주세요!",450,570);
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
    if(audioPlay){
      audioPlay=false;
      song1.play();
    }
  }

  function setButton(button, index) {
    button.resize(360, 80);
    button.locate(width / 2 - button.width / 2, -184.5 + height / 2 + (button.height+10) * index);
    button.cornerRadius = 20;
    button.textSize = 20;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      buttonUp = !buttonUp;
      audioPlay=true;
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.color = color(255,80);
      button.textColor = color(255);
  
    }
    button.onOutside = function() {
      button.color = color(255);
      button.textColor = color(0);
    }
  }
  this.mousePressed = function() {
   if(0<mouseX&&mouseX<294&&486<mouseY&&mouseY<600){
        song1.stop();
     buttonUp = true;
     
    }
  }
  
}