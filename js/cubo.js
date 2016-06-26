
/* Cubo */

let e1, e2, e3, e4 = {};
let s1, s2, s3, s4 = {};
let canvas;
let cara1; 
let cara2;
let moveN;
let p;
let p2;
let speed;

let large;

function positions(l, s){
    moveN = 1;
    
    speed = s;
    
    large = l;
    
    p = {x:windowWidth/2 -3, y:windowHeight/2}
    p2 = {x:windowWidth/2 -3, y:windowHeight/2-large}
    
    
    
    cara1 = [
        e1 = {
            x:p.x, y:p.y,
            move1:{x:p.x - large, y: p.y -large},
            move2:{x:p.x, y:p.y - large *2},
            move3:{x:p.x + large, y: p.y - large},
            move4:{x:p.x, y:p.y}
        },


        e2 = {x:p.x - large, y: p.y -large,
            move1:{x:p.x, y:p.y - large*2},
            move2:{x:p.x + large, y: p.y - large},
            move3:{x:p.x, y:p.y},
            move4:{x:p.x - large, y: p.y -large}
        },


        e3 = {
            x:p.x + large, y: p.y - large,
            move1:{x:p.x, y:p.y},
            move2:{x:p.x - large, y: p.y -large},
            move3:{x:p.x, y:p.y - large*2},
            move4:{x:p.x + large, y: p.y - large}
        },
        
        e4 = {
            x:p.x, y:p.y - large*2,
            move1:{x:p.x + large, y: p.y - large},
            move2:{x:p.x, y:p.y},
            move3:{x:p.x - large, y: p.y -large},
            move4:{x:p.x, y:p.y - large*2}
        }
    ]

    cara2 = [

        e8 = {
            x:p2.x, y:p2.y,
            move1:{x:p2.x+large, y:p2.y+large},
            move2:{x:p2.x, y: p2.y + large*2},
            move3:{x:p2.x-large, y:p2.y + large},
            move4:{x:p2.x, y:p2.y}
        },
        e5 = {
            x:p2.x-large, y:p2.y + large,
            move1:{x:p2.x, y:p2.y},
            move2:{x:p2.x+large, y:p2.y+large},
            move3:{x:p2.x, y: p2.y + large*2},
            move4:{x:p2.x-large, y:p2.y + large}
        },

        e7 = {
            x:p2.x, y: p2.y + large*2,
            move1:{x:p2.x-large, y:p2.y + large},
            move2:{x:p2.x, y:p2.y},
            move3:{x:p2.x+large, y:p2.y+large},
            move4:{x:p2.x, y: p2.y + large*2}
        },

        e6 = {
            x:p2.x+large, y:p2.y+large,
            move1:{x:p2.x, y: p2.y + large*2},
            move2:{x:p2.x-large, y:p2.y + large},
            move3:{x:p2.x, y:p2.y},
            move4:{x:p2.x+large, y:p2.y+large}
        }
    ]

    sCara1 = [
        s1 = {
            x:p.x, y:p.y,
            move1:{x:p.x - large, y: p.y -large},
            move2:{x:p.x, y:p.y - large *2},
            move3:{x:p.x + large, y: p.y - large},
            move4:{x:p.x, y:p.y}
        },


        s2 = {x:p.x - large, y: p.y -large,
            move1:{x:p.x, y:p.y - large*2},
            move2:{x:p.x + large, y: p.y - large},
            move3:{x:p.x, y:p.y},
            move4:{x:p.x - large, y: p.y -large}
        },


        s3 = {
            x:p.x + large, y: p.y - large,
            move1:{x:p.x, y:p.y},
            move2:{x:p.x - large, y: p.y -large},
            move3:{x:p.x, y:p.y - large*2},
            move4:{x:p.x + large, y: p.y - large}
        },
        
        s4 = {
            x:p.x, y:p.y - large*2,
            move1:{x:p.x + large, y: p.y - large},
            move2:{x:p.x, y:p.y},
            move3:{x:p.x - large, y: p.y -large},
            move4:{x:p.x, y:p.y - large*2}
        }
    ]

    sCara2 = [

        s8 = {
            x:p2.x, y:p2.y,
            move1:{x:p2.x+large, y:p2.y+large},
            move2:{x:p2.x, y: p2.y + large*2},
            move3:{x:p2.x-large, y:p2.y + large},
            move4:{x:p2.x, y:p2.y}
        },
        s5 = {
            x:p2.x-large, y:p2.y + large,
            move1:{x:p2.x, y:p2.y},
            move2:{x:p2.x+large, y:p2.y+large},
            move3:{x:p2.x, y: p2.y + large*2},
            move4:{x:p2.x-large, y:p2.y + large}
        },

        s7 = {
            x:p2.x, y: p2.y + large*2,
            move1:{x:p2.x-large, y:p2.y + large},
            move2:{x:p2.x, y:p2.y},
            move3:{x:p2.x+large, y:p2.y+large},
            move4:{x:p2.x, y: p2.y + large*2}
        },

        s6 = {
            x:p2.x+large, y:p2.y+large,
            move1:{x:p2.x, y: p2.y + large*2},
            move2:{x:p2.x-large, y:p2.y + large},
            move3:{x:p2.x, y:p2.y},
            move4:{x:p2.x+large, y:p2.y+large}
        }
    ]
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.parent('boxContainer');
  	positions(135, 0.5);
}

