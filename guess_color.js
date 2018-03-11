var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");
for(var i=0; i<squares.length; i++)
{
  //add background color to square
  squares[i].style.backgroundColor = colors[i];
  //grab clicked colors
  
  //click listener to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor)
      {
       message.textContent = "Correct";
        changeBackColor(clickedColor);
      }
    else{
        message.textContent = "Try again!";
        this.style.backgroundColor = "#202120";
    }
  });
}

//set all squares to selected colors
function changeBackColor(color)
{
  for(var i=0; i<squares.length; i++)
    {
      squares[i].style.backgroundColor = color;
    }
}

// Generate pick 1 out of 6 colorDisplay
function pickColor()
{
  var random = Math.floor((Math.random() * colors.length + 1));
  return colors[random];
}

//************
function generateRandomColor(num)
{
  var arr = [];
  for(var i=0; i < num; i++)
    {
      arr.push(randomColor());
    }
  return arr;
}

function randomColor()
{
  var r = Math.floor((Math.random() * 256));
  var g = Math.floor((Math.random() * 256));
  var b = Math.floor((Math.random() * 256));
  
  return "rgb(" + r + ", " + g + ", " + b + ")" ;
}
