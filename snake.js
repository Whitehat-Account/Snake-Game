class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }

  eat(pos) {
    var dis = dist(this.x, this.y, pos.x, pos.y);
    if (dis < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  /*(pos) {
    var dis = dist(this.x, this.y, pos.x, pos.y);
    if (dis < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }*/

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  death() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var dis = dist(this.x, this.y, pos.x, pos.y);
      var dis1 = dist(this.x, this.y, obstacle.x, obstacle.y);

      if (dis < 1 || dis1 < 1) {
        this.total = 0;
        this.tail = [];
        deathCount++;
        foodCount = 0;
      }
    }
  }  

  update() {
    if (this.total == this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  display() {
    for (var i =0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    fill(255);
    rect(this.x, this.y, scl, scl);
  }
}