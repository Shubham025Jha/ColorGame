var square= document.querySelectorAll(".square");//selectingAllSquares
var size=6;var flag=1; var rflag=0;
var color//Generating array of 6 different Colors.
var heading=document.querySelector(".heading");
var instruction= document.querySelector("span");
var newgame=document.getElementById("newgame");
var level=document.querySelectorAll("#hard");
var easy=document.querySelector("#low");
var hard=document.querySelector("#high");
var pickedcolor;
var colorDisp= document.getElementById("pickedcolor");
var help= document.querySelector(".madad");
var rules=document.getElementById("rules");
var clickedcolor;
var score=50;

reset();

//below set of code is for help button to toggle the instruction.
help.addEventListener("click", function(){
if(rflag===0){
rules.textContent="We know all colors in the world is made up of red green and blue. Mixing all you get white & mixing none gives you black. Here maximum of any color you get is 255. So you have been given different amount of Red Green And Blue you need to find the Right Color that you get by mixing those amounts.";
 rflag=1;}
else
{
rflag=0;
rules.textContent="";
}
});

//below set of code is to make level easy from hard and leave otherwise
easy.addEventListener("click", function()
{
	if(flag===1)
	{
	size=3;flag=0;score=20;
	level[0].classList.remove("square");
	level[1].classList.remove("square");
    level[2].classList.remove("square");
	square= document.querySelectorAll(".square");
	reset();
    }
});

//below set of code is to make level hard from easy and leave otherwise
hard.addEventListener("click", function()
{
	if(flag===0)
	{
		size=6;flag=1; score=50;
        level[0].classList.add("square");
        level[1].classList.add("square");
		level[2].classList.add("square");
		square=document.querySelectorAll(".square");
        reset();
	}
});

//inializes the webpage.
function  reset()
{
	color=generateRandomColors(size);
	pickedcolor=color[Math.floor(Math.random()*color.length)];
	colorDisp.textContent=pickedcolor;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color[i];
	}
	instruction.textContent="Click the Right Color";
	newgame.textContent="New Game"
}

newgame.addEventListener("click", reset);//resets the page

for(var i=0;i< square.length; i++)
{
	//the actual game code
	square[i].addEventListener("click",function(){
		clickedcolor=this.style.backgroundColor;

		if(clickedcolor===pickedcolor)
		{
			instruction.textContent="Right! Score="+score;
			if(flag===1)score=50;
			else if(flag===0) score=20;
			newgame.textContent="Play Again?"
            heading.style.backgroundColor=pickedcolor;
            for(var j=0;j<square.length;j++)
            {
            	square[j].style.backgroundColor=clickedcolor;
            }
		}
		else if(clickedcolor!==pickedcolor){
			this.style.backgroundColor="#232323";
			instruction.textContent="Try Again!!!!";
			score-=10;
			if(score===20 ){
				if(flag===1){
				instruction.textContent="Try Easy or Guess Again!!";
				}
			}
		}
	});
}

//the below function is a color generator and generates an array of different colors of given size
function generateRandomColors(size) {
	var arr=[]

	for(var i=0;i<size;i++)
	{
	var red, green , blue;
	red=Math.floor(Math.random()*256);
	green=Math.floor(Math.random()*256);
	blue=Math.floor(Math.random()*256);
	arr[i]="rgb("+red+", "+green+", "+blue+")";
    }
	return arr;
	// body...
}
