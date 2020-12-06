class Cursor {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.c1 = color(255, 255, 153, 150);
    this.c2 = color(255, 150);
  }
  display() {
    noCursor();
    noStroke();
    rectMode(CENTER);
     fill(255, 239, 61);
    ellipse(this.x,this.y-1,10,5);
    
    fill(255, 239, 61);
    quad(this.x - 8, this.y, this.x + 8, this.y, this.x + 4, this.y +10, this.x - 4, this.y+10);
    
 // fill(242, 206, 0);
 //    rect(this.x,this.y+12,20,6);
    fill(0);
    rect(this.x, this.y-0.5, 16, 1.5);
    fill(0);
    rect(this.x, this.y + 20, 8, 20);
    fill(181, 166, 0);
    rect(this.x, this.y + 32, 8, 4);

   fill(255, 220, 20);
    rect(this.x, this.y + 18, 5,6,5);
     // fill(0);
     // rect(this.x, this.y + 17, 2, 2, 2);
 
  }

  shine() {
     if (mouseIsPressed){
    noFill();
    let l = this.y - 30;
    let h = 27.8;
    let w = 22;
    for (let i = l; i <= l + h; i++) {
      let inter = map(i, l, l + h, 0, 1);
      let c = lerpColor(this.c1, this.c2, inter);
      stroke(c);
      line(this.x + w, i, this.x - w, i);
      if (w > 0) {
        w = w - 0.5;
      }
    }
     }

  }

}

