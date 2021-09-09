//creating environment

const canvas = document.getElementById("graph-interface");
c = canvas.getContext("2d");
canvas.width = window.innerWidth * (3 / 4);
canvas.height = window.innerHeight / 2;

//establishing origin as the center of the page/ including resize function, and scale of the graph

let originX = canvas.width / 2;
let originY = canvas.height / 2;
let scaleSize = 20;
scale = canvas.width / scaleSize;
let gridLeft = 1 / ((scale / canvas.width) * -2);
let gridRight = 1 / ((scale / canvas.width) * 2);
let displayArr = [];
let displayArr2 = [];
let displayIndex = 0;
let funcArr = [];
let userInput = "";
const yEquals = document.getElementById("yEquals");
addEventListener("resize", function () {
  canvas.width = window.innerWidth * (3 / 4);
  canvas.height = window.innerHeight / 2;
  originX = canvas.width / 2;
  originY = canvas.height / 2;
  scale = canvas.width / scaleSize;
  gridLeft = 1 / ((scale / canvas.width) * -2);
  gridRight = 1 / ((scale / canvas.width) * 2);
  slider.min = gridLeft;
  slider.max = gridRight;
  drawGraph();
  drawFunction();
});
addEventListener("wheel", function (event) {
  if (event.deltaY == -100) {
    scaleSize += 2;
    scale = canvas.width / scaleSize;
    gridLeft = 1 / ((scale / canvas.width) * -2);
    gridRight = 1 / ((scale / canvas.width) * 2);
    c.clearRect(0, 0, canvas.width, canvas.height);
    slider.min = gridLeft;
    slider.max = gridRight;

    drawGraph();
    drawFunction();
  } else {
    scaleSize -= 2;
    scale = canvas.width / scaleSize;
    gridLeft = 1 / ((scale / canvas.width) * -2);
    gridRight = 1 / ((scale / canvas.width) * 2);
    c.clearRect(0, 0, canvas.width, canvas.height);

    drawGraph();
    drawFunction();
  }
});
addEventListener("keydown", function (event) {
  if (event.key == "+") {
    scaleSize += 2;
    scale = canvas.width / scaleSize;
    gridLeft = 1 / ((scale / canvas.width) * -2);
    gridRight = 1 / ((scale / canvas.width) * 2);
    c.clearRect(0, 0, canvas.width, canvas.height);
    slider.min = gridLeft;
    slider.max = gridRight;
    drawGraph();
    drawFunction();
  } else if (event.key == "-") {
    scaleSize -= 2;
    scale = canvas.width / scaleSize;
    gridLeft = 1 / ((scale / canvas.width) * -2);
    gridRight = 1 / ((scale / canvas.width) * 2);
    c.clearRect(0, 0, canvas.width, canvas.height);
    slider.min = gridLeft;
    slider.max = gridRight;
    drawGraph();
    drawFunction();
  }
});
//creating functions for drawing lines on graph visually

const drawVerticalLine = (num) => {
  let X = originX + scale * num;
  c.beginPath();
  c.moveTo(X, 0);
  c.lineTo(X, canvas.height);

  c.strokeStyle = "black";
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
  c.strokeStyle = "black";
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
    c.beginPath();
    c.fillStyle = "black";
    c.font = "20px timesnewroman";
    c.fillText(
      (-(scaleSize / 2 - 1)).toString(),
      canvas.width / scaleSize,
      canvas.height / 2 + canvas.width / scaleSize
    );
    c.fillText(
      (scaleSize / 2 - 1).toString(),
      canvas.width - canvas.width / scaleSize,
      canvas.height / 2 + canvas.width / scaleSize
    );
  }
};

//establishing functions to determine coordinates

const xCoord = (num) => {
  return originX + scale * num;
};
const yCoord = (num) => {
  return originY + scale * -num;
};

//opperation objects

