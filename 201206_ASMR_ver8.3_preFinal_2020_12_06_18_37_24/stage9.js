//주형 수정파트Q10
function Stage9() {
  let stageNum = 9;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let cur;
  let startTime = 0;
  let startTime2 = 0;
  let time;
  let wx1 = 39,
    wx2 = 563,
    wy1 = 73,
    wy2 = 444; //창문 바깥쪽 네모의 좌표
  let sx1 = 107,
    sx2 = 375,
    sy1 = 97,
    sy2 = 417; //창문 안쪽 네모의 좌표
  let drops = [];
  let snowTimer = 1000;
  let dropLimit = 1000;
  //다음 스테이지로 넘어갈때 초기화해줄 변수들입니다
  let phase = 0;
  let audioPlay = true;
  let stageStart = false;
  let snowStart = false;
  this.setup = function() {
    button0 = new Clickable();
    button1 = new Clickable();
    button2 = new Clickable();
    button3 = new Clickable();
    setButton(button0, 0);
    setButton(button1, 1);
    setButton(button2, 2);
    setButton(button3, 3);
  }
  this.draw = function() {
    if (!stageStart) startTime = millis(); //스테이지에 진입한 시간을 startTime에 저장합니다
    time = millis() - startTime; //time은 stage 진입 이후 흐른 시간입니다
    stageStart = true; //스테이지가 시작되었습니다
    textSize(33);
    textFont(uhbeeBold)
    fill(255);
    switch (phase) {
      case 0:
        if (audioPlay) audio_wind.play();
        audioPlay = false;
        //소리가 한번만 나야하므로 재생 후 불리언 값을 false로 바꿔주었습니다
        image(this.sceneManager.q10ImageB, 0, 0, width, height);
        text("참, 근데 오늘 눈 온다고 했는데?", width / 2, 155);
        if (time > 3000) image(this.sceneManager.q10ImageC, 0, 0, width, height);
        //3초동안 누르지 않으면 지시선이 나타나 창문을 누르라고 알려줍니다
        break;
      case 1:
        image(this.sceneManager.q10Image, 0, 0, width, height);
        text(questions[stageNum].question, width / 2, 155);
        if (!snowStart) {
          snowStart = true; //눈이 내리기 시작했습니다
          startTime2 = millis(); //눈 내리기 시작한 시간을 startTime2로 정합니다
        }

        if (millis() > startTime2) {
          drops.push(new Snowdrop());
          startTime += 10;
        }
        if (dropLimit < drops.length) drops = []; // 1000개 만들면 다시 시작됩니다
        noStroke();
        for (let drop of drops) {
          drop.move();
          drop.display();
        }
        if (snowStart & millis()-startTime2 > 3000) {
          button0.draw();
          button1.draw();
          button2.draw();
          button3.draw();
        }
        //눈이 내리기 시작하고 3초가 흐르면 선택지가 표시됩니다
        break;
      default:
        break;
    }
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    //커서가 draw의 가장 마지막에 와야 버튼 위로 커서가 올라오게 됩니다
    pop();
  }
  this.mouseClicked = function() {
    switch (phase) {
      case 0:
        if (time > 1000 && wx1 < mouseX && mouseX < wx2 && wy1 < mouseY && mouseY < wy2) phase = 1; // 스테이지에 진입하고 1초 동안은 창문이 안눌리게 설정하였습니다
        break;
      case 1:
        break;
    }
  }

  function setButton(button, index) {
    button.resize(500, 50);
    button.locate(50, height / 2 + 60 + (button.height + 5) * index);
    button.cornerRadius = 10;
    button.textSize = 16.3;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      phase = 0;
      audioPlay = true;
      stageStart = false;
      snowStart = false;
      drops = []; 
      audio_wind.stop();
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.color = color(0, 210);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(145, 145, 157)
      button.color = color(0, 150);
      button.textColor = color(255);
    }
  }
  class Snowdrop {
    constructor() {
      this.r = 2;
      this.x = random(sx1, sx2);
      this.y = sy1 + this.r;
      this.c = color(240);
      this.speed = random(2, 5);
    }
    move() {
      this.y += this.speed;
      if (this.y > sy2) this.y = 999;
    }
    display() {
      fill(this.c);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
  }
}