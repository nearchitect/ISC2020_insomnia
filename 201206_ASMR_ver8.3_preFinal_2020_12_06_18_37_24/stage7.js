function Stage7() {
  let stageNum = 7;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let cur;
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
    if (2 / 5 * width < mouseX && mouseX < 2 / 3 * width && 1 / 4 * height < mouseY && mouseY < 2.05 / 3 * height) {
      image(this.sceneManager.q8Imagewl, 0, 0, width, height);
      if (mouseIsPressed) {
        audio_vibration.play();
      } else {
        audio_vibration.stop();
      }

    } else {
      image(this.sceneManager.q8Imaged, 0, 0, width, height);
    }

    // background(255);
    textSize(30);
    textFont(uhbeeBold)
    fill(0);
    text(questions[stageNum].question, width / 2, 69);
    button0.draw();
    button1.draw();
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();

  }

  function setButton(button, index) {
    button.resize(200, 130);
    button.locate(width / 20 + (button.width + 155) * index, height * 2.2 / 5);
    button.cornerRadius = 0;
    button.textSize = 17;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.color = color(18, 18, 16);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.color = color(248, 248, 245);
      button.textColor = color(0);
    }
  }


}