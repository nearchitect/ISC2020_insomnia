function Result() {
  let wave, wave2, wave3;
  let me = this;
  this.setup = function() {
    wave = new Sine(30, 1);
    wave2 = new Sine(50, 0.9);
    wave3 = new Sine(20, 0.8);
    wave.undulate();
    wave2.undulate();
    wave3.undulate();
  }
  this.draw = function() {
    background(0);
    fill(255);
    textSize(50);
    text("결과 분석 중", width / 2, height / 2 + 150);
    wave.move(6);
    wave2.move(6);
    wave3.move(6);
    push();
    // fill(100);
    stroke(random(150, 255),random(150, 255), random(150, 255)); //color
    wave.display();
    // stroke(random(150, 255),random(150, 255), random(150, 255)); //color
    wave2.display();
    // stroke(random(150, 255),random(150, 255), random(150, 255)); //color
    wave3.display();
    pop();
    //4초간 결과 분석하게
    if (millis() - this.sceneManager.timer > 4000) {
      classifyMBTI(scoreMBTI);
      this.sceneManager.showScene(ResultScene);
      // divergePaths();
    }
  }

  function classifyMBTI(score) {
    if (score[0] >= 0) MBTI = "E";
    else MBTI = "I";
    if (score[1] >= 0) MBTI += "S";
    else MBTI += "N";
    if (score[2] >= 0) MBTI += "T";
    else MBTI += "F";
    if (score[3] >= 0) MBTI += "J";
    else MBTI += "P";
  }
  // function divergePaths(){
  //   if(MBTI=="ESFP") me.sceneManager.showScene(ESFP);
  //   if(MBTI=="ESTJ") me.sceneManager.showScene(ESTJ);
  // }
  this.displayResult = function(type) {
    push();
    fill(0, 100);
    rectMode(CENTER);
    rect(width / 2, height / 2, 550, 550); //가운데 생기는 반투명사각형
    fill(255);
    textFont(uhbeeBold);
    textSize(60);
    text("너를 잠재워줄 ASMR은", width / 2, height / 2 -155)
    // textSize(30);
    // text("\n다시 시작하려면 아무 키나 누르세요", width / 2, height / 2 - 250); 
    textSize(40); 
    //string을 identifier로 변환해서 결과값을 찾음(types.type으로하면안됨)
    textAlign(CENTER, TOP);
    text(types[type].description, width / 2, height / 2 + 140);
    pop();
    //rectMode(CENTER)와 clickable이 충돌하기 때문에 push-pop을 안해주면 문제가생김
  }
  class Sine {
    constructor(a, f) {
      this.x = 0;
      this.a = a;
      this.angle = 0;
      this.lowEnd = width;
      this.sineLength = 50;
      this.highEnd = this.lowEnd + 15 * this.sineLength;
      this.totalLength = 2 * width + 15 * this.sineLength
      this.ptXList = [];
      this.ptYList = [];
      this.freq = f;
    }
    undulate() {
      angleMode(DEGREES);
      for (let i = 0; i <= this.totalLength; i++) {
        this.ptXList[i] = i;
        if (i < this.lowEnd || i > this.highEnd) this.ptYList[i] = height / 2
        else {
          this.ptYList[i] = height / 2 + this.a * sin(this.freq * this.angle);
          this.angle += 12;
          this.a = this.a * random(0.9, 1.1);
        }
      }
    }
    move(t) {
      for (let i = 0; i <= this.totalLength; i++) {
        this.ptXList[i] -= t;
      }
      if (this.ptXList[0] <= -(this.totalLength - width)) {
        for (let i = 0; i <= this.totalLength; i++) {
          this.ptXList[i] = i;
        }
      }
    }
    display() {
      for (let i = 0; i <= this.totalLength; i++) {
        strokeWeight(4);
        // stroke(random(150, 255),random(150, 255), random(150, 255));
        point(this.ptXList[i], this.ptYList[i]);
      }
    }
  }

}