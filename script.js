//creating environment

const canvas = document.getElementById("graph-interface");
c = canvas.getContext("2d");
canvas.width = window.innerWidth * (3 / 4);
canvas.height = window.innerHeight / 2;

//establishing origin as the center of the page/ including resize function, and scale of the graph

let originX = canvas.width / 2;
let originY = canvas.height / 2;
let scaleSize = 50;
scale = canvas.width / scaleSize;
let gridLeft = 1 / ((scale / canvas.width) * -2);
let gridRight = 1 / ((scale / canvas.width) * 2);
addEventListener("resize", function () {
  canvas.width = window.innerWidth * (3 / 4);
  canvas.height = window.innerHeight / 2;
  originX = canvas.width / 2;
  originY = canvas.height / 2;
  scale = canvas.width / scaleSize;
  gridLeft = 1 / ((scale / canvas.width) * -2);
  gridRight = 1 / ((scale / canvas.width) * 2);
  drawGraph();
  drawFunction();
});

//creating functions for drawing lines on graph visually

const drawVerticalLine = (num) => {
  let X = originX + scale * num;
  c.beginPath();
  c.moveTo(X, 0);
  c.lineTo(X, canvas.height);
  c.lineWidth = 0.5;
  if (num == 0) {
    c.lineWidth = 3;
  }
  c.stroke();
  c.closePath();
};
const drawHorizontalLine = (num) => {
  let Y = originY + scale * num;
  c.beginPath();
  c.moveTo(0, Y);
  c.lineTo(canvas.width, Y);
  c.lineWidth = 0.5;
  if (num == 0) {
    c.lineWidth = 3;
  }
  c.stroke();
  c.closePath();
};
const drawGraph = () => {
  for (let i = gridLeft; i < gridRight; i++) {
    drawHorizontalLine(i);
    drawVerticalLine(i);
  }
};

//establishing functions to determine coordinates

const xCoord = (num) => {
  return originX + scale * num;
};
const yCoord = (num) => {
  return originY + scale * -num;
};

//taking input and drawing function

const takeInput = (x) => {
  return 5 * Math.sin(Math.cos(x));
};
const drawPoint = (x, y) => {
  c.beginPath();
  c.arc(xCoord(x), yCoord(y), 1, 0, Math.PI * 2, true);
  c.fillStyle = "red";
  c.fill();
};
const drawFunction = () => {
  for (let i = gridLeft; i <= gridRight; i += 0.008) {
    drawPoint(i, takeInput(i));
  }
};
drawGraph();
drawFunction();