function draw() {

	clear();	
	drawPoints();
	drawLines();
	moveCube();
	
}

function moveCube(){
	var next = true;
	
	for(var i = 0; i < cara1.length; i++){

		var e = cara1[i];

		if (moveN == 1) {
			if (e.x < e.move1.x) {
				next = false;
				e.x += speed;
			}

			if (e.x > e.move1.x) {
				next = false;
				e.x -= speed;
			}

			if (e.y < e.move1.y) {
				next = false;
				e.y += speed;
			}

			if (e.y > e.move1.y) {
				next = false;
				e.y -= speed;
			}
		}

		if (moveN == 2) {
			if (e.x < e.move2.x) {
				next = false;
				e.x += speed;
			}

			if (e.x > e.move2.x) {
				next = false;
				e.x -= speed;
			}

			if (e.y < e.move2.y) {
				next = false;
				e.y += speed;
			}

			if (e.y > e.move2.y) {
				next = false;
				e.y -= speed;
			}
		}

		if (moveN == 3) {
			if (e.x < e.move3.x) {
				next = false;
				e.x += speed;
			}

			if (e.x > e.move3.x) {
				next = false;
				e.x -= speed;
			}

			if (e.y < e.move3.y) {
				next = false;
				e.y += speed;
			}

			if (e.y > e.move3.y) {
				next = false;
				e.y -= speed;
			}
		}

		if (moveN == 4) {
			if (e.x < e.move4.x) {
				next = false;
				e.x += speed;
			}

			if (e.x > e.move4.x) {
				next = false;
				e.x -= speed;
			}

			if (e.y < e.move4.y) {
				next = false;
				e.y += speed;
			}

			if (e.y > e.move4.y) {
				next = false;
				e.y -= speed;
			}
		}
	}

	for(var i = 0; i < cara2.length; i++){
		
		var e = cara2[i];

		if (moveN == 1) {
			if (e.x < e.move1.x) {
				e.x += speed;
			}

			if (e.x > e.move1.x) {
				e.x -= speed;
			}

			if (e.y < e.move1.y) {
				e.y += speed;
			}

			if (e.y > e.move1.y) {
				e.y -= speed;
			}
		}

		if (moveN == 2) {
			if (e.x < e.move2.x) {
				e.x += speed;
			}

			if (e.x > e.move2.x) {
				e.x -= speed;
			}

			if (e.y < e.move2.y) {
				e.y += speed;
			}

			if (e.y > e.move2.y) {
				e.y -= speed;
			}
		}

		if (moveN == 3) {
			if (e.x < e.move3.x) {
				e.x += speed;
			}

			if (e.x > e.move3.x) {
				e.x -= speed;
			}

			if (e.y < e.move3.y) {
				e.y += speed;
			}

			if (e.y > e.move3.y) {
				e.y -= speed;
			}
		}

		if (moveN == 4) {
			if (e.x < e.move4.x) {
				e.x += speed;
			}

			if (e.x > e.move4.x) {
				e.x -= speed;
			}

			if (e.y < e.move4.y) {
				e.y += speed;
			}

			if (e.y > e.move4.y) {
				e.y -= speed;
			}
		}
	}

	if (next == true) {
		if (moveN == 4) {
			moveN = 1;
		}else{
			moveN += 1;
		}
	}
}

function drawPoints(){
	noStroke();
	/* CARA1 */
	for(var i = 0; i < cara1.length;i++){
		ellipse(cara1[i].x, cara1[i].y, 6);
	}

	/* CARA1 */
	for(var i = 0; i < cara2.length;i++){
		ellipse(cara2[i].x, cara2[i].y, 6);
	}

}

function drawLines(){
		stroke('#fff');
		
		/*  CARA1 */

		line(e1.x, e1.y, e2.x, e2.y);
		line(e1.x, e1.y, e3.x, e3.y);

		line(e4.x, e4.y, e2.x, e2.y);
		line(e4.x, e4.y, e3.x, e3.y);

		/* CARA2 */

		line(e7.x, e7.y, e5.x, e5.y);
		line(e7.x, e7.y, e6.x, e6.y);

		line(e8.x, e8.y, e5.x, e5.y);
		line(e8.x, e8.y, e6.x, e6.y);

		/* UNIONES */
		line(e1.x, e1.y, e7.x, e7.y);
		line(e2.x, e2.y, e5.x, e5.y);
		line(e3.x, e3.y, e6.x, e6.y);
		line(e4.x, e4.y, e8.x, e8.y);



		/* Caras estaticas */

		/*  CARA1 */

		line(s1.x, s1.y, s2.x, s2.y);
		line(s1.x, s1.y, s3.x, s3.y);

		line(s4.x, s4.y, s2.x, s2.y);
		line(s4.x, s4.y, s3.x, s3.y);

		/* CARA2 */

		line(s7.x, s7.y, s5.x, s5.y);
		line(s7.x, s7.y, s6.x, s6.y);

		line(s8.x, s8.y, s5.x, s5.y);
		line(s8.x, s8.y, s6.x, s6.y);

		/* UNIONES */
		line(s1.x, s1.y, s7.x, s7.y);
		line(s2.x, s2.y, s5.x, s5.y);
		line(s3.x, s3.y, s6.x, s6.y);
		line(s4.x, s4.y, s8.x, s8.y);

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
    positions(135, 0.5);
}