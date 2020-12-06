//주형 수정파트Q3
function Stage2() {
  let stageNum = 2;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let cur;
  let timer;
  let intTime;
  let wx1 = 210,
    wx2 = 486,
    wy1 = 122,
    wy2 = 486; //창문 범위를 설정
  //아래는 초기화해야하는 변수들
  let windowIsClicked = false; //창문을 클릭했는지 알려주는 불리언변수
  let stageStarted = false; //스테이지가 시작되었는지 알려주는 불리언변수
  let audioPlay = false; //소리가 나왔는지 알려주는 불리언변수
  let windowMove = 0; // 창문의 이동시간
  let windowMoveDist = 0; // 창문의 실제 이동거리
  //커서
  noCursor(); // 노커서를 설정해서 커서가 안보이게
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
    image(this.sceneManager.q3ImageA, 0, 0, width, height); //배경이미지
    image(this.sceneManager.q3ImageB, windowMoveDist, 0, width, height); //움직일창문png
    textFont(uhbeeBold)
    textSize(30);
    fill(255);
    text(questions[stageNum].question, width / 2, 50); //질문은 항상 표시
    if (windowIsClicked) {
      if (windowMove < 50) {
        windowMove++; //클릭하면 50프레임동안 창문이열림
        windowMoveDist += -0.0048 * (windowMove) * (windowMove - 50); //창문이 일정한 속도로 열리면 어색해서 이차함수로 거리를 정의
      }
      if (windowMove >= 50) {
        button0.draw();
        button1.draw();
        button2.draw();
        button3.draw(); //창문을 다 열면 버튼을 display
      }
      if (!audioPlay) audio_window.play();
      audioPlay = true;
    }
    if (!stageStarted) {
      timer = millis();
      stageStarted = true;
    }
    if ((millis() - timer) > 4000 && !windowIsClicked) {
      image(this.sceneManager.q3ImageC, 0, 0, width, height); //점선보조선표시  
    }
    intTime = floor(millis() / 300);
    if (intTime % 3 == 0 || intTime % 2 == 0 || intTime % 5 == 0) image(this.sceneManager.q3ImageD, 0, 0, width, height); 
      push();
      cur = new Cursor();
      cur.display();
      cur.shine();
      pop(); //커서를 제일 마지막에 써야 버튼 위로 커서가 보임
  }
//램프 점멸이 불규칙적으로 보이게 하기 위해 현재 초와 2,3,5가 서로소일떄만 램프가 꺼지게 했습니다
  this.mousePressed = function() {
    if (!windowIsClicked) {
      if (wx1 < mouseX && mouseX < wx2 && wy1 < mouseY && mouseY < wy2) windowIsClicked = true;
    }
  }

  function setButton(button, index) {
    button.resize(300, 50);
    button.locate(width / 1.9615 + 50 - button.width / 2, height / 2.9 + button.height * index); //size increase
    button.cornerRadius = 0;
    button.textSize = 16;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      if (windowIsClicked) {
        let category = questions[stageNum].category;
        let result = questions[stageNum].point[index];
        scoreMBTI[category] += result;
        windowIsClicked = false; // 재실행을 위한 초기화
        windowMove = 0;
        windowMoveDist = 0;
        stageStarted = false;
        audioPlay = false;
        me.sceneManager.showNextScene();
      }
    }
    button.onHover = function() {
      button.color = color(14, 15, 24);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(39, 44, 73);
      button.color = color(25, 28, 47);
      button.textColor = color(255);
    }
  }
}