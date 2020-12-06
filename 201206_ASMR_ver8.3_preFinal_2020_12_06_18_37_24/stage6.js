function Stage6() {
  let stageNum = 6;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let song, song1, song2, song3; //add crash_sound
  let me = this;
  let phase = 0;
  let cur;
  let stageStart = false;
  let time, startTime;
  let audioPlay = true;
  let audioPlay1 = true;
  let audioPlay2 = true;
  this.setup = function() {
    button0 = new Clickable();
    button1 = new Clickable();
    //  button2 = new Clickable();
    //  button3 = new Clickable();
    // question = new Question();
    setButton(button0, 0);
    setButton(button1, 1);
    song = audio_crash;
    song1 = audio_wack;
    song2 = audio_squeak;
    song3 = audio_switch;
  }
  this.draw = function() {
    ///  if (!stageStart) startTime = millis();
    //   time = millis() - startTime; //time은 stage 진입 이후 흐른 시간입니다
    //   stageStart = true;
    switch (phase) {
      case 0:
        image(this.sceneManager.q7Imaged, 0, 0, width, height);
        if (audioPlay) {
          audioPlay = !audioPlay;
          song.play();
        }
        textFont(uhbeeBold)
        textSize(30);
        fill(255); //question 문구도 변경되었어요!
        text("그 때 갑자기 들리는 쿵 소리!\n아이 참, 뭐야?", width / 3.65, 175);
        if (376.894 <= mouseX && mouseX <= 376.894 + 26.938 && 285.844 <= mouseY && mouseY <= 285.844 + 48.39) {
          image(this.sceneManager.q7ImageS1, 0, 0, width, height);
        }

        if (379.102 <= mouseX && mouseX <= 379.102 + 27.9 && 372.585 <= mouseY && mouseY <= 372.585 + 52.66) {
          image(this.sceneManager.q7ImageS2, 0, 0, width, height);
        }

        if (317.614 <= mouseX && mouseX <= 317.614 + 30.061 && 333.77 <= mouseY && mouseY <= 333.77 + 46.2) {
          image(this.sceneManager.q7ImageS3, 0, 0, width, height);
        }
        break;

      case 1:
        image(this.sceneManager.q7ImageS1, 0, 0, width, height);
       // text("엥?", width / 3.65, 175);
        song1.play();
        phase = 0;
        break;
      case 2:
        image(this.sceneManager.q7ImageS2, 0, 0, width, height);
      //  text("엥?", width / 3.65, 175);
        song2.play();
        phase = 0;
        break;
      case 3:
        if (audioPlay2) {
          audioPlay2 = false;
          song3.play();
        }
        image(this.sceneManager.q7ImageS3, 0, 0, width, height);
        textFont(uhbeeBold);
        textSize(30);
        fill(255);
        text(questions[stageNum].question, width / 3.65, 175);
        button0.draw();
        button1.draw();
        break;
      default:
        break;
    }
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
  }
  this.mouseClicked = function() {
    switch (phase) {
      case 0:
        if (376.894 <= mouseX && mouseX <= 376.894 + 26.938 && 285.844 <= mouseY && mouseY <= 285.844 + 48.39) {
          phase = 1;
        }
        if (379.102 <= mouseX && mouseX <= 379.102 + 27.9 && 372.585 <= mouseY && mouseY <= 372.585 + 52.66) {
          phase = 2;
        }
        if (317.614 <= mouseX && mouseX <= 317.614 + 30.061 && 333.77 <= mouseY && mouseY <= 333.77 + 46.2) {
          phase = 3;
        }
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  function setButton(button, index) {
    button.resize(250, 100);
    button.locate(width / 5 - button.width / 3, height / 2.3 + (button.height + 30) * index);
    button.cornerRadius = 255;
    button.textSize = 18;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      audioPlay = true;
      audioPlay2 = true;
      phase = 0;
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.color = color(46, 43, 41);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      //button.stroke = color(105, 97, 95);
      button.stroke = color(2, 0, 1);
      button.color = color(205, 201, 201);
      button.textColor = color(0);
    }
  }



}