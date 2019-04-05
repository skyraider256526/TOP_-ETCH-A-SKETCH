//jshint esversion:6

//select grid container

let container=document.querySelector('.container');

//initilize the object for div

let divRows=0;

let grid_column=prompt('enter');

//set the number of column for grid

container.style.gridTemplateColumns=`repeat(${grid_column},1fr	)`;

// function to add the div element in the grid 

function addsqr(n=16){
	//ask for grid dimension
	for(i=1;i<=grid_column*grid_column;i++){ 
  		divRows=document.createElement('div');
  		divRows.classList.add('rows');
  		divRows.setAttribute('id',`ele${i}`);
  		divRows.style.height=600/grid_column;
  		divRows.style.width=960/grid_column;
  		container.appendChild(divRows);
  	}
}
addsqr(grid_column);

//round of the corners of corner div in grid

document.querySelector('#ele1').style.borderRadius='25px 0 0 0';
document.querySelector(`#ele${grid_column}`).style.borderRadius='0 25px 0 0';
document.querySelector(`#ele${i-grid_column}`).style.borderRadius='0 0 0 25px';
document.querySelector(`#ele${i-1}`).style.borderRadius='0 0 25px 0';

// function to color the div elements

let colorme = () =>{
	document.querySelectorAll(".rows").forEach(content => {
		content.onmouseover = () => {
			let color =Math.floor(Math.random() * 16777216).toString(16);
			content.style.backgroundColor=`#${color}`;
		};
	});
};
//executing colorme() function
colorme();

//clear the div element 

function clear(){
container.innerText='';
grid_column=prompt('enter the text');
addsqr(grid_column);
}

//onclick clear the element
 document.querySelector('.clear').onclick= clear;