var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  var color = document.getElementById("hex").value;
 
  ctx.beginPath(); // begin the drawing path
  ctx.lineWidth = document.getElementById("linewidth").value; // Brush size
  //ctx.lineWidth = (10); // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}

// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


//HEX COLOR GENERATOR
// generator function
function getColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}
// sets background color style
function setBackground() {
  var bgColor = getColor();
  document.body.style.background = bgColor;
}
// runs function on click
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    setBackground();
  }
};



// Brush Size : <select id="selWidth"> 
            //<option value="1" selected="selected">Small</option>
            //<option value="3">Medium</option>
            //<option value="5">Large</option>
        //</select>
//<div class="brushes">
          //<button type="button" value="1">Small</button>
          //<button type="button" value="2">Medium</button>
          //<button type="button" value="3">Large</button>
 //</div>