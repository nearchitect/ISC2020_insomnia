function Stage3(){
  let stageNum = 3;
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
    image(this.sceneManager.q4Image, 0, 0, width, height);
    //background(255);
    textFont(uhbeeBold)
    textSize(25);
    fill(0);
    text(questions[stageNum].question, width / 2, 35);
    button0.draw();
    button1.draw();
    button2.draw();
    button3.draw();
    push();
    cur = new Cursor();
    cur.display();
    cur.shine();
    pop();
  }
  function setButton(button, index){
 button.resize(390, 50);
    button.locate(width / 2 - button.width / 2, height / 4.3 + button.height * index);
    button.cornerRadius = 10;
    button.textSize = 16;
    button.textFont = noto;
    button.text = questions[stageNum].options[index];
    button.onPress = function() {
      let category = questions[stageNum].category;
      let result = questions[stageNum].point[index];
      scoreMBTI[category] += result;
      me.sceneManager.showNextScene();
    }
    button.onHover = function() {
      button.color = color(19);
      button.textColor = color(255);
    }
    button.onOutside = function() {
      button.stroke = color(129, 134, 138);
      button.color = color(59, 59, 59, 150);
      button.textColor = color(255);
    }
  }
}