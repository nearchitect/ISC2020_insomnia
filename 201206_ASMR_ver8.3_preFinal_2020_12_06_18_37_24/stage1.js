function Stage1() {
  let stageNum = 1;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let cur;
  let phase = 0;
  let song;
  let startTime = 0;
  let time;
  let stageStart = false;
  let audioPlay = true;
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
    song = audio_faucet;
  }
  this.draw = function() {
   if (!stageStart) startTime = millis(); 
    time = millis() - startTime; 
    stageStart = true;
    switch (phase) {
      case 0:
        if (dist(mouseX, mouseY, 441.5, 323.687) <= 53.441 * (1 / 2)) {
          image(this.sceneManager.q15Imagewl, 0, 0, width, height);
        } else {
          image(this.sceneManager.q15Image, 0, 0, width, height);
        }
        textFont(uhbeeBold);
        textSize(30);
        fill(255);
        text("얼른 씻어야지!", width / 2, height / 2);
        break;

      case 1:
        image(this.sceneManager.q2Image, 0, 0, width, height);
        //background(255);
        textSize(26);
        fill(255);
        stroke(255, 255, 153, 40);
        textFont(uhbeeBold);
        text(questions[stageNum].question, width / 2 + 130, 60);
        button0.draw();
        button1.draw();
        button2.draw();
        button3.draw();
        break;
      default:
        break;
    }

    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
    if (audioPlay) {
      audioPlay = false;
      song.play();
    }
  }

  this.mouseClicked = function() {
    switch (phase) {
      case 0:
        if (time > 1000 && dist(mouseX, mouseY, 441.5, 323.687) <= 53.441 * (1 / 2)) {
          audio_door.play();
          phase = 1;
        }
        break;
      case 1:
        break;
    }


  }


  function setButton(button, index) {
    button.resize(261, 50);
    button.locate(width * 6 / 11, height / 4.5 + button.height * index * 1.1);
    button.cornerRadius = 10;
    button.textSize = 16;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      song.stop();
      me.sceneManager.showNextScene();
      audioPlay = true;
      phase = 0;
    }
    button.onHover = function() {
      //button.color = color(50);
      button.color = color(55, 65, 70);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      //button.stroke = color(122, 142, 152);
      button.stroke = color(191, 201, 206);
      //button. color = color(165, 174, 179);
      button.color = color(157, 172, 179);
      button.textColor = color(0);
    }
  }

}