//jshint esversion:6
//select grid container
let container=document.querySelector('.container');
//initilize the object for div
let divRows=0;
//ask for grid dimension
let grid_column=prompt('enter');
//set the number of column for grid
container.style.gridTemplateColumns=`repeat(${grid_column},1fr	)`;
//add the div element in the grid 
for(i=1;i<=grid_column*grid_column;i++){ 
  divRows=document.createElement('div');
  let x = document.createTextNode(i);
  divRows.appendChild(x);
  divRows.classList.add('rows');
  divRows.setAttribute('id',`ele${i}`);
  divRows.style.height=600/grid_column;
  divRows.style.width=960/grid_column;
  container.appendChild(divRows);
}
console.log(i);
 //round of the corners of corner div in grid
 document.querySelector('#ele1').style.borderRadius='60px 0 0 0';
 document.querySelector(`#ele${grid_column}`).style.borderRadius='0 60px 0 0';
 document.querySelector(`#ele${i-grid_column}`).style.borderRadius='0 0 0 60px';
 document.querySelector(`#ele${i-1}`).style.borderRadius='0 0 60px 0';