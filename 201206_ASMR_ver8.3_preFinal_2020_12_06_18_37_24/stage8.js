function Stage8() {
  let stageNum = 8;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let sond;
  let cur;
  let startTime = 0;
  let time;
  let stageStart = false;
  // let audio1Play = false;
  // let audio2Play = false;
  //효과음이 짧기때문에 불리언변수 없이 플레이하는것으로 변경하였습니다
  let song1 = audio_book;
  let song2 = audio_book2;

  this.setup = function() {
    button0 = new Clickable();
    button1 = new Clickable();
    button2 = new Clickable();
    button3 = new Clickable()
    setButton(button0, 0);
    setButton(button1, 1);
    setButton(button2, 2);
    setButton(button3, 3);
  }
  this.draw = function() {
    if (!stageStart) startTime = millis();
    time = millis() - startTime;
    stageStart = true;
    if (time > 5) {
      if (mouseX < 537 && mouseX > 493 && mouseY < 442 && mouseY > 332) {
        image(this.sceneManager.q9Imageb1, 0, 0, width, height);
        textSize(16);
        fill(0);
        textFont(noto);
        textAlign(CENTER);
        text("모\n험\n자\n의\n숲", 517, 387);
        // audio1Play = !audio1Play;

      } else if (mouseX < 573 && mouseX > 537 && mouseY < 442 && mouseY > 318) {
        image(this.sceneManager.q9Imageb2, 0, 0, width, height);
        textSize(20);
        fill(0);
        textFont(nanum);
        textAlign(CENTER);
        text("말\n의\n온\n도", 556.5, 384);
        // audio2Play = !audio2Play;
      } else {
        image(this.sceneManager.q9Image, 0, 0, width, height);
      }
    }
    textSize(38);
    textFont(uhbeeBold)
    fill(255);
    text(questions[stageNum].question, width / 2, 70);
    button0.draw();
    button1.draw();
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();

  }

  function setButton(button, index) {
    button.resize(270, 70);
    button.locate(20 + (button.width + 20) * index, height / 2 - 85);
    button.cornerRadius = 10;
    button.textSize = 18;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      stageStart=false;
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.stroke = color(97, 105, 100);
      button.color = color(97, 105, 100);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(97, 105, 100);
      button.color = color(192, 200, 198);
      button.textColor = color(0);
    }
  }
  this.mousePressed = function() {
    if (mouseX < 537 && mouseX > 493 && mouseY < 442 && mouseY > 332) {
      song1.stop();
      song2.stop();
      song2.play();
    }
    if (mouseX < 573 && mouseX > 537 && mouseY < 442 && mouseY > 318) {
      song1.stop();
      song2.stop();
      song1.play();
    }
  }
}