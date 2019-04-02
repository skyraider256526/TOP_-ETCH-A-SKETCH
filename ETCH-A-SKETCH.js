//jshint esversion:6
let container=document.querySelector('.container');
let divRows=0;
let grid_column=prompt('enter');
container.style.gridTemplateColumns=`repeat(${grid_column},1fr	)`;
for(i=0;i<grid_column*grid_column;i++)
{ console.log('worked')
  divRows=document.createElement('div');
  let text=document.createTextNode(i);
  divRows.classList.add('rows');
  divRows.appendChild(text);	
  container.appendChild(divRows);
}

