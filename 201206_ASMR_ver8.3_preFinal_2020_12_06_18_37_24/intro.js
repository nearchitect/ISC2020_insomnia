function Intro() {
  let startButton;
  let me = this;
  let x;
  let cur;
    let audio1Play = false;
  let audio2Play = false;
  let audio3Play = false;
  let wx1 = 392, wx2 = 547, wy1 = 93, wy2= 318, wx3 = 563, wx4 = 600;
  this.setup = function() {
    createCanvas(600, 600);
    startButton = new Clickable();

  }
  this.draw = function() {
    image(this.sceneManager.bkImage, 0, 0, width, height);
    textFont(noto);
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text("선택지가 보이지 않는 질문에서는 화면을 클릭하여 숨겨진 소리를 찾아주세요!\n소리에 집중하도록 사운드를 켜고, 이어폰을 사용해주세요!",width/2,567);
    
    start();
    startButton.draw();
     push();
    noCursor();
    cur = new Cursor();
 cur.display();
   cur.shine();
    pop();
    if (audio1Play){
      audio_window1.play();
      audio1Play = !audio1Play;
    }
    if (audio2Play){
      audio_blanket2.play();
      audio2Play = !audio2Play;
    }
    if (audio3Play){
      audio_blanket1.play();
      audio3Play = !audio3Play;
    }
       
  }
  function start() {
    startButton.locate(430,480);
    startButton.cornerRadius = 20;
    startButton.textSize = 30;
    startButton.textFont = noto;
    startButton.text = "시작하기";
    startButton.resize(150, 55);
    startButton.onPress = function() {
      me.sceneManager.showScene(Stage0);
    }
    startButton.onHover = function() {
      startButton.color = color(100,150);
      startButton.textColor = color(255);
    }
    startButton.onOutside = function() {
      startButton.stroke = color(255,150);
      startButton.color = color(255,150);
      startButton.textColor = color(0);
    }
  }
    this.mousePressed = function() {
      if (wx1 < mouseX && mouseX < wx2 && wy1 < mouseY && mouseY < wy2||wx3 < mouseX && mouseX < wx4 && wy1 < mouseY && mouseY < wy2){ 
      audio1Play = !audio1Play;
    }
      if(361 < mouseX && mouseX < 472 && 394 < mouseY && mouseY < 534){
         audio2Play = !audio2Play;
         }
      if(10 < mouseX && mouseX < 600 && 519 < mouseY && mouseY < 600){
         audio3Play = !audio3Play;
         }
  }
  
}

