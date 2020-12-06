function Stage4() {
  let stageNum = 4;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let phase = 0; //add
  let speed = 9;
  //let x = 3; 
  let y; 
  let audioPlay = true;
  let song;
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
    y = width * 4/5;
    song = audio_blanket3;
  }
  this.draw = function() {
    switch (phase) {
      case 0:
        image(this.sceneManager.q4Image, 0, 0, width, height);
        blackRec(y);
        if (y > 0) {
          y -= speed;
        } else {
          y = 0;
          phase = 1;
        }
        break;
      case 1:
        background(0);
        textFont(uhbeeBold)
        textSize(29);
        fill(255);
        text(questions[stageNum].question, width / 2, 130);
        button0.draw();
        button1.draw();
        break;
      default:
        break;
    }
    if (audioPlay) {
      audioPlay = false;
      song.play();
    }
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
  }

  function setButton(button, index) {
    button.resize(250, 100);
    button.locate(width / 2 - button.width / 2, -20 + height / 2 + button.height * index);
    button.cornerRadius = 0;
    button.textSize = 20;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      y = width * 4/5; 
      audioPlay = true;
      phase = 0;// reset
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.color = color(255, 255, 153, 220);
      button.textColor = color(0);
    }
    button.onOutside = function() {
      button.color = color(50);
      button.textColor = color(255);
    }
  }

  // function blurImage() {
  //   if (x < 8) {
  //    x += 2.5; //
  //    filter(BLUR, x);
  //  } else {
  //     background(0);
  //   }
  // }

  function blackRec(y) {
    fill(0, 200);
    noStroke();
    rect(0, y, width, height);

  }

}