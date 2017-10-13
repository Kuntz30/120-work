function setup() {
    createCanvas( 1000, 1000 );
    background('rgb(0,255,0)');
}

function draw() {
  push();

  // set the grid center( x:0, y:0 )
  // to canvas center
  translate( 500 , 500 );


  /* ***************************** */
  /* ARMS */
  /* ***************************** */
  push();
  translate( 0, -55 );

  // left arm
  stroke( 'rgb(75, 185, 255)' );
  strokeWeight( 10 );
  line( -50, 80, -200 , 100 );
  line( -200, 100, -200, 260 );

  // hand
  stroke( 'rgb(133, 94, 0)' );
  strokeWeight( 75 );
  point( -200, 300 );

  // right arm
  rotate( PI );
  stroke( 'rgb(75, 185, 255)' );
  strokeWeight( 10 );
  line( 0, 0, -200, -100 );
  line( -200, -100, -240, -240 );

  // hand
  stroke( 'rgb(133, 94, 0)' );
  strokeWeight( 75 );
  point( -255, -270 );

  pop(); // ARMS END

  push();
    // main body rectangle
    rect( -48, -75, 90, 275 );

  /* LEGS */

    push();
    translate( 0, 200 );

    // left leg
    fill( 'rgb(133, 94, 0)' );
    triangle( -50, 0, 0, 0, -100, 300 );
    // right leg
    scale( -1, 1 );
    triangle( -45, 0, 0, 0, -100, 300 );
    pop(); // LEGS END

    push();
    translate( 0, -175 );

    fill( 'rgb(75, 185, 255)' );
    ellipse( 0, 0, 150, 200 );



    // mouth
    fill( 0 );
    arc(
        0,
        50,
        250,
        60,
        radians(50),
        radians(130),
        PIE
    );

    // nose
    ellipse( 0, 0, 60, 35 );

    // eyes
    // right
       push();
       translate( 60, -40 );

       fill(255);
       ellipse( 0, 0, 60, 35 );
       noFill();
       fill( 'rgb(0,255,0)' );
       ellipse( 0, 0, 30 );
       fill( 0 );
       ellipse( 0, 0, 20 );
       fill( 'rgb(119, 56, 25)' );
       quad( -40, -40, -35, -30, 50, -10, 45, -30 );
       pop();

    // left
    push();
    translate( -60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(0,255,0)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );

    fill( 'rgb(119, 56, 25)' );
    quad( 40, -40, 35, -30, -50, -10, -45, -30 );
    pop();

       pop(); // HEAD END

       pop(); //END CHARACTER
}
