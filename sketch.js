const testo = "BILIBALA";
const font_size = 100;
const percorso_font = "./fonts/Outfit-SemiBold.ttf";
const lunghezza_linea = 5;
const densita = 0.25;
const griglia = 20

//

/** @type {Font} */
let font;

let palette = [
  '#1B75BB','#F15A24','#FBB03B','#8DC63F','#662D91'
];

function preload() {
  font = loadFont(percorso_font);
}

//

function setup() {
  createCanvas(windowWidth, windowHeight, "svg");
  addDownloadButton();

  rectMode(CORNER);
  noLoop(); // 只渲染一次
  noStroke()
  textFont(font)
  textSize(font_size)
}

function draw() {
  clear(); // Non cancellare!

  background('#F3E9D2');

  

   // 列数、行数
   const cols = ceil(width  / griglia);
   const rows = ceil(height / griglia);

   for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if(random() < densita) {
        // 宽高随机：1~3 格
        let w = int(random(1, 4)) * griglia;
        let h = int(random(1, 4)) * griglia;
        let x = i * griglia;
        let y = j * griglia;
        fill(random(palette));
        rect(x, y, w, h);
    }
  }
}

  fill(0)
  text(testo, width/2, height/4)
}   

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();

}
