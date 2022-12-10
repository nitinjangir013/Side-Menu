let selectedLineDiv = document.getElementsByClassName('line');
let arrow = document.getElementById('arrow_img');
let selectedMainDiv = document.getElementsByClassName('main')[0];
var isOpenMenu = false;


function lineShow(indexNum)
{
	selectedLineDiv[indexNum].style.transform = 'scaleY(1)';
}

function lineHide(indexNum)
{
	selectedLineDiv[indexNum].style.transform = 'scaleY(0)';
}

function openMenu()
{
	if (isOpenMenu==false) 
	{
		selectedMainDiv.style.width = "200px";
		arrow.style.transform = "rotate(0deg)";
		isOpenMenu = true;
	}
	else
	{
		selectedMainDiv.style.width = "80px";
		arrow.style.transform = "rotate(180deg)";
		isOpenMenu = false;
	}
}