class Opperation {
  constructor(type) {
    this.type = type;
  }
  appendToDisplay() {
    if (this.type == "+") {
      displayArr2.push(this.type);
    } else if (this.type == "-") {
      displayArr2.push(this.type);
    } else if (this.type == "*") {
      displayArr2.push(this.type);
    } else if (this.type == "/") {
      displayArr2.push(this.type);
    } else if (this.type == "(") {
      displayArr2.push(this.type);
    } else if (this.type == ")") {
      displayArr2.push(this.type);
    } else if (this.type == ")^") {
      displayArr2.push(this.type);
    } else if (this.type == "sin(") {
      displayArr2.push(this.type);
    } else if (this.type == "cos(") {
      displayArr2.push(this.type);
    } else if (this.type == "tan(") {
      displayArr2.push(this.type);
    } else if (this.type == "log(") {
      displayArr2.push(this.type);
    } else if (this.type == "=") {
      displayArr2.push(this.type);
    } else if (this.type == "1") {
      displayArr2.push(this.type);
    } else if (this.type == "2") {
      displayArr2.push(this.type);
    } else if (this.type == "3") {
      displayArr2.push(this.type);
    } else if (this.type == "4") {
      displayArr2.push(this.type);
    } else if (this.type == "5") {
      displayArr2.push(this.type);
    } else if (this.type == "6") {
      displayArr2.push(this.type);
    } else if (this.type == "7") {
      displayArr2.push(this.type);
    } else if (this.type == "8") {
      displayArr2.push(this.type);
    } else if (this.type == "9") {
      displayArr2.push(this.type);
    } else if (this.type == "0") {
      displayArr2.push(this.type);
    } else if (this.type == "X") {
      displayArr2.push(this.type);
    }
  }
  appendToFunc() {
    if (this.type == "+") {
      funcArr.push(this.type);
    } else if (this.type == "-") {
      funcArr.push(this.type);
    } else if (this.type == "*") {
      funcArr.push(this.type);
    } else if (this.type == "/") {
      funcArr.push(this.type);
    } else if (this.type == "(") {
      funcArr.push(this.type);
    } else if (this.type == ")") {
      funcArr.push(this.type);
    } else if (this.type == ")^") {
      funcArr.push(")**");
    } else if (this.type == "sin(") {
      funcArr.push("Math.sin(");
    } else if (this.type == "cos(") {
      funcArr.push("Math.cos(");
    } else if (this.type == "tan(") {
      funcArr.push("Math.tan(");
    } else if (this.type == "log(") {
      funcArr.push("Math.log(");
    } else if (this.type == "=") {
      funcArr.push(this.type);
    } else if (this.type == "1") {
      funcArr.push(this.type);
    } else if (this.type == "2") {
      funcArr.push(this.type);
    } else if (this.type == "3") {
      funcArr.push(this.type);
    } else if (this.type == "4") {
      funcArr.push(this.type);
    } else if (this.type == "5") {
      funcArr.push(this.type);
    } else if (this.type == "6") {
      funcArr.push(this.type);
    } else if (this.type == "7") {
      funcArr.push(this.type);
    } else if (this.type == "8") {
      funcArr.push(this.type);
    } else if (this.type == "9") {
      funcArr.push(this.type);
    } else if (this.type == "0") {
      funcArr.push(this.type);
    } else if (this.type == "X") {
      funcArr.push("x");
    }
  }
}
let buttonPress = (type) => {
  if (type == "=") {
    userInput = funcArr.join("");
    drawGraph();
    drawFunction();
  } else {
    if (type == "back" && displayIndex > 0) {
      displayArr.splice(displayIndex - 1, 1);
      displayArr2.splice(displayIndex - 1, 1);
      funcArr.splice(displayIndex - 1, 1);
      displayIndex--;
      yEquals.innerHTML = "Y=" + displayArr2.join("");
    } else if (type == "clear") {
      displayArr = [];
      displayArr2 = [];
      funcArr = [];
      displayIndex = 0;
      yEquals.innerHTML = "Y=" + displayArr2.join("");
    } else if (
      displayIndex > 0 &&
      (type == "sin(" ||
        type == "cos(" ||
        type == "tan(" ||
        type == "log(" ||
        type == "ln(" ||
        type == "(" ||
        type == "X") &&
      (displayArr[displayArr.length - 1].type == "0" ||
        displayArr[displayArr.length - 1].type == "1" ||
        displayArr[displayArr.length - 1].type == "2" ||
        displayArr[displayArr.length - 1].type == "3" ||
        displayArr[displayArr.length - 1].type == "4" ||
        displayArr[displayArr.length - 1].type == "5" ||
        displayArr[displayArr.length - 1].type == "6" ||
        displayArr[displayArr.length - 1].type == "7" ||
        displayArr[displayArr.length - 1].type == "8" ||
        displayArr[displayArr.length - 1].type == "9" ||
        displayArr[displayArr.length - 1].type == "X" ||
        displayArr[displayArr.length - 1].type == ")")
    ) {
      displayArr.push(new Opperation("*"));
      displayArr[displayIndex].appendToDisplay();
      displayArr[displayIndex].appendToFunc();
      displayIndex++;
      yEquals.innerHTML = "Y=" + displayArr2.join("");

      displayArr.push(new Opperation(type));
      displayArr[displayIndex].appendToDisplay();
      displayArr[displayIndex].appendToFunc();
      displayIndex++;
      yEquals.innerHTML = "Y=" + displayArr2.join("");
    } else {
      displayArr.push(new Opperation(type));
      displayArr[displayIndex].appendToDisplay();
      displayArr[displayIndex].appendToFunc();
      displayIndex++;
      yEquals.innerHTML = "Y=" + displayArr2.join("");
    }
  }
};
//taking input and drawing function

const takeInput = (x) => {
  return eval(userInput);
};

const drawFunction = () => {
  c.beginPath();
  c.moveTo(gridLeft, takeInput(gridLeft));
  c.lineWidth = 3.5;
  c.strokeStyle = "rgb(10, 101, 143)";
  for (let i = gridLeft; i <= gridRight; i += 0.01) {
    c.lineTo(xCoord(i), yCoord(takeInput(i)));
  }
  c.stroke();
  c.closePath();
};

//creating the function to establish relationship with slider

const slider = document.getElementById("findValueSlider");
slider.value = 0;
slider.min = gridLeft;
slider.max = gridRight;
slider.step = 0.000000000000001;
const input = document.getElementById("input");
const output = document.getElementById("output");
input.value = "X = " + slider.value;
output.value = "Y = " + takeInput(slider.value);
const findValueFromInput = (num) => {
  slider.value = num;
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawGraph();
  drawFunction();
  c.beginPath();
  c.arc(xCoord(num), yCoord(takeInput(num)), 5, 0, Math.PI * 2, true);
  c.fillStyle = "red";
  c.fill();
  c.closePath();
  input.value = "X = " + slider.value;
  output.value = "Y = " + takeInput(num);
};
const clearInput = () => {
  input.value = "";
};
const findValue = (num) => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawGraph();
  drawFunction();
  c.beginPath();
  c.arc(xCoord(num), yCoord(takeInput(num)), 5, 0, Math.PI * 2, true);
  c.fillStyle = "red";
  c.fill();
  c.closePath();
  input.value = "X = " + slider.value;
  output.value = "Y = " + takeInput(slider.value);
};

// processing user input

drawGraph();
drawFunction();
/*
create function to take inputs from buttons, maybe by putting it into an array and usind .join somehows*/
