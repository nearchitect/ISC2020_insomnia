function Stage5(){
  let stageNum = 5;
  let button0;
  let button1;
  let button2;
  let button3;
  let question;
  let me = this;
  let cur;
  this.setup=function(){
    button0 = new Clickable();
    button1 = new Clickable();
    button2 = new Clickable();
    button3 = new Clickable();
    // question = new Question();
    setButton(button0,0);
    setButton(button1,1);
    setButton(button2,2);
    setButton(button3,3);
  }
  this.draw=function(){
    image(this.sceneManager.q6Image, 0, 0, width, height);
    //background(255);
    textSize(29);
    textFont(uhbeeBold)
    fill(255);
    text(questions[stageNum].question,width/2,39);
    button0.draw();
    button1.draw();
   push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
  }
  function setButton(button, index){
    button.resize(250, 100);
    button.locate(width * 3/4 -button.width/2, height / 5+button.height*index);
    button.cornerRadius = 10;
    button.textSize = 19;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category]+=result;
      me.sceneManager.showNextScene();
     }
    button.onHover = function() {
      button.color = color(81, 81, 91);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(145, 145, 157)
      button. color = color(122, 122, 137);
      button.textColor = color(22, 22, 24);
    }
  }
}