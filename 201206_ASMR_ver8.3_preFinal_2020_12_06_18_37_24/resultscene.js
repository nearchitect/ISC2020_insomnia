function ResultScene(){
  let buttonLink;
  let buttonReset;
  let me = this;
  var oGame;
  this.setup = function(){
     // find a different scene using the SceneManager
        oGame = this.sceneManager.findScene( Result ).oScene;
    buttonLink = new Clickable();
    buttonReset = new Clickable();
    setLinkButton(buttonLink);
    setResetButton(buttonReset);
  }
  this.draw = function(){
   // read the injected bkImage property
        image( types[MBTI].image, 0, 0,width,height);
        // invoke a method from a different scene
        oGame.displayResult(MBTI);
    buttonLink.draw();
    buttonReset.draw();
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
    }
  this.keyPressed = function(){
      MBTI = "";
  scoreMBTI[0]=0;
  scoreMBTI[1]=0;
  scoreMBTI[2]=0;
  scoreMBTI[3]=0;
    clear();
    createCanvas(600,600);
    this.sceneManager.showScene( Intro );
    audio_COUNTRY.stop();
    audio_EDM.stop();
    audio_CAFE.stop();
    audio_CLASSIC.stop();
  }
  function setLinkButton(button) {
    button.resize(125, 40);
    button.locate(440, 35);
    button.cornerRadius = 10;
    button.textSize = 24;
    button.textFont = noto;
    button.text = "들어보기";
    button.onPress = function() {
      window.open(types[MBTI].link)
      audio_COUNTRY.stop();
    audio_EDM.stop();
    audio_CAFE.stop();
    audio_CLASSIC.stop();
    }
    button.onHover = function() {
      button.color = color(55, 65, 70);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(191, 201, 206);
      button.color = color(230, 230, 230);
      button.textColor = color(0);
    }
  }
  function setResetButton(button){
      button.resize(125, 40);
    button.locate(35, 35);
    button.cornerRadius = 10;
    button.textSize = 24;
    button.textFont = noto;
    button.text = "다시하기";
    button.onPress = function() {
      audio_COUNTRY.stop();
    audio_EDM.stop();
    audio_CAFE.stop();
    audio_CLASSIC.stop();
      MBTI = "";
  scoreMBTI[0]=0;
  scoreMBTI[1]=0;
  scoreMBTI[2]=0;
  scoreMBTI[3]=0;
    clear();
    createCanvas(600,600);
    me.sceneManager.showScene( Intro );
    }
    button.onHover = function() {
      button.color = color(55, 65, 70);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(191, 201, 206);
      button.color = color(230, 230, 230);
      button.textColor = color(0);
    }
  }
  }
